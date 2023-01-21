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
 apiKey: '438d1181-0459-47b3-b692-017710554d01',
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

