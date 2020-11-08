import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="cont">
      <div className="responsive">
        <h1>Responsive</h1>
        <h2>רוחב הכרטיס: 80% מרוחב המסך</h2>
      </div>
      <div className="adaptive">
        <h1>Adaptive</h1>
        <h2>רוחב הכרטיס: 800 או 300 פיקסלים</h2>
      </div>
    </div>
  );
}
