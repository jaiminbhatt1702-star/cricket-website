// Example: Simple news updater
document.addEventListener('DOMContentLoaded', function() {
    const newsSection = document.getElementById('news');
    const newArticle = document.createElement('article');
    newArticle.innerHTML = '<h3>New Update: Australia vs England Series</h3><p>The Ashes 2023 is underway!</p>';
    newsSection.appendChild(newArticle);
});

// Example: Basic scoreboard (expand as needed)
let runs = 0;
function addRun() {
    runs++;
    document.getElementById('score').innerText = `Runs: ${runs}`;
}
// Add a button in HTML: <button onclick="addRun()">Add Run</button><p id="score">Runs: 0</p>