async function getHotPosts(subreddit) {
    // Temporary mock data.
    // This will be replaced with the Reddit API once access is approved.

    const mockPosts = [
        {
            id: "1",
            title: "This is an amazing programming project",
            score: 1200,
            comments: 150,
            url: "https://reddit.com"
        },
        {
            id: "2",
            title: "I am frustrated with this new update",
            score: 800,
            comments: 90,
            url: "https://reddit.com"
        },
        {
            id: "3",
            title: "What do you think about this?",
            score: 500,
            comments: 70,
            url: "https://reddit.com"
        },
        {
            id: "4",
            title: "JavaScript has made my development workflow so much easier",
            score: 950,
            comments: 120,
            url: "https://reddit.com"
        },
        {
            id: "5",
            title: "This bug completely ruined my application",
            score: 670,
            comments: 85,
            url: "https://reddit.com"
        },
        {
            id: "6",
            title: "Best coding resources for beginners",
            score: 720,
            comments: 64,
            url: "https://reddit.com"
        },
        {
            id: "7",
            title: "I finally solved the problem I was stuck on",
            score: 1100,
            comments: 130,
            url: "https://reddit.com"
        },
        {
            id: "8",
            title: "Why is this error so annoying?",
            score: 430,
            comments: 55,
            url: "https://reddit.com"
        },
        {
            id: "9",
            title: "What is your favorite programming language?",
            score: 890,
            comments: 210,
            url: "https://reddit.com"
        },
        {
            id: "10",
            title: "This framework is absolutely fantastic",
            score: 980,
            comments: 115,
            url: "https://reddit.com"
        },
        {
            id: "11",
            title: "My application crashed after the latest update",
            score: 540,
            comments: 78,
            url: "https://reddit.com"
        },
        {
            id: "12",
            title: "How do you organize your projects?",
            score: 610,
            comments: 93,
            url: "https://reddit.com"
        },
        {
            id: "13",
            title: "I love working with React",
            score: 1050,
            comments: 140,
            url: "https://reddit.com"
        },
        {
            id: "14",
            title: "This documentation is terrible",
            score: 480,
            comments: 67,
            url: "https://reddit.com"
        },
        {
            id: "15",
            title: "Simple tips that improved my coding skills",
            score: 760,
            comments: 88,
            url: "https://reddit.com"
        },
        {
            id: "16",
            title: "The new release looks really promising",
            score: 830,
            comments: 101,
            url: "https://reddit.com"
        },
        {
            id: "17",
            title: "I hate debugging code for hours",
            score: 390,
            comments: 45,
            url: "https://reddit.com"
        },
        {
            id: "18",
            title: "Which backend technology should I learn?",
            score: 680,
            comments: 125,
            url: "https://reddit.com"
        },
        {
            id: "19",
            title: "Open source has helped me learn so much",
            score: 920,
            comments: 110,
            url: "https://reddit.com"
        },
        {
            id: "20",
            title: "This deployment process is a nightmare",
            score: 450,
            comments: 72,
            url: "https://reddit.com"
        },
        {
            id: "21",
            title: "Amazing performance improvements after optimization",
            score: 870,
            comments: 95,
            url: "https://reddit.com"
        },
        {
            id: "22",
            title: "What editor do you use for programming?",
            score: 730,
            comments: 180,
            url: "https://reddit.com"
        },
        {
            id: "23",
            title: "I made my first full stack application",
            score: 1150,
            comments: 145,
            url: "https://reddit.com"
        },
        {
            id: "24",
            title: "This API keeps returning unexpected errors",
            score: 410,
            comments: 62,
            url: "https://reddit.com"
        },
        {
            id: "25",
            title: "The developer community here is incredibly helpful",
            score: 990,
            comments: 130,
            url: "https://reddit.com"
        },
        {
            id: "26",
            title: "Should I learn Python or Java first?",
            score: 620,
            comments: 150,
            url: "https://reddit.com"
        },
        {
            id: "27",
            title: "I am tired of dealing with dependency issues",
            score: 350,
            comments: 48,
            url: "https://reddit.com"
        },
        {
            id: "28",
            title: "This project turned out better than I expected",
            score: 1020,
            comments: 112,
            url: "https://reddit.com"
        },
        {
            id: "29",
            title: "How can I improve my coding interview skills?",
            score: 780,
            comments: 165,
            url: "https://reddit.com"
        },
        {
            id: "30",
            title: "The latest software update broke everything",
            score: 520,
            comments: 91,
            url: "https://reddit.com"
        },
        {
            id: "31",
            title: "Really impressed by this new developer tool",
            score: 880,
            comments: 104,
            url: "https://reddit.com"
        },
        {
            id: "32",
            title: "What are the best practices for clean code?",
            score: 690,
            comments: 87,
            url: "https://reddit.com"
        },
        {
            id: "33",
            title: "I made a stupid mistake and lost hours of work",
            score: 370,
            comments: 59,
            url: "https://reddit.com"
        },
        {
            id: "34",
            title: "This tutorial explained everything perfectly",
            score: 940,
            comments: 98,
            url: "https://reddit.com"
        },
        {
            id: "35",
            title: "Is microservices architecture worth the complexity?",
            score: 710,
            comments: 190,
            url: "https://reddit.com"
        },
        {
            id: "36",
            title: "I cannot believe how slow this application is",
            score: 460,
            comments: 76,
            url: "https://reddit.com"
        },
        {
            id: "37",
            title: "Finally understood how asynchronous JavaScript works",
            score: 1080,
            comments: 121,
            url: "https://reddit.com"
        },
        {
            id: "38",
            title: "What do you think about AI coding tools?",
            score: 850,
            comments: 240,
            url: "https://reddit.com"
        },
        {
            id: "39",
            title: "This library is surprisingly easy to use",
            score: 790,
            comments: 83,
            url: "https://reddit.com"
        },
        {
            id: "40",
            title: "I had a horrible experience with this framework",
            score: 430,
            comments: 69,
            url: "https://reddit.com"
        },
        {
            id: "41",
            title: "My side project is finally live",
            score: 1180,
            comments: 155,
            url: "https://reddit.com"
        },
        {
            id: "42",
            title: "What database do you recommend for a small project?",
            score: 640,
            comments: 102,
            url: "https://reddit.com"
        },
        {
            id: "43",
            title: "I really dislike the new interface",
            score: 380,
            comments: 61,
            url: "https://reddit.com"
        },
        {
            id: "44",
            title: "This was one of the most useful technical talks I have watched",
            score: 910,
            comments: 96,
            url: "https://reddit.com"
        },
        {
            id: "45",
            title: "How do you stay motivated while learning to code?",
            score: 750,
            comments: 145,
            url: "https://reddit.com"
        },
        {
            id: "46",
            title: "The new version is much better than the previous one",
            score: 1010,
            comments: 117,
            url: "https://reddit.com"
        },
        {
            id: "47",
            title: "I am having a terrible time configuring this project",
            score: 340,
            comments: 52,
            url: "https://reddit.com"
        },
        {
            id: "48",
            title: "What is everyone building this weekend?",
            score: 580,
            comments: 84,
            url: "https://reddit.com"
        },
        {
            id: "49",
            title: "This is a really cool open source project",
            score: 970,
            comments: 109,
            url: "https://reddit.com"
        },
        {
            id: "50",
            title: "Which programming concept took you the longest to understand?",
            score: 700,
            comments: 135,
            url: "https://reddit.com"
        }
    ];

    return mockPosts;
}

module.exports = { getHotPosts };