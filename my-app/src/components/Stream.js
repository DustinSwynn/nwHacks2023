import { useStream } from '@livepeer/react';
import { Player } from '@livepeer/react';


const StreamId = 'c5a9-s8en-zkew-2dfq';

// function Stream() {
//     const { data: stream } = useStream(StreamId);
//   }

const playbackId =
 'c5a9ff3s5mg45d97';

// export function Stream() {
// const { data: stream } = useStream({
//     StreamId,
//     refetchInterval: (stream) => (!stream?.isActive ? 5000 : false),
// }
    
// );
// }

export const Stream = () => {
    const { data: stream } = useStream({
        StreamId,
        refetchInterval: (stream) => (!stream?.isActive ? 5000 : false),
    });
    console.log(stream);

 return (
    // <div>
    //     Asset: {stream.name}
        <Player
         title="testStream"
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


export default Stream;
