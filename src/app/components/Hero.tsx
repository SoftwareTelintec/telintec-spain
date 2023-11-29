import React from "react";
import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";
import Link from "next/link";

const icon = {
  name: "Robot",
  src: "https://telintec.com.mx/_next/static/media/hero-robot.50699c5c.webp",
};

export default function Hero() {
  return (
    <section
      className="w-full md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto gap-2 grid grid-cols-12 grid-rows-1 my-4"
      id="Inicio"
    >
      <Card
        isFooterBlurred
        className="w-full h-[30rem] sm:h-[40rem] md:h-[50rem] col-span-12 shadow-lg shadow-black dark:shadow-green-800"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/80 uppercase font-bold md:text-sm">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </p>
          <h4 className="text-white/90 font-medium text-xl md:text-2xl">
            Servicios de <span className="text-green-400">IA</span> y{" "}
            <span className="text-green-400">Software</span>
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://telintec.com.mx/_next/static/media/hero-2.1fb5baca.webp"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt={icon.name}
              className="rounded-full w-8 h-10"
              src={icon.src}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white md:text-base">
                ¿Necesitas mas informacion?
              </p>
              <p className="text-tiny text-white/60 md:text-sm">
                No dudes en contactarnos.
              </p>
            </div>
          </div>
          <Link href={"#Contacto"}>
            <Button
              radius="md"
              size="md"
              className="uppercase font-semibold text-tiny md:text-base tracking-wide bg-green-400/30 hover:bg-green-400/80 text-white/90"
            >
              Contactanos
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
