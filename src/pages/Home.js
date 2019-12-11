import React from "react";
import Banner from "../components/Banner";
import Howitwork from "../components/Howitwork";
import Service from "../components/Service";
import Smallbanner from "../components/Smallbanner";
import Bannerrunning from "../components/Banner-running";

export default function Home(props) {
  return (
    <div>
      <Banner {...props}/>
      <Howitwork />
      <Service />
      <Smallbanner {...props}/>
      <Bannerrunning />
    </div>
  );
}
