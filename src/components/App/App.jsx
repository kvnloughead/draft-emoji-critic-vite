// App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";

import AboutUs from "../AboutUs/AboutUs";
import SiteHistory from "../AboutUs/SiteHistory";
import SiteMission from "../AboutUs/SiteMission";

import AboutMe from "../AboutMe/AboutMe";
import MyStory from "../AboutMe/MyStory";
import Contact from "../AboutMe/Contact";
import Hobbies from "../AboutMe/Hobbies";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        {/* Add child routes to the /about-me route */}
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="mission" element={<SiteMission />} />
          <Route path="history" element={<SiteHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
