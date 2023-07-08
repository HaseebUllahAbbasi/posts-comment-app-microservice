import logo from "./logo.svg";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="App">
      <h1>Micro Blog App</h1>
      <div className="row">
        <div className="col-md-6 offset-3">
          <div className="container">
            <PostCreate />
          </div>
        </div>

        <hr />
        <PostList />
      </div>
    </div>
  );
}

export default App;
