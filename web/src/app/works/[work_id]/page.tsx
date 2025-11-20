import { projects } from "../../../../data/projects/works";
import WorkClient from "./WorkClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    work_id: String(project.id),
  }));
}

export default function Page() {
  return <WorkClient />;
}
