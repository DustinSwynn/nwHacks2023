import { Player } from '@livepeer/react';
import { useAsset } from '@livepeer/react';

const playbackId =
 '89ccs2l47koac30b';

export const Video2 = () => {
    const asset2 = useAsset({ assetId: '89cc0487-d949-4eda-99d2-a6c6c7367754' });
    console.log(asset2);
 return (
    // <div>
    //     Asset: {asset2.data.name}
        <Player
         title="nothisispatrick.mp4"
         //{asset2.data.name}
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
    // </div>
     );
};

export default Video2;
