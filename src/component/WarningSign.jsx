import Alert from "react-bootstrap/Alert";

const WarningSign = ({ text }) => (
  <>
    <Alert variant={"danger"}>{text}</Alert>
  </>
);
export default WarningSign;
