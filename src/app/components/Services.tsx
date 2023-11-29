import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Divider,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

export default function Services() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Card className="dark:bg-[#001a4861] dark:border dark:border-green-600 dark:shadow-lg dark:shadow-green-800">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Some content</p>
        <small className="text-default-500">Feature</small>
        <h4 className="font-bold text-large">Lorem title</h4>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-visible py-2">
        <section className="w-full h-full flex items-center justify-center">
          <Image
            alt="Card background"
            className="w-full h-full object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={300}
          />
        </section>
        <Accordion>
          <AccordionItem key="1" aria-label="Feature 1" title="Feature 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Feature 2" title="Feature 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Feature 3" title="Feature 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </CardBody>
      <Divider />
    </Card>
  );
}
