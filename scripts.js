// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');

    let updatedHeight = 0;
    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function (event) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            // let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight."
            // let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor="blue";
            // let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
            spaceShuttleHeight.innerHTML = 10000;
        };
    });

    let land = document.getElementById("landing");
    land.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor="green";
        spaceShuttleHeight.innerHTML = 0;
    });
    
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function (event) {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor="green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    let rocket = document.querySelector("img");
    let verticalPosition = 0;
    let horizontalPosition = 0;
    rocket.style.position = 'relative';

    let down = document.getElementById("down");
    down.addEventListener("click", function(event) {
      
        verticalPosition -= 10;
        rocket.style.bottom = verticalPosition + 'px';
        if (updatedHeight > 0) {
            updatedHeight -= 10000
            spaceShuttleHeight.innerHTML = updatedHeight;
        };
    });

    let up = document.getElementById("up");
    up.addEventListener("click", function(event) {
        
        verticalPosition += 10;
        rocket.style.bottom = verticalPosition + 'px';
        updatedHeight += 10000
        spaceShuttleHeight.innerHTML = updatedHeight;
    });

    let left = document.getElementById("left");
    left.addEventListener("click", function(event) {
        horizontalPosition -= 10;
        rocket.style.left = horizontalPosition + 'px';
    });

    let right = document.getElementById("right");
    right.addEventListener("click", function(event) {
        horizontalPosition += 10;
        rocket.style.left = horizontalPosition + 'px';
    });
});