import useSWR from "swr"; // for caching using swr

import { Card, Button } from 'react-bootstrap';
import styles from './User.module.css'



const fetcher = url => fetch(url).then(res => res.json())

const User = ({ username }) => {
    const { data } = useSWR(`/api/user?username=${username}`, fetcher) //fetching data from api
    console.log(data);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data?.user.avatarUrl} />
            <Card.Body>
                <Card.Title><h2>{data?.user.username || ''}</h2></Card.Title>
                <Card.Text>
                    <h4>Name: {data?.user.name || 'N/A'}</h4>
                    <p>Bio: {data?.user.bio || 'N/A'}</p>
                    <p>Number of repositories: {data?.user.repos.totalCount}</p>
                </Card.Text>
                <Button variant="link" className={styles.showmore} href={data?.user.url}>Show More</Button>
            </Card.Body>
        </Card>
    )
}

export default User;