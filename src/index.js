import './main.css';
import { Main } from './Main.elm';
import charactersPath from './graphics/characters.gif';
import registerServiceWorker from './registerServiceWorker';

var app = Main.embed(document.getElementById('root'), {charactersPath: charactersPath});
var soundsPlaying = {};

app.ports.playSound.subscribe((args) => {
  if (!!soundsPlaying[args]) return;
  new Audio(`/sounds/${args}.mp3`).play().then(() => delete soundsPlaying[args]);
})

registerServiceWorker();
