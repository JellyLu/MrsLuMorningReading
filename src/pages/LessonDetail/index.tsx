import { useParams } from "react-router-dom";

export function Component() {
  const { termId, lessonId } = useParams();
  return (<div>Lesson {termId}-{lessonId}</div>);
}