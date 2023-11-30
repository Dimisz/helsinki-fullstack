const Total = ({parts}) => {
  const total = parts.reduce((aggregate, part) => aggregate + part.exercises, 0);
  return(
    <p>Number of exercises {total}</p>
  );
}

export default Total;