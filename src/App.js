import "./App.css";
import { Routes, Route } from "react-router-dom";

import Theme from "./styles/Theme";

import Home from "./pages/Home";
import NoteRecognitionSetup from "./pages/NoteRecognitionSetup";
import NoteRecognition from "./pages/NoteRecognition";
import InstrumentRecognition from "./pages/InstrumentRecognition";
import InstrumentRecognitionSetup from "./pages/InstrumentRecognitionSetup";
import Footer from "./components/molecules/Footer";
import NavBar from "./components/molecules/NavBar";
import Results from "./pages/Results";

const App = () => {
  return (
    <Theme>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noterecognition" element={<NoteRecognition />} />
          <Route
            path="/noterecognitionsetup"
            element={<NoteRecognitionSetup />}
          />
          <Route
            path="/instrumentrecognition"
            element={<InstrumentRecognition />}
          />
          <Route
            path="/instrumentrecognitionsetup"
            element={<InstrumentRecognitionSetup />}
          />
          <Route path="/results" element={<Results />} />
        </Routes>

        <Footer />
      </div>
    </Theme>
  );
};

export default App;
