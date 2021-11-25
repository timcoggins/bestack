import './App.css';
import Home from './pages/Home'
import NavBar from './components/molecules/NavBar'
import Footer from './components/molecules/Footer'

function App() {
  return (
    <div className="App">
        <NavBar />
          <Home />
        <Footer />
    </div>
  );
}

export default App;
