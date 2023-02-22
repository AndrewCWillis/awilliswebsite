import React from 'react';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
/*
    - will return the main content of the home page of the website
*/
const Content = () => {
    return (  
        <div style = {{justifyContent: "center", marginLeft: 450}}>
            <Stack gap={2} className="col-md-5 mx-auto">
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card style={{ marginTop: 20, width: 700}}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </Stack>
        </div>
    );
}
 
export default Content;