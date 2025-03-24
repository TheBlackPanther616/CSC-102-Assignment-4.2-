// Cassette Player with Audio Files

// Function to play the audio file
function playCassette() 
{
    // Get the audio element by its ID
    const audio = document.getElementById('audio');
    // Get the status display element by its ID
    const statusElement = document.getElementById('status');

    // Check if the audio is currently paused
    if (audio.paused) 
    {
        // Play the audio
        audio.play();
        // Update the status text to indicate that audio is playing
        statusElement.textContent = 'Status: Playing';
    } 
    else 
    {
        // If the audio is already playing, update the status text accordingly
        statusElement.textContent = 'Status: Already playing';
    }
}

// Function to pause the audio file
function pauseCassette()
{
    // Get the audio element by its ID
    const audio = document.getElementById('audio');
    // Get the status display element by its ID
    const statusElement = document.getElementById('status');

    // Check if the audio is currently playing
    if (!audio.paused) 
    {
        // Pause the audio
        audio.pause();
        // Update the status text to indicate that audio is paused
        statusElement.textContent = 'Status: Paused';
    } 
    else 
    {
        // If the audio is already paused, update the status text accordingly
        statusElement.textContent = 'Status: Cannot pause. Already paused';
    }
}

// Function to stop the audio file
function stopCassette() 
{
    // Get the audio element by its ID
    const audio = document.getElementById('audio');
    // Get the status display element by its ID
    const statusElement = document.getElementById('status');

    // Check if the audio is either playing or has been partially played
    if (!audio.paused || audio.currentTime > 0) 
    {
        // Pause the audio
        audio.pause();
        // Reset the playback position to the beginning
        audio.currentTime = 0;
        // Update the status text to indicate that audio has stopped
        statusElement.textContent = 'Status: Stopped';
    } 
    else 
    {
        // If the audio is already stopped, update the status text accordingly
        statusElement.textContent = 'Status: Already stopped';
    }
}