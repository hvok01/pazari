import './App.css';
import pasari1 from "./assets/pazari1.jpg";
import pasari2 from "./assets/pazari2.jpg";
import pasari3 from "./assets/pazari3.jpg";
import pasari4 from "./assets/pazari4.jpg";


function App() {
  //https://pazari-fluid-demo.squarespace.com/

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <a href="#" className="logo-icon">
            Sofia Pazari
          </a>
        </div>
        <div className="nav-container">
          <div className="hamburger-container">
            <div className="hamburger-one"></div>
            <div className="hamburger-two"></div>
          </div>
          <div className="nav-links-container">
            <ul>
              <li><a href="#">Work</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>
      <main className="main-content-grid">
        <div className="content-item">
          <p>People</p>
          <img src={pasari1} alt="image people" />
        </div>
        <div className="content-item">
          <p>Interiors</p>
          <img src={pasari2} alt="image interiors" />
        </div>
        <div className="content-item">
          <p>Outdoors</p>
          <img src={pasari3} alt="image outdoors" />
        </div>
        <div className="content-item">
          <p>City</p>
          <img src={pasari4} alt="image city" />
        </div>
      </main>
      <footer>
        <a href="#">
          @instagram-name
        </a>
      </footer>
    </>
  )
}

export default App
