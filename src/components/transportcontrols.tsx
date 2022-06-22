import { motion } from 'framer-motion'
import { TransportButton } from './transportbutton'

function TransportControls({ playClick, pauseClick, isPlaying }: { playClick: () => void, pauseClick: () => void, isPlaying: boolean }) {
  return (
    <g>
      <rect x="310" y="347" fill="#00582B" width="180" height="70"/>
      <TransportButton onClick={playClick} buttonType="play" isPlaying={isPlaying} />
      <TransportButton onClick={pauseClick} buttonType="pause" isPlaying={isPlaying} />
    </g>
  )
}

export { TransportControls }