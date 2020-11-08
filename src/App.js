import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="cont">
      <div className="responsive">
        <h1>Responsive</h1>
        <h4>רוחב הכרטיס: 60% מרוחב המסך</h4>
      </div>
      <div className="adaptive">
        <h1>Adaptive</h1>
        <h4>רוחב הכרטיס: 800 או 300 פיקסלים</h4>
      </div>
    </div>
  );
}
