import { useParams } from "react-router-dom";

export function Component() {
  const { termId } = useParams();
  return (<div>Lessons {termId}</div>);
}