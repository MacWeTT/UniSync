import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import "./ProjectList.css";

const ProjectList = () => {
  const data = [
    {
      id: 1,
      title: "Lorem Ipsum 1",
      desc: "Aenean vel iaculis sem, eu maximus tellus. Aenean dapibus erat vel rutrum accumsan. Maecenas sit amet vestibulum purus. Etiam vestibulum justo gravida ultricies ultrices. Sed euismod ex quis nibh consectetur suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
      uniName: "dolor sit 1",
      stack: ["html", "css", "js", "MonogoDB"],
      contributors: ["name", "name", "name", "name"],
      imgURL: "https://picsum.photos/600/400",
    },
    {
      id: 2,
      title: "Lorem Ipsum 2",
      desc: "Aenean vel iaculis sem, eu maximus tellus. Aenean dapibus erat vel rutrum accumsan. Maecenas sit amet vestibulum purus. Etiam vestibulum justo gravida ultricies ultrices. Sed euismod ex quis nibh consectetur suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
      uniName: "dolor sit 2",
      stack: ["html", "css", "js"],
      contributors: ["name", "name", "name", "name"],
      imgURL: "https://picsum.photos/600/400",
    },
    {
      id: 3,
      title: "Lorem Ipsum 3",
      desc: "Aenean vel iaculis sem, eu maximus tellus. Aenean dapibus erat vel rutrum accumsan. Maecenas sit amet vestibulum purus. Etiam vestibulum justo gravida ultricies ultrices. Sed euismod ex quis nibh consectetur suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
      uniName: "dolor sit 3",
      stack: ["html", "css", "js"],
      contributors: ["name", "name", "name", "name"],
      imgURL: "https://picsum.photos/600/400",
    },
    {
      id: 4,
      title: "Lorem Ipsum 4",
      desc: "Aenean vel iaculis sem, eu maximus tellus. Aenean dapibus erat vel rutrum accumsan. Maecenas sit amet vestibulum purus. Etiam vestibulum justo gravida ultricies ultrices. Sed euismod ex quis nibh consectetur suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
      uniName: "dolor sit 4",
      stack: ["html", "css", "js"],
      contributors: ["name", "name", "name", "name"],
      imgURL: "https://picsum.photos/600/400",
    },
    {
      id: 5,
      title: "Lorem Ipsum 5",
      desc: "Aenean vel iaculis sem, eu maximus tellus. Aenean dapibus erat vel rutrum accumsan. Maecenas sit amet vestibulum purus. Etiam vestibulum justo gravida ultricies ultrices. Sed euismod ex quis nibh consectetur suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
      uniName: "dolor sit 5",
      stack: ["html", "css", "js"],
      contributors: ["name", "name", "name", "name"],
      imgURL: "https://picsum.photos/600/400",
    },
  ];

  return (
    <div className="projects-list">
      {data.map((project) => (
        <ProjectCard {...project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;
