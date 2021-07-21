import useToggle from "./Hooks/useToggle";

function App() {
  const [isDivChanged, setIsDivChanged] = useToggle();
  return (
    <div className="App">
      <div className={isDivChanged ? "withcss" : "nocss"}>
        <h1>Hello!</h1>
        {isDivChanged ? (
          <>
            <p className=" csstext">Example Div and Text with CSS applied</p>
            <p className="csstext-2">used custom hooks to toggle between</p>
          </>
        ) : (
          <p className="nocsstext">Example Div and Text with No CSS applied</p>
        )}
      </div>
      <button
        className={isDivChanged ? "css-btn" : "nocss-btn"}
        onClick={setIsDivChanged}
      >
        {isDivChanged ? "With CSS" : "No CSS"}
      </button>
    </div>
  );
}

export default App;
