import React from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from "./CommentArea";

class BookList extends React.Component {
  state = {
        searchQuery: "",
        selectedBookAsin: "",
    };
    
    selectBook = (asin) => {
        this.setState({ selectedBookAsin: asin });
      };

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={this.state.searchQuery}
                                onChange={e => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Row>
                         {
                        this.props.books
                        .filter(b => 
                        b.title.toLowerCase().includes(this.state.searchQuery))
                        .map(b => (
                            <Col key={b.asin} xs={3}>
                                <SingleBook book={b} selectBook={this.selectBook}/>
                            </Col>
                        ))
                    }
                    </Row>
                    </Col>
                    <Col md={4}> {this.state.selectedBookAsin && (
              <CommentArea bookAsin={this.state.selectedBookAsin} />
            )}</Col>
                   
                </Row>
            </Container>
        )
    }

}

export default BookList
