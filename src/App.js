export default function App() {
  return (
    <div className="container">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message">HELLO</p>
      <div className="btns">
        <button style={{ backgroundColor: "#7960f2", color: "#fff" }}>
          previous
        </button>
        <button style={{ backgroundColor: "#7960f2", color: "#fff" }}>
          next
        </button>
      </div>
    </div>
  );
}
