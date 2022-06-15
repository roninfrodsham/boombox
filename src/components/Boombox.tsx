import { BoomBody } from "./boombody";
import { PanIcon } from "./panicon";
import { Rotary } from "./rotary";
import { Speaker } from "./speaker";
import { TapeDeck } from "./tapedeck";
import { TransportControls } from "./transportcontrols";
import { VolumeIcon } from "./volumeicon";

interface AudioBufferSourceNode {
  buffer: AudioBuffer;
}

function BoomBox() {

  const ctx = new AudioContext();
  let audio: AudioBuffer;
  fetch("./sounds/stereo_systems.mp3")
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
    .then(decodedAudio => {
      audio = decodedAudio
    })
    .catch(error => console.log(error))
  
  function play() {
    const source = ctx.createBufferSource();
    source.buffer = audio;
    source.connect(ctx.destination);
    source.start(ctx.currentTime);
  }

  return (
    <svg version="1.1" baseProfile="tiny" id="Layer_1" className="boombox" x="0px" y="0px" viewBox="0 0 800 477" overflow="visible">
      <BoomBody />
      <Speaker xPos={150} />
      <Speaker xPos={650} />
      <VolumeIcon />
      <Rotary xPos={150} />
      <PanIcon />
      <Rotary xPos={650} />
      <TransportControls onClick={play} />
      <TapeDeck />
    </svg>    
  );
}

export { BoomBox };