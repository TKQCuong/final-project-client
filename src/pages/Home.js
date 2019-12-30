import React from "react";
import Banner from "../components/Banner";
import Howitwork from "../components/Howitwork";
import Service from "../components/Service";
import Smallbanner from "../components/Smallbanner";
import Bannerrunning from "../components/Banner-running";
import Scrolltop from "../components/Scrolltop";
import Advertisement from '../components/Advertisement';

export default function Home(props) {
  return (
    <div>
      <Scrolltop />
      <Banner {...props}/>
      <Howitwork />
      <Service />
      <Smallbanner {...props}/>
      <Bannerrunning />
      <Advertisement {...props}/>
    </div>
  );
}
