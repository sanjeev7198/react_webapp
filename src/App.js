import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import FetchData from "./components/FetchData";
import React from "react";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar heading="Top Headlines"/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/general" element={<FetchData cat="general" />} />
          <Route path="/business" element={<FetchData cat="business" />} />
          <Route path="/entertainment" element={<FetchData cat="entertainment" />} />
          <Route path="/health" element={<FetchData cat="health" />} />
          <Route path="/science" element={<FetchData cat="science" />} />
          <Route path="/sports" element={<FetchData cat="sports" />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/general" element={<FetchData cat="general" />} />
//           <Route path="/business" element={<FetchData cat="business" />} />
//           <Route path="/entertainment" element={<FetchData cat="entertainment" />} />
//           <Route path="/health" element={<FetchData cat="health" />} />
//           <Route path="/science" element={<FetchData cat="science" />} />
//           <Route path="/sports" element={<FetchData cat="sports" />} />
//           <Route path="/technology" element={<FetchData cat="technology" />} />
//         </Routes>
//         <Footer/>
//       </Router>
//   </>
//   );
// }

// export default App;
