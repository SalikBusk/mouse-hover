import React, { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../Anim/Anim";
import Body from "./Body";
import Footer from "./Footer";

import Image from "../Image";

import imageIndex from "../../Assets/Index";
import Container from "../Container";

interface LinkItem {
  title: string;
  href: string;
  src: string;
  noPicture: string;
}

const links: LinkItem[] = [
  {
    title: "Salik",
    href: "/",
    src: imageIndex.home,
    noPicture: "Home",
  },
  {
    title: "Patrick",
    href: "/gallery",
    src: imageIndex.gallary,
    noPicture: "Gallery",
  },
  {
    title: "Busk",
    href: "/about",
    src: imageIndex.about,
    noPicture: "About US",
  },
  {
    title: "Larsen",
    href: "/Work",
    src: imageIndex.tours,
    noPicture: "Work",
  },
  {
    title: "",
    href: "/contact",
    src: imageIndex.contact,
    noPicture: "Contact",
  },
];


const Nav = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="hidden"
    >
      <Container>
        <div className="flex flex-row  justify-between mt-[20px]">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Image
              src={links[selectedLink.index].src}
              isActive={selectedLink.isActive}
            />
        </div>
        <footer>
          <Footer />
        </footer>
      </Container>
    </motion.div>
  );
};

export default Nav;
