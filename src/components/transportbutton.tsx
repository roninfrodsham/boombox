import { motion } from 'framer-motion'

function TransportButton({ onClick, buttonType, isPlaying }: { onClick: () => void, buttonType: string, isPlaying: boolean }) {
  return (
    <motion.g onClick={onClick} className="button" whileHover={{ scale: 1.2 }}>
      {buttonType === 'play' ? (
        <>
          <polygon fill="#09743E" points="365,357 335,357 335,407 365,407 395,407 395,357" />
          <polygon fill="#00582B" points="359,368 359,396 373,382"/>
        </>
      ) : (
        <>
          <polygon fill="#09743E" points="435,357 405,357 405,407 435,407 465,407 465,357"/>
          <rect x="429" y="368" fill="#00582B" width="5" height="28"/>
          <rect x="437" y="368" fill="#00582B" width="5" height="28"/>
        </>
      )}
    </motion.g>
  )
}

export { TransportButton }