import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, I'm <HighlightSpan>Abhiraj Bhowmick</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Chennai,
        India.
      </p>
      <p>
        I enjoy working at the intersection of tech, communication, and problem-solving, <br />
        and I’m always excited to collaborate on projects that make a difference.
      </p>
    </AboutWrapper>
  );
};

export default About;
