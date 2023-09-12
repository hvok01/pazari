/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import './App.css';
import pasari1 from "./assets/pazari1.jpg";
import pasari2 from "./assets/pazari2.jpg";
import pasari3 from "./assets/pazari3.jpg";
import pasari4 from "./assets/pazari4.jpg";

function App() {
  //https://pazari-fluid-demo.squarespace.com/
  const hamburgerLineOne = useRef(null);
  const hamburgerLineTwo = useRef(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: false});
      actualAnimation(tl)
      setTimeline(tl);
    });
    return () => ctx.revert();
  }, []);

  const actualAnimation = (timeline : gsap.core.Timeline | undefined) => {
    
    // const isMobile = window.innerWidth < 767 ? true : false;
    timeline?.to(hamburgerLineOne.current, {
      rotate: "-225",
      y: "+5",
      duration: 0.2,
      width: "30px",
      height: "1px",
      opacity: 1,
    }).to(hamburgerLineTwo.current, {
      rotate: "+45",
      y: "-5",
      duration: 0.2,
      width: "30px",
      height: "1px",
      opacity: 1,
    }, "<").reverse();
  }

  const onNavBarClick = () => {
    const navlinks: any = document.getElementById("navlinks");
    const navlinkOne: any = document.getElementById("navlinkOne");
    const navlinkTwo: any = document.getElementById("navlinkTwo");

    navlinks.classList.toggle("active");

    timeline?.reversed() ? timeline?.play() : timeline?.reverse();

    setTimeout(function() {
      navlinkOne.classList.toggle("fade");
      navlinkTwo.classList.toggle("fade");
    },300)
    
  }

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <a href="#" className="logo-icon">
            Sofia Pazari
          </a>
        </div>
        <div className="nav-container">
          <div className="hamburger-container" onClick={onNavBarClick}>
            <div className="hamburger-one" ref={hamburgerLineOne}></div>
            <div className="hamburger-two"ref={hamburgerLineTwo}></div>
          </div>
          <div className="nav-links-container" id="navlinks">
            <ul>
              <li id="navlinkOne"><a href="#">Work</a></li>
              <li id="navlinkTwo"><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>
      <main className="main-content-grid">
        <a className="content-item" href='#'>
          <p>People</p>
          <img src={pasari1} alt="image people" />
        </a>
        <a className="content-item" href='#'>
          <p>Interiors</p>
          <img src={pasari2} alt="image interiors" />
        </a>
        <a className="content-item" href='#'>
          <p>Outdoors</p>
          <img src={pasari3} alt="image outdoors" />
        </a>
        <a className="content-item" href='#'>
          <p>City</p>
          <img src={pasari4} alt="image city" />
        </a>
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
