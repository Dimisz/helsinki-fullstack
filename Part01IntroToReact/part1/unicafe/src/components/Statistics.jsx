import StatisticLine from "./StatisticLine";

const Statistics = ({good, neutral, bad}) => {
  const totalReviews = good + neutral + bad;
  const positivePercentage = 
    totalReviews ? (good / totalReviews) * 100 : good  * 100;
  const average = 
    totalReviews ? (good - bad) / totalReviews : good - bad;
  return(
    <>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={totalReviews}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={`${positivePercentage}%`}/>
    </>
  );
}

export default Statistics;