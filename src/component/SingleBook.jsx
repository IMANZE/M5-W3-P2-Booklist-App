import { Card, Button } from "react-bootstrap";
import React from "react";


class SingleBook extends React.Component {
  render() {
    return (
      <>
        <Card>
          <Card.Img onClick={() => {
              this.props.selectBook(this.props.book.asin);
            }}
          variant="top" src={this.props.book.img} />
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
      </>
    );
  }
}

export default SingleBook;
