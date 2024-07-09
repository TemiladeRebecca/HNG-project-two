"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./ImageSlide.module.css";

import artillerietImg from "@/public/images/imageslide/Artilleriet.jpg";
import belliniImg from "@/public/images/imageslide/Bellini-Side-Cab.jpg";
import bettyRitualImg from "@/public/images/imageslide/Betty-Ritual.jpg";
import bruteWoodImg from "@/public/images/imageslide/Brute-Wood.jpg";
import chaiseNoyarImg from "@/public/images/imageslide/Chaise-Noyar.jpg";
import dixieBImg from "@/public/images/imageslide/Dixie-B.jpg";
import fautelliDeTableImg from "@/public/images/imageslide/Fautelli-De-Table.jpg";
import ikeaImg from "@/public/images/imageslide/IKEA.jpg";
import lacqueredSolidOakImg from "@/public/images/imageslide/Lacquered-Solid-Oak.jpg";
import mahoganyImg from "@/public/images/imageslide/Mahogany.jpg";
import oldWorldRevivalImg from "@/public/images/imageslide/Old-world-Revival.jpg";
import touchImg from "@/public/images/imageslide/Torch.jpg";

const images = [
  { image: artillerietImg, alt: "Artilleriet chair" },
  { image: belliniImg, alt: "Bellini Side Cab" },
  { image: bettyRitualImg, alt: "Betty Ritual chair" },
  { image: bruteWoodImg, alt: "Brute Wood chair" },
  { image: chaiseNoyarImg, alt: "Chaise Noyar chair" },
  { image: dixieBImg, alt: "Dixie B chair" },
  { image: fautelliDeTableImg, alt: "Fautelli De Table" },
  { image: ikeaImg, alt: "Ikea chair" },
  { image: lacqueredSolidOakImg, alt: "Lacquered Solid Oak" },
  { image: mahoganyImg, alt: "Mahogany chair" },
  { image: oldWorldRevivalImg, alt: "Old Wood Revival" },
  { image: touchImg, alt: "Touch chair" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}