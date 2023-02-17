import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from './Search.module.css'
import User from './User';
import { useRef, useState } from "react";
import UsersList from './UsersList'



const Search = () => {

    const inputRef = useRef(); // to bind to the input element
    const [username, setUsername] = useState("jayeshCodes") // default user
    const [name, setName] = useState("jayesh") // default user
    const [email, setEmail] = useState("") // default user



    const [selectedValue, setSelectedValue] = useState("Login");

    const handleSelectChange = e => {
        setSelectedValue(e.target.value);
    }

    // handleSubmit function
    const handleSubmit = e => {
        e.preventDefault();
        // const githubUsername = inputRef.current.value

        // if (!githubUsername) return;

        // setUsername(githubUsername.trim());


        if (selectedValue === "Login") {
            const githubUsername = inputRef.current.value

            if (!githubUsername) return;

            setUsername(githubUsername.trim());

        } else if (selectedValue === "Name") {
            const githubName = inputRef.current.value

            if (!githubName) return;

            setName(githubName.trim());

        } else if (selectedValue === "Email") {
            const githubEmail = inputRef.current.value

            if (!githubEmail) return;

            setEmail(githubEmail.trim());

        }


        e.target.reset();
    }




    return (
        <div>

            <Form className={styles.searchForm} onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Select onchange={handleSelectChange}>
                            <option value="Login" key="1">Login</option>
                            <option value="Name" key="2">Name</option>
                            <option value="Email" key="3">Email</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Control
                            type='search'
                            placeholder='User to be searched'
                            ref={inputRef}
                            pattern='^.{3,}$'
                            required
                            onInvalid={(e) => {
                                if (selectedValue === "Email"){
                                    if(githubEmail.test("/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ : /^.{3,}$/")){}
                                    else
                                    e.target.setCustomValidity('Please enter a valid email ID')
                                }
                                e.target.setCustomValidity('Please enter a string with at least 3 letters.');
                            }}
                            onChange={(e) => {
                                e.target.setCustomValidity('');
                            }} />
                    </Col>
                    <Col>
                        <Button variant='primary' type='submit'>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
            <div className={styles.usersList}>

            </div>
            <User username={username} />
        </div>

    )
}

export default Search;