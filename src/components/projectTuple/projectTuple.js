import MyTimer from "../timer/timer";
import "./projectTuple.scss";
export default function ProjectTuple({ projectName, onDelete, id }) {
  return (
    <div className="project-tuple">
      <div>{projectName}</div>
      <MyTimer />
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        delete
      </button>
    </div>
  );
}
