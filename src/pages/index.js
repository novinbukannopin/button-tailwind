import React from "react";
import Button from "./components/Button";
export default function Home() {
  return (
    <div className="space-y-2 space-x-2  ">
      <Button onClick={() => console.log("hello button")}>Primary</Button>
      <Button className="bg-violet-500 hover:bg-violet-600">Secondary</Button>
      <Button className="bg-orange-500 hover:bg-orange-600">Warning</Button>
      <Button className="bg-cyan-500 hover:bg-cyan-600">Info</Button>
      <div className="space-x-2 flex items-center justify-center">
        <Button className="bg-lime-500 hover:bg-lime-600">Lime</Button>
        <Button className="bg-red-500 hover:bg-red-600">Danger</Button>
        <Button className="bg-amber-500 hover:bg-amber-600">Amber</Button>
        <Button className="bg-green-500 hover:bg-green-600">Green</Button>
      </div>
      <div className="space-x-2 flex items-center justify-center">
        <Button className="bg-emerald-500 hover:bg-emerald-600">Emerald</Button>
        <Button className="bg-fuchsia-500 hover:bg-fuchsia-600">Fuchsia</Button>
      </div>
    </div>
  );
}
