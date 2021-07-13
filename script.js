
api_key = "9mlFzlWs8PcUhKysxnzyMD1xtHA3"
const pid = 253802
var count = new Array();
function fetchData() {
    fetch(`https://cricapi.com/api/playerStats/${api_key}/?pid=${pid}`)
    .then(res => {return res.json()
    })
    .then(data => {
        
        for(i in data){
            count.push(i)   
        }
        display(data)
    })
   

}
fetchData()


function display(data){
    console.log(data);
    document.getElementById("country").innerText = data["country"];
    document.getElementById("desc").innerText = data["profile"];

    var img = document.createElement("img")
    img.src = data["imageURL"]
    document.getElementById("profile").appendChild(img)

    var style = document.createElement("p")
    style.innerHTML = "Batting: " + data["battingStyle"]
    document.getElementById("profile").appendChild(style)
   
    var bstyle = document.createElement("p")
    bstyle.innerHTML = "Bowling: " + data["bowlingStyle"]
    document.getElementById("profile").appendChild(bstyle)

    var born = document.createElement("p")
    born.innerHTML = "Born: " + data["born"]
    document.getElementById("profile").appendChild(born)

    var Age = document.createElement("p")
    Age.innerHTML = "Current Age: " + "\n" + data["currentAge"]
    document.getElementById("profile").appendChild(Age)
    

    var TTeams = document.createElement("p")
    TTeams.innerHTML = "Playing Teams: " + "\n" + data["majorTeams"]
    document.getElementById("profile").appendChild(TTeams)

    var Role = document.createElement("p")
    Role.innerHTML = "Playing Role: " + "\n" + data["playingRole"]
    document.getElementById("profile").appendChild(Role)

    

}

