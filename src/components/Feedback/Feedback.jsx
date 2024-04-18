import css from "../Feedback/Feedback.module.css";

export default function Feedback({
  onValues: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={css.contentFeedback}>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positive:{positiveFeedback}%</p>
    </div>
  );
}
