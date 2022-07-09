import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from "./component/WarningSign";
// import MyBadge from "./component/MyBadge";
import BookList from "./component/BookList";
import fantasy from "./data/Fantasy.json";
// import SingleBook from "./component/SingleBook";
import NavBar from "./component/NavBar";
import Jumbotron from "./component/Jumbotron";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      {/* <WarningSign text="Welcome To The Book List Store" />
      <MyBadge color="success" info="Book Brand" /> */}
      {/* <SingleBook singleBook={fantasy[3]} /> */}
      <BookList books={fantasy} />
    </div>
  );
}

export default App;
