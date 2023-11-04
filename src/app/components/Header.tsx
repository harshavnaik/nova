import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full h-16 left-0 bg-white py-4 border-b flex items-center z-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-black">NOVA</h1>
      </div>
    </header>
  );
}
