"use client";
import Image from "next/image";
import { H3 } from "../ui/typography";
import { useEffect, useRef } from "react";

const data = [
  "oracle.svg",
  "wallmart.svg",
  "toyota.svg",
  "sony.svg",
  "microsoft.svg",
];

const Brands = () => {
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current;
      const items = Array.from(scroller.children);

      // Clone items to create an infinite scroll effect
      items.forEach((item) => {
        const clonedItem = item.cloneNode(true) as HTMLElement;
        scroller.appendChild(clonedItem);
      });

      // CSS animation to scroll the items
      const totalWidth = scroller.scrollWidth / 2;
      scroller.style.animation = `scroll ${totalWidth / 100}s linear infinite`;

      // Cleanup function to remove cloned items
      return () => {
        items.forEach(() => {
          scroller.removeChild(scroller.lastChild as HTMLElement);
        });
      };
    }
  }, []);

  return (
    <div className="h-screen pt-20 text-center">
      <H3>Used by the best trading communities in the world</H3>
      <div className="scroller-container">
        <ul
          ref={scrollerRef}
          className="scroller flex mt-10 items-center gap-[5rem] overflow-hidden"
        >
          {data.map((item, idx) => (
            <li key={idx} className="flex-shrink-0">
              <Image
                src={`/logo/${item}`}
                alt=""
                className="h-[100px] w-[200px]"
                height={100}
                width={200}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brands;
