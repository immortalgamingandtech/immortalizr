'use client'
import React from "react";

export default function Home() {

  return (
    <main className="grid grid-cols-5">
      <button className="p-5 bg-purple-700" onClick={() => fetch("http://localhost:3000/api/retroarch")}>Play</button>
    </main>
  );
}
