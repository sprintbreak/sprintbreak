const apiUrl = "https://sprintbreak.nerdear.live/ranking";

function renderRanking(data) {
    var rankingNames = document.querySelector('.premios-dos .ranking-names');
    var rankingDomOl = document.querySelector('.premios-dos .ranking-names ol');
    rankingDomOl.remove();
    // var newRankingNames = document.createElement("div").className("ranking-names");
    var newOrdList = document.createElement("ol");
    var rankingData = data.slice(0, 5); // Los primeros 6
    console.log(rankingData);
    rankingData.map(e => {
        var li = document.createElement("li");
        li.textContent = e.username;
        newOrdList.appendChild(li);
    })
    rankingNames.appendChild(newOrdList);
}

function getRanking() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        renderRanking(data);
    })
}

// function getRankingDay() {
//     var rankingData;
//     var rankingDom = document.querySelector('.premios-uno .ranking-names');
//     var ordList = document.createElement("ol");
// }


document.addEventListener('DOMContentLoaded', function () {
    getRanking();
});