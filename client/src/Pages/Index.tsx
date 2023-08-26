import React, { useState } from "react";

import imageIndex from "../Assets/Index";
import Modal from "../Components/Modals/Modal";
import Project from "../Components/Project/Project";


const projects = [
  {
    title: "Salik",
    src: imageIndex.project1,
    color: "#000000",
  },
  {
    title: "Patrick",
    src: imageIndex.project2,
    color: "#8C8C8C",
  },
  {
    title: "Busk",
    src: imageIndex.project3,
    color: "#EFE8D3",
  },
  {
    title: "Larsen",
    src: imageIndex.project4,
    color: "#706D63",
  },
];

const Index = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className="flex h-[100vh] items-center justify-center">
      <body className="w-[1000px] flex flex-col items-center justify-center">
        {projects.map((project, index) => {
            return(
                <Project index={index} title={project.title} setModal={setModal} key={index}/>
            )
        })}
      </body>
      <Modal modal={modal} projects={projects}/>
    </main>
  );
};

export default Index;
