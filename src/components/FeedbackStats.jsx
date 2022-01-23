const FeedbackStats = ({ feedback }) => {
  let average =
    feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
