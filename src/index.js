import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomeV2 from "./components/home-v2";
import HomeV3 from "./components/home-v3";
import ProptertyDetails from "./components/property-details";
import ProptertyGrid from "./components/property-grid";
import Propterty from "./components/property";
import About from "./components/about";
import Team from "./components/team";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import AddProperty from "./components/add-property";
import Contact from "./components/contact";
import Blog from "./components/blog";
import BlogDetails from "./components/blog-details";
import "./components/i18n";

const Root = () => {
  return (
    <HashRouter basename="/">
      <div>
        <Routes>
          <Route exact path="/" element={<HomeV3 />} />
          <Route path="/home-v2" element={<HomeV2 />} />
          <Route path="/home-v3" element={<HomeV3 />} />
          <Route path="/property-details" element={<ProptertyDetails />} />
          <Route path="/property-grid" element={<ProptertyGrid />} />
          <Route path="/property" element={<Propterty />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default Root;

ReactDOM.render(<Root />, document.getElementById("mingrand"));
