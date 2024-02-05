import React from "react";
import RacingMap from "./RacingMap";
import Contollables from "./Controllables";
import Overview from "./Overview";
import States from './States';
import Darkmode from "./Darkmode";
import Connection from "./Connection";

const Dashboard = () => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black w-[3840px] h-[2160px] relative">
        <Darkmode/>
        <Connection/>
        <Overview/>
        <RacingMap/>
        <Contollables/>
      </div>
    </div>
  );
};
export default Dashboard;
