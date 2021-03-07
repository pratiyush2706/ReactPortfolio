import React from "react";
import BackgroundParticles from "../../components/BackgroundParticles";
import TopBar from "../../components/TopBar";
import "./home.css";

const Home = () => {
  return (
    <main className="container">
      <TopBar />
      <div className="content">
        <BackgroundParticles />
        <div className="text">
          <div className="name">PRATIYUSH</div>
          <div className="description">
            <h3 className='line1'>Hey. My name is Pratiyush Chaitnya and I am a full stack web developer based in New Delhi, India.</h3>
            <h3 className='line2'>I love solving real world issues through code.</h3>
            <h3 className='line3'>If you're some employer looking to hire, you can get in touch here.</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
