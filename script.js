// Simulated feed data
const feeds = [
    { id: 1, content: "✨ OMG, just had the best day ever! #GoodVibes" },
    { id: 2, content: "💖 Y'all, I'm obsessed with the new Facebook features!"},
    { id: 3, content: "📸 Just dropped a new pic " }
];

// Function to render feeds
function renderFeeds() {
    const feedContainer = document.getElementById('feed');
    feedContainer.innerHTML = ''; // Clear previous feeds

    feeds.forEach(feed => {
        const feedItem = document.createElement('div');
        feedItem.classList.add('feed-item');
        feedItem.innerText = feed.content;
        feedContainer.appendChild(feedItem);
    });
}

// Simulated login function
document.getElementById('loginBtn').addEventListener('click', function () {
    // Simulate user login
    alert('User  logged in successfully!');
    renderFeeds(); // Render feeds after login
});