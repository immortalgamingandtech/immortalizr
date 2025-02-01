import { Disclosure } from "@headlessui/react";
import React from "react";

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="text-center">
        <span className="font-stalinist">
          immortal.
        </span>
      </div>
    </Disclosure>
  );
}
