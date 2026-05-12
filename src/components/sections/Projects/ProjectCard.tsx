import type { Project } from "@/lib/content";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.image} src={project.image.src} alt={project.image.alt} />
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.meta}>{project.meta}</p>
    </article>
  );
}
