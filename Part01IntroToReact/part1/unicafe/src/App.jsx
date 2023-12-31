import { useState } from "react";
import FeedbackButton from "./components/FeedbackButton";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackGiven = good || neutral || bad;

  const handleIncrementGoodCount = () => {
    setGood((curr) => curr + 1);
  }
  const handleIncrementNeutralCount = () => {
    setNeutral((curr) => curr + 1);
  }
  const handleIncrementBadCount = () => {
    setBad((curr) => curr + 1);
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <FeedbackButton 
          label='good' 
          setFeedback={handleIncrementGoodCount} 
        />
        <FeedbackButton label='neutral' setFeedback={handleIncrementNeutralCount} />
        <FeedbackButton label='bad' setFeedback={handleIncrementBadCount} />
      </div>
      <>
        <h2>statistics</h2>
        {
          feedbackGiven
            ?
            <Statistics good={good} neutral={neutral} bad={bad} />
            :
            <p>No feedback given</p>
        }
      </>
       
    </>
  )
}

export default App
