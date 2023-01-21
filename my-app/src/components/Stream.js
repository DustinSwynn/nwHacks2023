import { useCreateStream } from '@livepeer/react';

import { useState } from 'react';

export const Stream = () => {
 const [streamName, setStreamName] = useState<string>('');
 const {
 mutate: createStream,
 data: createdStream,
 status: createStatus,
 } = useCreateStream();

 return (
 <>
 <input
 type="text"
 placeholder="Stream name"
 onChange={(e) => setStreamName(e.target.value)}
 />

 <button
 onClick={() => {
 createStream?.();
 }}
 disabled={createStatus === 'loading' || !createStream}
 >
 Create Stream
 </button>
 </>
 );
};

export Default Stream;
