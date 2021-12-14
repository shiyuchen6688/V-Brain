import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Tutorial from "./pages/Tutorial"
import UsefulLink from "./pages/UsefulLink"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/useful-links" element={<UsefulLink />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* <p>
          Welcome
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js" integrity="sha512-dqw6X88iGgZlTsONxZK9ePmJEFrmHwpuMrsUChjAw1mRUhUITE5QU9pkcSox+ynfLhL15Sv2al5A0LVyDCmtUw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </div>
  );
}

export default App;
