function VibeSummary({ posts }) {
  const total = posts.length;

  const positive = posts.filter(
    (post) => post.sentiment.label === "Positive"
  ).length;

  const neutral = posts.filter(
    (post) => post.sentiment.label === "Neutral"
  ).length;

  const negative = posts.filter(
    (post) => post.sentiment.label === "Negative"
  ).length;

  const positivePercentage = Math.round((positive / total) * 100);
  const neutralPercentage = Math.round((neutral / total) * 100);
  const negativePercentage = Math.round((negative / total) * 100);

  let overallVibe;

  if (positive > negative && positive > neutral) {
    overallVibe = "Positive";
  } else if (negative > positive && negative > neutral) {
    overallVibe = "Negative";
  } else {
    overallVibe = "Neutral";
  }

  return (
    <section className="vibe-summary">
      <div className="vibe-header">
        <div>
          <p className="eyebrow">OVERALL VIBE</p>
          <h2>
            {overallVibe === "Positive" && "Positive"}
            {overallVibe === "Neutral" && "Neutral"}
            {overallVibe === "Negative" && "Negative"}
          </h2>
        </div>

        <span>{total} posts analyzed</span>
      </div>

      <div className="sentiment-stats">
        <div className="sentiment-stat positive-stat">
          <span>Positive</span>
          <strong>{positivePercentage}%</strong>
          <small>{positive} posts</small>
        </div>

        <div className="sentiment-stat neutral-stat">
          <span>Neutral</span>
          <strong>{neutralPercentage}%</strong>
          <small>{neutral} posts</small>
        </div>

        <div className="sentiment-stat negative-stat">
          <span>Negative</span>
          <strong>{negativePercentage}%</strong>
          <small>{negative} posts</small>
        </div>
      </div>

      <div className="sentiment-bar">
        <div
          className="bar-positive"
          style={{ width: `${positivePercentage}%` }}
        />

        <div
          className="bar-neutral"
          style={{ width: `${neutralPercentage}%` }}
        />

        <div
          className="bar-negative"
          style={{ width: `${negativePercentage}%` }}
        />
      </div>
    </section>
  );
}

export default VibeSummary;