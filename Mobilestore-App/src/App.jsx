import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

const [mobiles, setMobiles] = useState([]);
const [search, setSearch] = useState("");

const getMobiles = async () => {
const response = await fetch("/mobiles.json");
const data = await response.json();
setMobiles(data);
};

useEffect(() => {
getMobiles();
}, []);

const filteredMobiles = mobiles.filter((mobile) =>
mobile.name.toLowerCase().includes(search.toLowerCase()) ||
mobile.brand.toLowerCase().includes(search.toLowerCase())
);

return (
<div className="app">

  <header>
    <h2><span>Mobile</span>Store.</h2>

    <nav>
      <a href="#">Home</a>
      <a href="#mobiles">Mobiles</a>
      <a href="#about">About</a>
    </nav>
  </header>

  <section className="banner">
    <div>
      <h1>Find Your Perfect Smartphone</h1>
      <p>Explore the latest smartphones at the best prices.</p>
    </div>
  </section>

  <section className="mobile-section" id="mobiles">

    <div className="heading">
      <h2>Latest Mobiles</h2>

      <input
        type="text"
        placeholder="Search mobiles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <div className="mobile-list">

      {filteredMobiles.map((mobile) => (

        <div className="card" key={mobile.id}>

          <img src={mobile.image} alt={mobile.name} />

          <h3>{mobile.name}</h3>

          <h2>₹{mobile.price.toLocaleString("en-IN")}</h2>

          <p>Brand: {mobile.brand}</p>
          <p>RAM: {mobile.ram}</p>
          <p>Storage: {mobile.storage}</p>
          <p>Camera: {mobile.camera}</p>
          <p>Battery: {mobile.battery}</p>

          <button>Buy Now</button>

        </div>

      ))}

      {filteredMobiles.length === 0 && (
        <p>No mobiles found!</p>
      )}

    </div>

  </section>

  <footer id="about">
    <p>© 2026 MobileStore | All Rights Reserved</p>
  </footer>

</div>

);
}

export default App;