function Speaker( { xPos }: { xPos: string } ) {
  return (
    <g>
      <circle fill="#09743E" cx={xPos} cy="337" r="120"/>
      <circle fill="#168F52" cx={xPos} cy="337" r="100"/>
      <circle fill="#00582B" cx={xPos} cy="337" r="30"/>
    </g>
  )
}

export { Speaker }