import { Player } from '@livepeer/react';

import Image from 'next/image';

import blenderPoster from '../assets/blender-poster.png';


const playbackId =
 'bafybeida3w2w7fch2fy6rfvfttqamlcyxgd3ddbf4u25n7fxzvyvcaegxy';


const PosterImage = () => {
 return (
 <Image
 src={blenderPoster}
 layout="fill"
 objectFit="cover"
 priority
 placeholder="blur"
 />
 );
};

export const DemoPlayer = () => {
 return (
     <Player
         title="Waterfalls"
         playbackId={playbackId}
         showPipButton
         showTitle={false}
         aspectRatio="16to9"
         poster={<PosterImage />}
         controls={{
         autohide: 3000,
         }}
         theme={{
             borderStyles: { containerBorderStyle: 'hidden' },
             radii: { containerBorderRadius: '10px' },
         }}
     />
     );
};

export default DemoPlayer;