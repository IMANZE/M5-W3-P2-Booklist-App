import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loader from "./Loader";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comment: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.bookAsin,
        {
          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmMyZjA3ZjdjNDA0ZDAwMTU4OWFjNDMiLCJpYXQiOjE2NTY5NDI3MTksImV4cCI6MTY1ODE1MjMxOX0.DFHE848BNuqrF-Lwf_73U2NRAZY_AWGTxpSM0w7PpGo",
          },
        }
      );

      if (response.ok) {
        let comments = await response.json();
        this.setState({ comment: comments, isLoading: false, isError: false });
      } else {
        console.log("Error Occured");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      alert("Something Went Wrong: Try Again");
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.props.bookAsin !== prevProps.bookAsin) {
      this.fetchComments();
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <Loader />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.bookAsin} />
        <CommentList showComment={this.state.comment} />
      </div>
    );
  }
}

export default CommentArea;
