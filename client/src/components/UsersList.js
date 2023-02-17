import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const UsersList = (username) => {
    <Container>
        <Row>
            <Col md={3}>
                <User username={username} />
            </Col>
        </Row>
    </Container>
}