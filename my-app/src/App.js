import {
 LivepeerConfig,
 ThemeConfig,
 createReactClient,
 studioProvider,
} from '@livepeer/react';
import * as React from 'react';
import DemoPlayer from "./components/DemoPlayer"


const livepeerClient = createReactClient({
 provider: studioProvider({
 apiKey: '6c843cc1-4acb-4f7f-9eee-109f546c0450',
 }),
});

const theme: ThemeConfig = {
 colors: {
 accent: 'rgb(0, 145, 255)',
 containerBorderColor: 'rgba(0, 145, 255, 0.9)',
 },
 fonts: {
 display: 'Inter',
 },
};

export const App = () => {
 return (
 <LivepeerConfig client={livepeerClient} theme={theme}>
    <DemoPlayer />
 </LivepeerConfig>

 );
};


export default App;

