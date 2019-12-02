import React from "react";
import Navibar from "../components/Nav";
import Banner from "../components/Banner";
import Howitwork from "../components/Howitwork";
import Service from "../components/Service";
import Smallbanner from "../components/Smallbanner";
import Bannerrunning from "../components/Banner-running";
import Footer from "../components/Footer";

export default function Home(props) {
  console.log("cuong", props)
  return (
    <div>
      <Navibar {...props}/>
      <Banner />
      <Howitwork />
      <Service />
      <Smallbanner />
      <Bannerrunning />
      <Footer />
    </div>
  );
}
