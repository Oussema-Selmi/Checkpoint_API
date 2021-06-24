import React from 'react'
import {Card ,ListGroup} from 'react-bootstrap'

const User = ({user}) => {

    return (
        <Card  style={{ width: '18rem' , backgroundColor:"red" , marginTop:"25px" }}>
    <ListGroup variant="flush">
    <ListGroup.Item>{user.name}</ListGroup.Item>
    <ListGroup.Item>{user.username}s in</ListGroup.Item>
    <ListGroup.Item>{user.email}</ListGroup.Item>
    <ListGroup.Item>{`Address : ${user.address.street} , ${user.address.suite} , ${user.address.suite} , ${user.address.zipcode} `}</ListGroup.Item>
    <ListGroup.Item>{`Location : ${user.address.geo.lat} , ${user.address.geo.lng} `}</ListGroup.Item>
    </ListGroup>
        </Card>
    )
}

export default User
