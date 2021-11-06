const buttonAbout = document.querySelector('#link-about');
const idHiddenAbout = document.querySelector('#hiddenAbout');
const videoAbout = idHiddenAbout.querySelector('video');
const buttonMusic = document.querySelector('#link-music');
const idHiddenMusic = document.querySelector('#hiddenmusic');
const iframeMusic = idHiddenMusic.querySelector('iframe');
let toggleButtonAbout = false;
let toggleButtonMusic = false;

buttonAbout.addEventListener('click', function(event) {
    toggleButtonAbout = !toggleButtonAbout;
    if (toggleButtonAbout) {
        idHiddenAbout.style.height = idHiddenAbout.scrollHeight+'px';
        idHiddenAbout.style.margin = '1rem 0';
        videoAbout.play();
    } else {
        idHiddenAbout.style.height = '0px';
        idHiddenAbout.style.margin = '0 0';
        videoAbout.pause();
    }
});
buttonMusic.addEventListener('click', function(event) {
    toggleButtonMusic = !toggleButtonMusic;
    if (toggleButtonMusic) {
        idHiddenMusic.style.height = '80px';
        idHiddenMusic.style.margin = '1rem 0';
        iframeMusic.style.display = 'inherit';
    } else {
        idHiddenMusic.style.height = '0px';
        idHiddenMusic.style.margin = '0 0';
        iframeMusic.style.display = 'none';
    }
});