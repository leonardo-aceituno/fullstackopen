import { useState } from "react";

const StatisticLine = ({ text, value, simbol = " " }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {Number.isInteger(value) ? value : value.toFixed(2)} {simbol}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total / 3;
  const positive = (good * 100) / total;

  if (total == 0)
    return (
      <>
        <h3>Statistics</h3>
        <span>No feedback given</span>
      </>
    );
  else
    return (
      <>
        <h3>Statistics</h3>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={total} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine
              text="Positive"
              value={good == 0 ? 0 : positive}
              simbol="%"
            />
          </tbody>
        </table>
      </>
    );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button> &nbsp;
    </>
  );
};
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButton = () => setGood(good + 1);
  const handleNeutralButton = () => setNeutral(neutral + 1);
  const handleBadButton = () => setBad(bad + 1);

  return (
    <>
      <h2>Give feedback</h2>
      <Button handleClick={handleGoodButton} text="Good" />
      <Button handleClick={handleNeutralButton} text="Neutral" />
      <Button handleClick={handleBadButton} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />{" "}
    </>
  );
};

export default App;
