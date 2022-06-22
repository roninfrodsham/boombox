import { useState } from 'react';
import { BoomBody } from './boombody'
import { PanIcon } from './panicon'
import { Rotary } from './rotary'
import { Speaker } from './speaker'
import { TapeDeck } from './tapedeck'
import { TransportControls } from './transportcontrols'
import { VolumeIcon } from './volumeicon'

function BoomBox() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const ctx = new AudioContext();
  let audio: AudioBuffer;
  let source: any;
  fetch('./sounds/stereo_systems.mp3')
    .then(response => response.arrayBuffer())
    .then(audioData => ctx.decodeAudioData(audioData))
    .then(decodedAudio => {
      audio = decodedAudio
    })
    .catch(error => console.log(error))
  
  function play() {
    source = ctx.createBufferSource()
    source.buffer = audio
    source.connect(ctx.destination)
    source.start()
    source.loop = true
    setIsPlaying(true)
  }

  function pause() {
    console.log(source.context.currentTime)
    setCurrentTime(source.context.currentTime)
    setIsPlaying(false)
    source.suspend()
  }

  return (
    <svg baseProfile='tiny' id='Layer_1' className='boombox' viewBox='0 0 800 477' overflow='visible'>
      <BoomBody />
      <Speaker xPos={150} />
      <Speaker xPos={650} />
      <VolumeIcon />
      <Rotary xPos={150} />
      <PanIcon />
      <Rotary xPos={650} />
      <TransportControls playClick={play} pauseClick={pause} isPlaying={isPlaying} />
      <TapeDeck />
    </svg>    
  );
}

export { BoomBox };