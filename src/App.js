import { useState } from "react";

const stepM = ["CODESMANN DEVS", "ADAM BUSADA", "MOXTECH DEVS"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function previous() {
    if (step > 1) setStep(step - 1);
  }
  function next() {
    if (step < 3) setStep(step + 1);
  }
  function openClose() {
    setisOpen(!isOpen);
  }
  return (
    <div>
      <button onClick={openClose} className="open-close">
        &times;
      </button>
      {isOpen && (
        <div className="container">
          <div className="numbers">
            <div className={` ${step >= 1 ? "active" : ""}`}>1</div>
            <div className={` ${step >= 2 ? "active" : ""}`}>2</div>
            <div className={` ${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {stepM[step - 1]}
          </p>
          <div className="btns">
            <button
              onClick={previous}
              style={{ backgroundColor: "#7960f2", color: "#fff" }}
            >
              previous
            </button>
            <button
              onClick={next}
              style={{ backgroundColor: "#7960f2", color: "#fff" }}
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
