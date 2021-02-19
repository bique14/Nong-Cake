import React from "react";
import "./App.css";
import RedVelvet from "./red-velvet/details.json";
import Irene from "./red-velvet/irene/profile.json";
import IreneImage from "./red-velvet/irene/irene.jpg";
import Seulgi from "./red-velvet/seulgi/profile.json";
import SeulgiImage from "./red-velvet/seulgi/seulgi.jpg";
import Wendy from "./red-velvet/wendy/profile.json";
import WendyImage from "./red-velvet/wendy/wendy.jpg";
import Joy from "./red-velvet/joy/profile.json";
import JoyImage from "./red-velvet/joy/joy.jpg";
import Yeri from "./red-velvet/yeri/profile.json";
import YeriImage from "./red-velvet/yeri/yeri.jpg";

function Member({ member, image }: any): JSX.Element {
  console.log(member);
  return (
    <div className="myDIV bg-blue-300">
      <img className="w-60" src={image} />
      <div className="rounded border bg-red-300 px-4 py-2 whitespace-nowrap">
        {member.stageName}
      </div>
      <div className="hide absolute top-0 right-0 bg-white">
        <span className="block">stage name : {member.stageName}</span>
        <span className="block">name : {member.name}</span>
        <span className="block">age : {member.age}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="h-full flex bg-red-700 justify-center items-center">
      <Member member={Irene} image={IreneImage} />
      <Member member={Seulgi} image={SeulgiImage} />
      <Member member={Wendy} image={WendyImage} />
      <Member member={Joy} image={JoyImage} />
      <Member member={Yeri} image={YeriImage} />
    </div>
  );
}

export default App;
