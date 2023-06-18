import React from 'react'
import * as styles from "./projectCard.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function ProjectCard({project}) {
console.log("props projects -- ", project);

 let thumbnailImage = getImage(project?.image?.childImageSharp?.gatsbyImageData)
const container = document.getElementById("projectCard");
const contentRadius = 880;
const numCircles = 5;
const angle = 180 / (numCircles - 1);


// for (let i = 0; i < numCircles; i++) {
//   const circle = document.createElement("div");
//   circle.classList.add("circle");
//   const x = Math.round(contentRadius * Math.sin((angle * i * Math.PI) / 180));
//   const y = Math.round(contentRadius * Math.cos((angle * i * Math.PI) / 180));
  
//   // Only position the circle if it's in the upper half of the container
//   if (y <= contentRadius) {
//     circle.style.top = contentRadius - y + "px";
//     circle.style.left = contentRadius + x + "px";
//     container.appendChild(circle);
//   }
// }

  return (
    <div className={styles.projectCard} id="projectCard">
       <GatsbyImage image={thumbnailImage} className={styles.projectImg} />
        {/* <img src={project?.image} className={styles.projectImg} alt={project?.title} /> */}
            <div className={`${styles.projectCardContent} h-[54rem] w-[54rem]`}>
                <p className={styles.heading} style={{color:project?.color}}>
                {project?.title}
                </p>
                <p className={styles.description}>
                  {project?.desc}
                </p>
                <button className="btn btn-primary mt-6">
                  <span>
                  see more details
                  </span>
                  </button>

            </div>
  
            <div className={styles.projectTools}>
            {project?.technologies?.map((item,i) => (
            <div className={`${styles.projectTool}`} style={{transitionDelay:(i)*80 + "ms"}}>
                <div className={styles.projectIcon}>
                  <GatsbyImage image={getImage(item?.image?.childImageSharp?.gatsbyImageData)} alt={item.name} />
                </div>
                <p className='text-sm text-white'>{item.name}</p>
            </div>
            ))}  
            </div>
    </div>
  )
  
}

export default ProjectCard 