import { Reveal } from "@/components/animation/Reveal/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel/SectionLabel";
import { TextLink } from "@/components/ui/TextLink/TextLink";
import { content } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

const STAGGER_MS = 100;

export async function Projects() {
  const projects = await content.findProjects({ limit: 4 });

  return (
    <section className={styles.projects} id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal direction="up">
          <div className={styles.head}>
            <div>
              <SectionLabel eyebrow="PROJECTS" subtitle="導入事例" />
              <h2 id="projects-title" className="sr-only">
                導入事例
              </h2>
            </div>
            <TextLink href="#contact">すべての導入事例を見る</TextLink>
          </div>
        </Reveal>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.id} direction="up" delay={index * STAGGER_MS}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className={styles.dots} aria-hidden="true">
          <span className={`${styles.dot} ${styles.dotActive}`} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </section>
  );
}
