import {
 LivepeerConfig,
 ThemeConfig,
 createReactClient,
 studioProvider,
} from '@livepeer/react';
import * as React from 'react';
import Stream from './components/Stream';
import DemoPlayer from "./components/DemoPlayer"
import Video1 from "./components/Video1"
import Video2 from "./components/Video2"


const livepeerClient = createReactClient({
 provider: studioProvider({
 apiKey: '6c843cc1-4acb-4f7f-9eee-109f546c0450',
 }),
});


// $API_TOKEN = '6c843cc1-4acb-4f7f-9eee-109f546c0450'

// const arg = "curl --location --request GET 'https://livepeer.studio/api/asset' \
// --header 'Authorization: Bearer $API_TOKEN'"

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
   {/* try to get list of assets associated with this account using api token/key */}
   {/* from here, i just need to display the thumbnails and redirect clicks to their respective pages */}
    {/* <Stream/> */}
    {/* <DemoPlayer /> */}
    <Video1 />
    {/* <Video2 /> */}    
 </LivepeerConfig>

 );
};


export default App;

