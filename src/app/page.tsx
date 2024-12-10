import React from "react";

import Hero from "./hero/hero";
import Card from "./card/Card";
import Running from "./running/running";
import Gear from "./gear/gear";
import Stan from "./stan/stan";
import Essentials from "./essentials/Essentials";
import Join from "./join/Join";
import SignUp from "./signUp/signUp";



export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">

      <Hero/>
      <Card/>
      <Running/>
      <Gear/>
      <Stan/>
      <Essentials/>
      <Join/>
      <SignUp/>
  
    </main>
  );
}