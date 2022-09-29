import React from "react";
import Card from "react-bootstrap/Card";
import Avatar from './Avatar.png'
function GitHubCard(){
    return(
        <div className="card">
            <Card>
                <Card.Img src={Avatar}/>
                <Card.Body>
                    <Card.Title>Richard Foil</Card.Title>
                    <Card.Text>
                        I am a software Dev student and a part time Cook
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard