import { Badge } from "react-bootstrap";

const MyBadge = ({ color, info }) => (
  <>
    <Badge variant={color}>{info}</Badge>
  </>
);
export default MyBadge;
