import React from "react";
import { Divider, ScrollShadow } from "@nextui-org/react";
import { pilares } from "../constants";

export default function Stats() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-6 w-full md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto"
      id="Pilares"
    >
      {pilares?.map((item, index) => (
        <section className="w-full" key={`${item}-${index}`}>
          <div className="space-y-1">
            <h4 className="text-medium md:text-xl font-medium">{item.title}</h4>
            <ScrollShadow
              hideScrollBar
              className="text-small md:text-medium dark:text-default-600 max-h-44 overflow-y-auto"
            >
              {item.description}
            </ScrollShadow>
          </div>

          <Divider className="my-4" />

          <div className="flex h-6 items-center space-x-4 text-small md:text-medium">
            {item.services.map((service, index) => (
              <section className="flex" key={`${service}-${index}`}>
                <div className="flex gap-4">
                  <p className="text-green-800 dark:text-green-600 font-semibold">
                    {service}
                  </p>
                  {index === item.services.length - 1 ? null : (
                    <Divider orientation="vertical" />
                  )}
                </div>
              </section>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
