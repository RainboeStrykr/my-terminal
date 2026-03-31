import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are some of my projects. Follow the instructions at the end to visit the links.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Billgen Pro",
    desc: "A powerful invoice and receipt generator application for professional billing needs, built on Java.",
    url: "https://github.com/RainboeStrykr/billgen-pro",
  },
  {
    id: 2,
    title: "Markdownify",
    desc: "The only markdown editor you will ever need.",
    url: "https://markdownify.vercel.app/",
  },
  {
    id: 3,
    title: "Beamroom",
    desc: "A minimal & modern app that lets you create a room, share a unique join code, and instantly show your screen to anyone without any signup.",
    url: "https://beamroom.vercel.app/",
  },
  {
    id: 4,
    title: "Glyph",
    desc: "Your all-in-one, browser-based solution for complete PDF management.",
    url: "https://glyph-pdf.vercel.app/",
  },
];

export default Projects;
