import React from "react";
import Greeting from "./components/greeting";
import WelcomeBanner from "./components/welcomebanner";
function App(){ 
  return (
    <div>
      <Greeting name= "ผู้ใช้งาน TypeScript" messageCount={5}/>
      <Greeting name= "นักพัฒนา Vite "/>

      <WelcomeBanner title=" ยินดีต้อนรับสู่โลกของ TpyeScript!">
        <p>เนื้อหานี้ส่งผ่าน Children prop</p>
      </WelcomeBanner>
    </div>
  );
};

export default App;