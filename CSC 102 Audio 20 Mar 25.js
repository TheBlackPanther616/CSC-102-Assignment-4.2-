// Cassette Player with Audio Files
function playCassette() 
{
    const audio = document.getElementById('audio');
    const statusElement = document.getElementById('status');

    if (audio.paused) 
    {
        audio.play();
        statusElement.textContent = 'Status: Playing';
    } else {
        statusElement.textContent = 'Status: Already playing';
    }
}

function pauseCassette()
{
    const audio = document.getElementById('audio');
    const statusElement = document.getElementById('status');

    if (!audio.paused) 
    {
        audio.pause();
        statusElement.textContent = 'Status: Paused';
    } else 
    {
        statusElement.textContent = 'Status: Cannot pause. Already paused';
    }
}

function stopCassette() 
{
    const audio = document.getElementById('audio');
    const statusElement = document.getElementById('status');

    if (!audio.paused || audio.currentTime > 0) 
    {
        audio.pause();
        audio.currentTime = 0; // Reset playback to start
        statusElement.textContent = 'Status: Stopped';
    } else 
    {
        statusElement.textContent = 'Status: Already stopped';
    }
}