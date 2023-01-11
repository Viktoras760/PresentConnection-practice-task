import { useState, useEffect } from 'react';
import APIController from '../Controllers/APIController';
import {Button, Row, Col, Card, Form} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function GetStudent() {
    const { http } = APIController();
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [university, setUniversity] = useState();

    const { id } = useParams();

    useEffect(() => {
        getStudent();
    })

    const getStudent = () => {
        http.get(`/Students/${id}`).then((res) => {
            setName(res.data.name);
            setLastName(res.data.lastName);
            setAge(res.data.age);
            setUniversity(res.data.university);
        })
    }

    const Back= async(e, id) => {
        navigate(`/Students/`);
    };

    return (
        <Row className="justify-content-center pt-5">
            <Col>
                <Card className="p-4">
                    <h1 className="text-center mb-3">Student info</h1>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control readOnly type="text" value={name}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control readOnly type="text" value={lastName}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control readOnly type="number" value={age}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUniversity">
                        <Form.Label>University</Form.Label>
                        <Form.Control readOnly type="text" value={university} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={Back}>
                        { 'Return'}
                    </Button>
                </Card>
            </Col>
        </Row>
    )

}