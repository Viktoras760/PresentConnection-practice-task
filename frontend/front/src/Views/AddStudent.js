import { useState } from 'react';
import APIController from '../Controllers/APIController';
import {Spinner, Button, Row, Col, Card, Form, Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {
    const { http } = APIController();
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [university, setUniversity] = useState();

    const [isLoading, setLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState();


    const addStudent = () => {
        setLoading(true);
        http.post(`/Students/`, { name: name, lastName: lastName, age: age, university: university }).then((res) => {
            sessionStorage.setItem('post-success', res.data.success);
            navigate('/students');
        }).catch((error) => {
            if(error.response.data.error != null) {
                setErrorMessage(error.response.data.error);
            } else if (error.response.data.errors != null) {
                var errors = error.response.data.errors;
                var all_errors = [];
                Object.keys(errors).map((err) => (
                    all_errors.push(errors[err][0])
                ))
                setErrorMessage(all_errors.join("\n"));
            }
        }).finally(() => {
            setLoading(false);
        });
    }

    function ErrorAlert({message}) {
        const [show, setShow] = useState(message ? true : false);

        if (show) {
            return (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible className="mt-3">
                    <Alert.Heading>Error</Alert.Heading>
                    <p>
                        {message}
                    </p>
                </Alert>
            );
        }
        return (<></>);
    }

    return (
        <Row className="justify-content-center pt-5">
            <Col>
                <Card className="p-4">
                    <h1 className="text-center mb-3">Add new student</h1>
                    <ErrorAlert message={errorMessage} />
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"  onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name"  onChange={e => setLastName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter age"  onChange={e => setAge(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUniversity">
                        <Form.Label>University</Form.Label>
                        <Form.Control type="text" placeholder="Enter university" onChange={e => setUniversity(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={isLoading} onClick={!isLoading ? addStudent : null}>
                        {isLoading ? <><Spinner animation="border" size="sm" /> Loading…</> : 'Add'}
                    </Button>
                </Card>
            </Col>
        </Row>
    )

}