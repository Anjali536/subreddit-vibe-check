function SearchBar({ subreddit, setSubreddit, onSearch, loading }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter subreddit e.g. programming"
        value={subreddit}
        onChange={(e) => setSubreddit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />

      <button onClick={onSearch} disabled={loading}>
        {loading ? "Checking..." : "Check Vibe"}
      </button>
    </div>
  );
}

export default SearchBar;