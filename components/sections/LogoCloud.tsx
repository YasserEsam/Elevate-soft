"use client";

import Image from "next/image";

const logos = [
  {
    name: "Grandshop",
    image: "/logos/grandshop.svg"
  },

  {
    name: "Agro Data",
    image: "/logos/Agro-data.svg"
  },
  {
    name: "vvcredit.md",
    image: "/logos/vvcredit.svg"
  },
  {
    name: "M2M",
    image: "/logos/M2M.svg"
  },
  {
    name: "Grandshop",
    image: "/logos/grandshop.svg"
  },
];

export default function LogoCloud() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-2">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-center opacity-80">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
               <Image
                src={logo.image}
                alt={logo.name}
                width={200}
                height={200}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}