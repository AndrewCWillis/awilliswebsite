import React from 'react';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
/*
    - will return the main content of the home page of the website
*/
const Content = () => {
    const divider = {
        borderTop : '2px solid lightGray',
        marginTop: '15px',
        marginBottom: '15px',
    }
    return (  
        <div style = {{justifyContent: "center", marginLeft: 450}}>
            <Stack gap={2} className="col-md-5 mx-auto">
                <Card style={{ marginTop: 20, width: 700, textAlign: "center"}}>
                    <Card.Body>
                        <Card.Title className = 'text' style={{ fontWeight: 'bold'}}>Personal Project: "Hangout" (02/23)</Card.Title>
                        <div style = {divider}></div>
                        <img src = {require('../resources/discover.gif')}></img>
                        <div style = {divider}></div>
                        <Card.Text className = 'text text-muted'>
                                Since my graduation, I have attempted to both explore new softwares and refine my competency with others. 
                            The first expression of this desire has been my app "Hangout". I am implementing this app using React Native  
                            which interfaces with a DJango-based API. My intention is to create an app which enables the user to easily 
                            discover new locations to pass the time, alone or with friends. This idea compels the creation of several 
                            functions of the app-- 'Discover' page, an interactive map, and the ability to mark places the user likes. 
                        </Card.Text>
                        <div style = {divider}></div>
                        <Button primary>See more</Button>
                    </Card.Body>
                </Card>
                
            </Stack>
        </div>
    );
}
 
export default Content;