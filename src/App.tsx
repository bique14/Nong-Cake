import React from "react";
import "./App.css";
import RedVelvet from "./red-velvet/details.json";
import Irene from "./red-velvet/irene/profile.json";
import Seulgi from "./red-velvet/seulgi/profile.json";
import Wendy from "./red-velvet/wendy/profile.json";
import Joy from "./red-velvet/joy/profile.json";
import Yeri from "./red-velvet/yeri/profile.json";

function Member({ member }: any): JSX.Element {
  console.log(member);
  return (
    <div className="myDIV">
      <div className="rounded border bg-red-300 px-4 py-2">{member.name}</div>
      <div className="hide absolute top-0 right-0 bg-white">
        <span className="block">stage name : {member.stageName}</span>
        <span className="block">age : {member.age}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="h-full flex bg-red-700 justify-center items-center">
      <Member member={Irene} />
      <Member member={Seulgi} />
      <Member member={Wendy} />
      <Member member={Joy} />
      <Member member={Yeri} />
    </div>
  );
}

export default App;
