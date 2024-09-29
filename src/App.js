import { useState, useEffect, useRef } from "react";

// const stepM = ["CODESMANN DEVS", "ADAM BUSADA", "MOXTECH DEVS"];
export default function App() {
  /*
  THIS IS THE USE EFFECT HOOK
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  });
  // function increse() {
  //   setCount(count + 1);
  // }
  return (
    <div>
      <p>{count}</p>
      <p>CODESMANN</p>
      <button>increse</button>
    </div>
  );
  */
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function workWithRef() {
    setCount(count + 1);
    countRef.current++;
    console.log("STATE", count);
    console.log("REF", countRef.current);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={workWithRef}>click me</button>
    </div>
  );

  // const [step, setStep] = useState(1);
  // const [isOpen, setisOpen] = useState(true);
  // function previous() {
  //   if (step > 1) setStep((s) => s - 1);
  // }
  // function next() {
  //   if (step < 3) setStep((s) => s + 1);
  // }
  // function openClose() {
  //   setisOpen((isOpen) => !isOpen);
  // }
  // return (
  //   <div>
  //     <button onClick={openClose} className="open-close">
  //       &times;
  //     </button>
  //     {isOpen && (
  //       <div className="container">
  //         <div className="numbers">
  //           <div className={` ${step >= 1 ? "active" : ""}`}>1</div>
  //           <div className={` ${step >= 2 ? "active" : ""}`}>2</div>
  //           <div className={` ${step >= 3 ? "active" : ""}`}>3</div>
  //         </div>
  //         <p className="message">
  //           Dev {step}: {stepM[step - 1]}
  //         </p>
  //         <div className="btns">
  //           <button
  //             onClick={previous}
  //             style={{ backgroundColor: "#7960f2", color: "#fff" }}
  //           >
  //             previous
  //           </button>
  //           <button
  //             onClick={next}
  //             style={{ backgroundColor: "#7960f2", color: "#fff" }}
  //           >
  //             next
  //           </button>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}
