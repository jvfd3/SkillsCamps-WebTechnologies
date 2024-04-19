import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Upload from "./components/Upload";
import MyFiles from "./components/MyFiles";

function App() {
  return (
    <>
      <header className="header">
        <div className="header-content responsive-wrapper">
          <div className="header-logo">
            <a href="#">
              <h3>File cloud</h3>
            </a>
          </div>
          <div className="header-navigation">
            <nav className="header-navigation-links">
              <Link to="registration">Registration</Link>
              <Link to="login">Login</Link>
              <Link to="upload">Uploading files</Link>
              <Link to="myfiles">My Files</Link>
            </nav>
          </div>
          <a href="#" className="button">
            <i className="ph-list-bold"></i>
            <span>Menu</span>
          </a>
        </div>
      </header>
      <main className="main">
        <Routes>
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="upload" element={<Upload />} />
          <Route path="myfiles" element={<MyFiles />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
