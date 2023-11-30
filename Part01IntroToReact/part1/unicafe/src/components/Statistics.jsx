const Statistics = ({good, neutral, bad}) => {
  const totalReviews = good + neutral + bad;
  const positivePercentage = 
    totalReviews ? (good / totalReviews) * 100 : good  * 100;
  const average = 
    totalReviews ? (good - bad) / totalReviews : good - bad;
  return(
    <>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {totalReviews}</p>
      <p>average {average}</p>
      <p>positive {positivePercentage} %</p>
    </>
  );
}

export default Statistics;