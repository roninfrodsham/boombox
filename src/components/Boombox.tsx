import { BoomBody } from "./boombody";
import { PanIcon } from "./panicon";
import { Rotary } from "./rotary";
import { Speaker } from "./speaker";
import { VolumeIcon } from "./volumeicon";

function BoomBox() {
  return (
    <svg version="1.1" baseProfile="tiny" id="Layer_1" className="boombox" x="0px" y="0px" viewBox="0 0 800 477" overflow="visible">
      <BoomBody />
      <Speaker xPos="150" />
      <Speaker xPos="650" />
      <VolumeIcon />
      <Rotary />
      <PanIcon />
      <g>
        <circle fill="#168F52" cx="650" cy="162" r="35"/>
        <rect x="649" y="172" fill="#00582B" width="2" height="20"/>
      </g>


      <g>
        <rect x="300" y="227" fill="#09743E" width="200" height="200"/>
        <rect x="310" y="237" fill="#168F52" width="180" height="110"/>
        <rect x="310" y="347" fill="#00582B" width="180" height="70"/>
        <polygon fill="#09743E" points="365,357 335,357 335,407 365,407 395,407 395,357 	"/>
        <polygon fill="#09743E" points="435,357 405,357 405,407 435,407 465,407 465,357 	"/>
        <g>
          <circle fill="#00582B" cx="360" cy="292" r="30"/>
          <circle fill="#09743E" cx="360" cy="292" r="20"/>
          <path fill="#00582B" d="M372,293.5v-3h-2.1c-0.2-1.6-0.9-3.1-1.8-4.4l1.5-1.5l-2.1-2.1l-1.5,1.5c-1.3-0.9-2.8-1.6-4.4-1.8V280h-3
            v2.1c-1.6,0.2-3.1,0.9-4.4,1.8l-1.5-1.5l-2.1,2.1l1.5,1.5c-0.9,1.3-1.6,2.8-1.8,4.4H348v3h2.1c0.2,1.6,0.9,3.1,1.8,4.4l-1.5,1.5
            l2.1,2.1l1.5-1.5c1.3,0.9,2.8,1.6,4.4,1.8v2.1h3v-2.1c1.6-0.2,3.1-0.9,4.4-1.8l1.5,1.5l2.1-2.1l-1.5-1.5c0.9-1.3,1.6-2.8,1.8-4.4
            H372z"/>
        </g>
        <circle fill="#00582B" cx="440" cy="292" r="25"/>
        <circle fill="#09743E" cx="440" cy="292" r="20"/>
        <path fill="#00582B" d="M452,293.5v-3h-2.1c-0.2-1.6-0.9-3.1-1.8-4.4l1.5-1.5l-2.1-2.1l-1.5,1.5c-1.3-0.9-2.8-1.6-4.4-1.8V280h-3
          v2.1c-1.6,0.2-3.1,0.9-4.4,1.8l-1.5-1.5l-2.1,2.1l1.5,1.5c-0.9,1.3-1.6,2.8-1.8,4.4H428v3h2.1c0.2,1.6,0.9,3.1,1.8,4.4l-1.5,1.5
          l2.1,2.1l1.5-1.5c1.3,0.9,2.8,1.6,4.4,1.8v2.1h3v-2.1c1.6-0.2,3.1-0.9,4.4-1.8l1.5,1.5l2.1-2.1l-1.5-1.5c0.9-1.3,1.6-2.8,1.8-4.4
          H452z"/>
        <polygon fill="#00582B" points="359,368 359,396 373,382 	"/>
        <rect x="429" y="368" fill="#00582B" width="5" height="28"/>
        <rect x="437" y="368" fill="#00582B" width="5" height="28"/>
      </g>


    </svg>    
  );
}

export { BoomBox };