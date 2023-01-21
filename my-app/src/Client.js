import { createReactClient, studioProvider } from '@livepeer/react';

const client = createReactClient({
 provider: studioProvider({ apiKey: '438d1181-0459-47b3-b692-017710554d01' }),
});

export default Client;