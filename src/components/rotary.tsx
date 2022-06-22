function Rotary( { xPos }: { xPos: number } ) {
  return (
    <g>
      <circle fill='#168F52' cx={xPos} cy='162' r='35'/>
      <rect x={xPos - 1} y='172' fill='#00582B' width='2' height='20'/>
    </g>
  )
}

export { Rotary }