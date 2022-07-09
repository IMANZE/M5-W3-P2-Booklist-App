import { Card, Button } from "react-bootstrap";
import React from "react";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "5px solid green" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
            {/* add price in a button */}
            <Button variant="dark">
              <b>Price: £ </b>
              {this.props.book.price}
            </Button>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea bookAsin={this.props.book.asin} />}
      </>
    );
  }
}

export default SingleBook;
