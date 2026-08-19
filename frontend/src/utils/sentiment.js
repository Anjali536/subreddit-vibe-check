import Sentiment from "sentiment";

const sentimentAnalyzer = new Sentiment();

export function analyzeSentiment(title) {
  const result = sentimentAnalyzer.analyze(title);

  let label;

  if (result.score > 0) {
    label = "Positive";
  } else if (result.score < 0) {
    label = "Negative";
  } else {
    label = "Neutral";
  }

  return {
    score: result.score,
    label
  };
}