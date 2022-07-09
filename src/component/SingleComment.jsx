import { ListGroup, Button } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmMyZjA3ZjdjNDA0ZDAwMTU4OWFjNDMiLCJpYXQiOjE2NTY5NDI3MTksImV4cCI6MTY1ODE1MjMxOX0.DFHE848BNuqrF-Lwf_73U2NRAZY_AWGTxpSM0w7PpGo",
        },
      }
    );
    if (response.ok) {
      alert("Comment Deleted Successfully!");
    } else {
      alert("Comment Not Deleted!");
    }
  } catch (error) {
    alert("Comment Not Deleted!");
  }
};

const SingleComment = ({ commentToRead }) => (
  <>
    <ListGroup.Item> Comment - {commentToRead.comment}</ListGroup.Item>
    <ListGroup.Item>Rating - {commentToRead.rate}</ListGroup.Item>

    <Button
      variant="danger"
      className="ml-2"
      onClick={() => deleteComment(commentToRead._id)}
    >
      Delete
    </Button>
  </>
);

export default SingleComment;
