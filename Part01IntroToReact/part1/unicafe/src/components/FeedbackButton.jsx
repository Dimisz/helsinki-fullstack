const FeedbackButton = ({ label, setFeedback }) => {
  return(
    <button onClick={setFeedback}>{label}</button>
  );
}

export default FeedbackButton;