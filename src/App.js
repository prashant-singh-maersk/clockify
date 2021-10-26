import { useState } from "react";
import "./App.scss";
import AddProject from "./components/addProject/addProject";
import ProjectTuple from "./components/projectTuple/projectTuple";

function App() {
  const [projectList, setProjectList] = useState([]);

  return (
    <div className="App">
      <div className="App-header">
        
        <div className="project-list">
          {projectList.map((item) => {
            return (
              <ProjectTuple
                projectName={item.name}
                id={item.id}
                ley={item.id}
                onDelete={(id) =>
                  setProjectList(
                    projectList.filter((item) => {
                      return item.id !== id;
                    })
                  )
                }
              />
            );
          })}
        </div>
        <AddProject
          onAdd={(newProject) => {
            setProjectList([...projectList, newProject]);
          }}
        />
      </div>
    </div>
  );
}

export default App;
