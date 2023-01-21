import { createReactClient, studioProvider } from '@livepeer/react';

const client = createReactClient({
 provider: studioProvider({ apiKey: '6c843cc1-4acb-4f7f-9eee-109f546c0450' }),
//  438d1181-0459-47b3-b692-017710554d01
});

function App() {
    return (
      <LivepeerConfig client={client}>
        <YourRoutes />
      </LivepeerConfig>
    );

export default Client;