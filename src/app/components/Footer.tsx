import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { infoFooter } from "../constants";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center text-center lg:text-left"
      id="Footer"
    >
      <Divider className="w-full mt-12" />
      <div className="container p-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">Navegacion</h5>
            {infoFooter.nav.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="flex items-center space-x-2"
                  href={`#${item}`}
                >
                  <p className="text-small text-default-400 mb-4">{item}</p>
                </Link>
              );
            })}
          </div>

          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">
              Informacion de contacto
            </h5>
            <p className="text-small text-default-400 mb-4">
              {infoFooter.contact.email}
            </p>
            <p className="text-small text-default-400 mb-4">
              {infoFooter.contact.phone}
            </p>
          </div>
        </div>
      </div>
      <Divider className="w-full" />
      <div className="w-full p-4 text-center">© 2023 Copyright Telintec</div>
    </footer>
  );
}
