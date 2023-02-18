
document.getElementById('settings').onclick = function() {
    location.href = "./settings.html";
};

backgroundColorStopped = 'rgb(73, 112, 238)';
backgroundColorRunning = 'rgb(47, 146, 63)';

screenColor = document.firstElementChild.style
screenColor.backgroundColor = backgroundColorStopped;

runningState = "False";
defaultTimeRemaining = 3;
timeRemaining = defaultTimeRemaining;

mainDisplay = document.querySelector('.mainDisplay')
mainDisplay.innerHTML = timeRemaining;


function startTimer() {

    if (runningState == "True") {
        clearInterval(c);
        runningState = "False"
        screenColor.backgroundColor = backgroundColorStopped;
        timeRemaining = defaultTimeRemaining;
        mainDisplay.innerHTML = timeRemaining;
        return(null);
    }

    runningState = "True"
    screenColor.backgroundColor = backgroundColorRunning;
    
    c = setInterval(function() {
        timeRemaining = timeRemaining - 1;
        mainDisplay.innerHTML = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(c);
            runningState = "False";
            screenColor.backgroundColor = backgroundColorStopped;
            timeRemaining = defaultTimeRemaining;
            mainDisplay.innerHTML = timeRemaining;
            
        }
    }, 1000)

}






    // arrayState = 1 - arrayState
    // document.firstElementChild.lastElementChild.style.backgroundColor = colorArray[arrayState];
    // document.querySelector('h1').innerHTML = messageArray[arrayState]
    // console.log(arrayState)


