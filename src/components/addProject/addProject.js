import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function AddProject({ value, onAdd }) {
  const [name, setName] = useState("");
  return (
    <div className="add-project">
      <input
        className="project-name-input"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className="timer-btn"
        onClick={() => {
          onAdd({ name: name, id: uuidv4()});
          setName("");
        }}
      >
        + Project
      </button>
    </div>
  );
}
