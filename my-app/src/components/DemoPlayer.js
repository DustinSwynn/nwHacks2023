import { Player } from '@livepeer/react';
import { useAsset } from '@livepeer/react';

const playbackId =
 '3aa8w947namudd9n';



export const DemoPlayer = () => {
    const asset = useAsset({ assetId: '3aa85b50-728a-4dec-8e09-7be53c329725' });
    console.log(asset);    
 return (
    <div>
        Asset: {asset.data.name}
        <Player
         title={asset.data.name}
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
    </div>
     );
};

export default DemoPlayer;
