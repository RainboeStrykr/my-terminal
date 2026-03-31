import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech in Computer Science and Engineering with specialization in Software Engineering",
    desc: "SRM Institute of Science and Technology, Kattankulathur | 2024 - Present",
  },
  {
    title: "Class 12th (Higher Secondary School - CBSE)",
    desc: "Techno India Group Public School, Siliguri | 2022 - 2024",
  },
  {
    title: "Class 10th (Secondary School - ICSE)",
    desc: "Don Bosco School, Siliguri | 2012 - 2022",
  },
];

export default Education;
