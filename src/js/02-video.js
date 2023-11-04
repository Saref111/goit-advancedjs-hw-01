import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const prevTime = localStorage.getItem('videoplayer-current-time');
const onTimeUpdate = throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

if (prevTime) {
    player.setCurrentTime(prevTime);
}

player.on('timeupdate', onTimeUpdate);
