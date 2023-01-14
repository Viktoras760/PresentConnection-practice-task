import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import StudentList from '../StudentList';
import AddStudent from '../AddStudent';
import GetStudent from '../Student';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function Auth() {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Present Connection</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/students/page/1">
                                <Nav.Link>Students</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/students/page/:number" element={<StudentList />} />
                    <Route path="/student" element={<AddStudent />} />
                    <Route path="/students/:id" element={<GetStudent />} />
                </Routes>
            </Container>
        </>
    );
}

export default Auth;