import {
 LivepeerConfig,
 createReactClient,
 studioProvider,
} from '@livepeer/react';
import "bootstrap/dist/css/bootstrap.min.css";

const client = createReactClient({
 provider: studioProvider({ apiKey: '438d1181-0459-47b3-b692-017710554d01' }),
});

function App() {
 return (
// <LivepeerConfig client={client}>
// <SomeComponent /> // some component here
// </LivepeerConfig>
    <div style="font-size:100"> Yo Moma </div>
 );
}

export default App;