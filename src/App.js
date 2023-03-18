import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Newscomponent from "./components/Newscomponent";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const pagesize = 27;
  const API_KEY = process.env.REACT_APP_API_KEY2;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Newscomponent
                setProgress={setProgress}
                apiKey={API_KEY}
                key="general"
                pagesize={pagesize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <Newscomponent
                setProgress={setProgress}
                apiKey={API_KEY}
                key="business"
                pagesize={pagesize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <Newscomponent
                setProgress={setProgress}
                apiKey={API_KEY}
                key="entertainment"
                pagesize={pagesize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <Newscomponent
                setProgress={setProgress}
                apiKey={API_KEY}
                key="health"
                pagesize={pagesize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <Newscomponent
                setProgress={setProgress}
                apiKey={API_KEY}
                key="science"
                pagesize={pagesize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <Newscomponent
                setProgress={setProgress}
                apiKey={API_KEY}
                key="sports"
                pagesize={pagesize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <Newscomponent
                setProgress={setProgress}
                apiKey={API_KEY}
                key="technology"
                pagesize={pagesize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
