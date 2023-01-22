import { Player } from '@livepeer/react';
import { useAsset } from '@livepeer/react';

const playbackId =
 '5032t9jgvcplm9zg';

export const Video1 = () => {
    const asset1 = useAsset({ assetId: '5032a248-f74a-436f-9e08-2e6687ace149' });
    console.log(asset1);
 return (
    // <div>
    //     Asset: {asset1.data.name}
        <Player
         title="idontneedit.mp4"
         //{asset1.data.name}
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

export default Video1;
