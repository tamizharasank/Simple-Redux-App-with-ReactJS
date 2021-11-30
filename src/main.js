import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Count from "./pages/count";

function MainRouter(props) {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route exact path="/" element={<Count name={props.name} />}></Route>
            <Route path="/about" element={<h1>About</h1>}></Route>
            <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default MainRouter;
