import { useState } from "react";
import SearchBar from "./components/SearchBar";
import PostCard from "./components/PostCard";
import { analyzeSentiment } from "./utils/sentiment";
import VibeSummary from "./components/VibeSummary";

function App() {
  const [subreddit, setSubreddit] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const checkVibe = async () => {
    if (!subreddit.trim()) {
      setError("Please enter a subreddit.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setPosts([]);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/subreddit/${subreddit}`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      const analyzedPosts = data.posts.map((post) => ({
        ...post,
        sentiment: analyzeSentiment(post.title)
      }));
      setPosts(analyzedPosts);
      setCurrentPage(1);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">REDDIT ANALYTICS</p>

        <h1>The Subreddit Vibe Check</h1>

        <p className="subtitle">
          Discover what the community is talking about and how it feels.
        </p>

        <SearchBar
          subreddit={subreddit}
          setSubreddit={setSubreddit}
          onSearch={checkVibe}
          loading={loading}
        />
      </header>

      <main className="content">
        {error && <p className="error">{error}</p>}

        {posts.length > 0 && (
          <>
          <VibeSummary posts={posts} />
          <div className="section-header">
              <div>
                <p className="eyebrow">LATEST ANALYSIS</p>
                <h2>Hot posts from r/{subreddit}</h2>
              </div>

              <span className="post-count">
                {posts.length} posts
              </span>
            </div>

            <div className="posts-grid">
            {currentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => setCurrentPage((page) => page - 1)}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((page) => page + 1)}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
          </>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">◉</div>

            <h2>Ready for a vibe check?</h2>

            <p>
              Enter a subreddit above to see what the community is talking
              about.
            </p>
          </div>
        )}

        {loading && (
          <div className="loading">
            <div className="loader"></div>
            <p>Checking the vibe...</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;