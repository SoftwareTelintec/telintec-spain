import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

interface AdsProps {
  title: string;
  description: string;
  button?: string;
}

function Ads({ title, description, button }: AdsProps) {
  return (
    <section className="w-full md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
      <div className="space-y-6 md:space-y-12 flex items-center flex-col">
        <h2 className="text-medium font-medium md:text-2xl lg:text-5xl text-center">
          {title}
        </h2>
        <p className="text-small dark:text-white/80 md:text-lg lg:text-2xl text-center max-w-6xl">
          {description}
        </p>
      </div>
      {button ? (
        <Link
          className="flex items-center justify-center mt-4 md:mt-6 mx-auto"
          href="#Contacto"
        >
          <Button className="uppercase font-semibold text-tiny md:text-base tracking-wide bg-green-800 dark:bg-green-400 hover:bg-green-800/80 text-white/90">
            {button}
          </Button>
        </Link>
      ) : null}
    </section>
  );
}

export default Ads;
