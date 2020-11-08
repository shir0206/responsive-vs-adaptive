import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div class="adaptive">
        <h1>This is an adaptive container</h1>
        <p>
          This container is 800 pixels wide when the browser is any width over
          500 pixels. Any below that, and the continer shrinks to 300 pixels.
        </p>
      </div>
      <div className="responsive">
        <h1>ברוכים הבאים :)</h1>
        <h2>איזו עונה אתם הכי אוהבים?</h2>
      </div>
      <div className="adaptive">
        <h1>Adaptive</h1>
        <h2>כשרוחב המסך רחב - רוחב הכרטיס 800 פיקסלים</h2>
        <h2>כשרוחב המסך צר - רוחב הכרטיס 300 פיקסלים</h2>
      </div>
    </div>
  );
}
