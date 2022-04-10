const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const callbackTime = throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000);

player.on('timeupdate', callbackTime);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));