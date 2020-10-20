const apiUrl = "https://sprintbreak.nerdear.live/ranking";

function getRanking() {
    var rankingData;
    var rankingDom = document.querySelector('.premios-dos .ranking-names');
    var ordList = document.createElement("ol");
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        rankingData = data.slice(0, 5); // Los primeros 6
        rankingDom.removeChild();
        rankingData.map(e => {
            var li = document.createElement("li");
            li.textContent = e.username;
            ordList.appendChild(li);
        })
        rankingDom.appendChild(ordList);
    })
}

document.addEventListener('DOMContentLoaded', function () {
    getRanking();
});