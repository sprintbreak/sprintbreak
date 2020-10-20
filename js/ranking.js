const apiUrl = "https://sprintbreak.nerdear.live/ranking";
const apiUrlDay = "https://sprintbreak.nerdear.live/ranking-by-days";


function getRanking() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        var rankingNames = document.querySelector('.premios-dos .ranking-names');
        var rankingDomOl = document.querySelector('.premios-dos .ranking-names ol');
        rankingDomOl.remove();
        var newOrdList = document.createElement("ol");
        var rankingData = data.slice(0, 6); // Los primeros 6
        rankingData.map(e => {
            var li = document.createElement("li");
            li.textContent = e.username;
            newOrdList.appendChild(li);
        })
        rankingNames.appendChild(newOrdList);
    })
}

function getRankingDay() {
    var date = new Date();
    var todayParsed = dayjs(date).format("YYYY-MM-DD");
    console.log(todayParsed);
    fetch(apiUrlDay)
    .then(response => response.json())
    .then(data => {
        console.log(data[todayParsed]);
        
        // var rankingNames = document.querySelector('.premios-uno .ranking-names');
        // var rankingDomOl = document.querySelector('.premios-uno .ranking-names ol');
        // rankingDomOl.remove();
        // var newOrdList = document.createElement("ol");
        // var rankingData = data.slice(0, 6); // Los primeros 6
        // console.log(rankingData);
        // rankingData.map(e => {
        //     var li = document.createElement("li");
        //     li.textContent = e.username;
        //     newOrdList.appendChild(li);
        // })
        // rankingNames.appendChild(newOrdList);
    })
}


document.addEventListener('DOMContentLoaded', function () {
    getRankingDay();
    getRanking();
});