import React from "react";
import BookmarkBorderTwoToneIcon from "@mui/icons-material/BookmarkBorderTwoTone";
import { motion } from "framer-motion";

import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <motion.div
      className="project-container"
      initial={{ opacity: 0.2}}
      whileInView={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      // viewport={{ once: true }}
    >
      <div className="project-img-container">
        <img src={props.imgURL} className="project-img" />
      </div>

      <div className="project-details">
        <div className="project-details-top">
          <BookmarkBorderTwoToneIcon
            className="bookmark-icon"
            fontSize="medium"
          />
          <h1 className="project-title">{props.title}</h1>
          <p className="project-uniname">{props.uniName}</p>
        </div>

        <div className="project-details-mid">
          <p className="project-desc">{props.desc.substring(0, 200)} ...</p>
          <div className="project-stack-list">
            {props.stack.map((item) => (
              <div key={item.id} className="project-stack">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="project-details-bottom">
          <p>9/18/2023</p>
          <div className="dot"></div>
          <p>134 Reads</p>
          <div className="dot"></div>
          <p>{props.contributors.length} Contributors</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
