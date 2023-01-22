import { Player } from '@livepeer/react';
import Image from 'next/image';
// import blenderPoster from '..\\assets\\blender-poster.png';

const playbackId =
 '3aa8w947namudd9n';


// const PosterImage = () => {
//  return (
//  <Image
//  src={blenderPoster}
//  layout="fill"
//  objectFit="cover"
//  priority
//  placeholder="blur"
//  />
//  );
// };

export const DemoPlayer = () => {
 return (
     <Player
         title="Balls"
         playbackId={playbackId}
         showPipButton
         showTitle={false}
         aspectRatio="16to9"
        //  poster={<PosterImage />}
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
