import React, { Component } from 'react'
import {Container, Card, Row, CardImg,Overlay, Col} from 'react-bootstrap';
import styled from 'styled-components'

const Style= styled.div`
.ro{
    justify-content: center;
}
`


export class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             selectedItem:null
        }
    }

    
    
    render() {
    const menu = this.props.items.map((item) => {
        return(
            <div key={item.id} className="col-12 col-md-5 m-1">
                <Card >
                <Card.Img width="100%" height="300px" src={item.image} alt={item.name} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                    Category: {item.category}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
    )

   
        return (
            <Style>
            <Container className="text-center">
                <h1 className="m-5">Available details</h1>
                <Row className="ro">
                
                {menu}
                
                </Row>
                <br></br>
                <p > Design and Developed by <a href="https://www.shrestharakesh.com.np/">Rakesh Shrestha</a></p>
                   
            </Container>
            </Style>
        )
    }
}

export default Main;
