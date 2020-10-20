const apiUrl = "https://sprintbreak.nerdear.live/ranking";
const apiUrlDay = "https://sprintbreak.nerdear.live/ranking";

function getRanking() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        var rankingNames = document.querySelector('.premios-dos .ranking-names');
        var rankingDomOl = document.querySelector('.premios-dos .ranking-names ol');
        rankingDomOl.remove();
        var newOrdList = document.createElement("ol");
        var rankingData = data.slice(0, 6); // Los primeros 6
        console.log(rankingData);
        rankingData.map(e => {
            var li = document.createElement("li");
            li.textContent = e.username;
            newOrdList.appendChild(li);
        })
        rankingNames.appendChild(newOrdList);
    })
}

function getRankingDay() {
    fetch(apiUrlDay)
    .then(response => response.json())
    .then(data => {
        var rankingNames = document.querySelector('.premios-uno .ranking-names');
        var rankingDomOl = document.querySelector('.premios-uno .ranking-names ol');
        rankingDomOl.remove();
        var newOrdList = document.createElement("ol");
        var rankingData = data.slice(0, 6); // Los primeros 6
        console.log(rankingData);
        rankingData.map(e => {
            var li = document.createElement("li");
            li.textContent = e.username;
            newOrdList.appendChild(li);
        })
        rankingNames.appendChild(newOrdList);
    })
}


document.addEventListener('DOMContentLoaded', function () {
    getRankingDay();
    getRanking();
});