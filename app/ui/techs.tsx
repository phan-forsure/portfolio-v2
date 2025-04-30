import { techs } from "../libs/techs";
import Card from "./card";

export default function Techs() {
  return (
    <>
      {techs.map((tech) => {
        return (
          <Card
            key={tech.title}
            src={tech.src}
            title={tech.title}
            desc={tech.desc}
            by={tech.by}
            link={tech.link}
            row={tech.row}
            col={tech.col}
          >
            <span className="font-medium text-lg tracking-tight">
              {tech.title}
            </span>
          </Card>
        );
      })}
    </>
  );
}
