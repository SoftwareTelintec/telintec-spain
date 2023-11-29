import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";

export default function Contact() {
  return (
    <form
      className="py-2 grid grid-cols-1 w-full md:max-w-[600px] lg:max-w-[900px] xl:w-full mx-auto"
      id="Contacto"
    >
      <Card className="dark:bg-[#001a4861] dark:border dark:border-green-600 dark:shadow-lg dark:shadow-green-800">
        <CardHeader className="flex flex-col">
          <h4 className="text-medium font-medium">Contactanos</h4>
          <p className="">
            Tienes alguna duda? Solo escribe el mensaje y pronto tendras una
            respuesta.
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col space-y-4">
          <Input
            type="string"
            label="Nombre"
            defaultValue="Ingresa tu nombre"
            className="w-full"
          />
          <Input
            type="string"
            label="Nombre de la empresa"
            defaultValue="Ingresa el nombre de la empresa"
            className="w-full"
          />
          <Input
            type="email"
            isRequired
            label="Email"
            defaultValue="example@test.com"
            className="w-full"
          />
          <Input
            type="phone"
            label="Numero de telefono"
            defaultValue="Ingresa tu numero de telefono"
            className="w-full"
          />
          <Textarea
            maxRows={4}
            size="lg"
            label="Description"
            isRequired
            disableAutosize
            labelPlacement="inside"
            placeholder="Ingresa tu mensaje (limite de 4 renglones). "
          />
        </CardBody>
        <Divider />
        <CardFooter className="flex items-center justify-end">
          <Button
            isLoading
            spinner={
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            }
            type="submit"
            color="primary"
          >
            Loading
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
