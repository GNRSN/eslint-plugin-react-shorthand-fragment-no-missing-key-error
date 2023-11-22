import "./App.css";

const arr = ["#1", "#2", "#3", "#4", "#5"];

// eslint-disable-next-line no-unused-vars
function Explain() {
  return (
    <div>
      {arr.map((id) => {
        /**
         * This does not error (false positive)
         */
        return <>{id}</>;
      })}
      {arr.map((id) => {
        /**
         * This does error (correctly)
         */
        return <React.Fragment>{id}</React.Fragment>;
      })}
    </div>
  );
}

function Repro() {
  return (
    <div>
      {arr.map((id) => {
        /**
         * This does not error (false positive)
         * But results in runtime warnings (in development mode) from React 
         */
        return <>{id}</>;
      })}
    </div>
  );
}

export default Repro;
