import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Hero = () => {
  let navigate = useNavigate();

  const goExplore = () => {
    navigate("/explore");
  };

  return (
    <div id="hero">
      {/* <img id='hero-background' src={list[0].src}/> */}

      <Header />

      <h1 id="header-text-first"> NINJA NOUN TEST</h1>
      <h1 id="header-text-second"> Ninja marketplace</h1>
      <h5 id="header-subtext">Mint your personal and unique ninja</h5>

      <div id="hero-buttons">
        <button id="explore" onClick={goExplore}>
          Navigate
        </button>
        <button id="create">Create</button>
      </div>
    </div>
  );
};

export default Hero;
