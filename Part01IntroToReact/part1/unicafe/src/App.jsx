import { useState } from "react";
import FeedbackButton from "./components/FeedbackButton";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalReviews = good + neutral + bad;
  const positivePercentage = 
    totalReviews ? (good / totalReviews) * 100 : good  * 100;
  const average = 
    totalReviews ? (good - bad) / totalReviews : good - bad;

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
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {totalReviews}</p>
        <p>average {average}</p>
        <p>positive {positivePercentage} %</p>
      </div>
    </>
  )
}

export default App
