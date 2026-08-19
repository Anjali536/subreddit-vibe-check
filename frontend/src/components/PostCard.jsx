import { ArrowBigUp, MessageCircle } from "lucide-react";

function PostCard({ post }) {
  const sentimentClass = post.sentiment.label.toLowerCase();

  return (
    <div className="post-card">
      <div className={`sentiment-badge ${sentimentClass}`}>
        {post.sentiment.label}
      </div>

      <h3>{post.title}</h3>

      <div className="post-meta">
        <span className="post-stat">
          <ArrowBigUp size={16} />
          {post.score}
        </span>

        <span className="post-stat">
          <MessageCircle size={16} />
          {post.comments}
        </span>

        <span className="sentiment-score">
          Sentiment: {post.sentiment.score}
        </span>
      </div>
    </div>
  );
}

export default PostCard;