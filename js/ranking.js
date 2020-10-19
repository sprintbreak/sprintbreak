const apiUrl = "https://sprintbreak.nerdear.live/ranking";

function getRanking() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
}

document.addEventListener('DOMContentLoaded', function () {
    getRanking();
});