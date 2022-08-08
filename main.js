let button = document.getElementById('button')
button.onclick = function () {
    let target = database.results[Math.floor(Math.random() * 6)]
    let divs = document.querySelectorAll("#data div");
    divs[0].innerHTML = "Sports: " + target.Sports;
    divs[1].innerHTML = "Clubs: " + target.Clubs;
    divs[2].innerHTML = "Volunteer: " + target.Volunteer;
    divs[3].innerHTML = "Language: " +target.Language;
    
}

let button2 = document.getElementById("button2")
button.onclick = function () {
    let target = database2.results[Math.floor(Math.random() * 7)]
    let divs = document.querySelectorAll("#data div");
    divs[0].innerHTML = "Games I Play: " + target.Games;
    divs[1].innerHTML = "Music I Like: " + target.Music;
    divs[2].innerHTML = "Drawing I Drew: " + target.Drawings;
    divs[3].innerHTML = "Food I Like: " +target.Food;
    
}

