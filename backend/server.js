const express = require("express");
const { getHotPosts } = require("./redditService");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 5000;

app.get("/", (req, res) => {
    res.json({
        message: "Subreddit Vibe Check Backend is running!"
    });
});

// Health check
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        service: "subreddit-vibe-check-api"
    });
});

app.get("/api/subreddit/:name", async (req, res) => {
    try {
        const subreddit = req.params.name.trim();

        if (!subreddit) {
            return res.status(400).json({
                error: "Subreddit name is required"
            });
        }

        if (!/^[a-zA-Z0-9_]+$/.test(subreddit)) {
            return res.status(400).json({
                error: "Invalid subreddit name"
            });
        }

        const posts = await getHotPosts(subreddit);

        res.json({
            subreddit,
            count: posts.length,
            posts
        });

    } catch (error) {
        console.error("REDDIT ERROR:", error);

        res.status(500).json({
            error: "Failed to fetch subreddit data"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});