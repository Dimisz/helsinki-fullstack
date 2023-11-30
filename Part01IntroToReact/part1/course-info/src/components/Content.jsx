import Part from "./Part";

const Content = ({ parts }) => {
  const renderedParts = parts.map((part) => <Part key={part.name} part={part} /> );
  return(
    <>
      {renderedParts}
    </>
  );
}

export default Content;