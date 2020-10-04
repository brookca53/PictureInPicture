const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream
// Pass to video element
// Play
async function selectMediaStream() {
    try {
        // Working with screen capture API
        // The constant gets assigned when the user assigns what file or screen they want to share.
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // When then pass that video object into the Video Element as its source object.
        videoElement.srcObject = mediaStream;
        // This is true when it is finished loading.
        // When the video has loaded its meta data, it is going to call a function 
        // that will play the video.
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        // Catch errors
        console.log('Whoops, error here: ', error);
    }
}

button.addEventListener('click', async () => {
    //  Disable Button
    button.disabled = true;
    // Start Picture In Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();