import { useState } from "react";
import { v4 } from "uuid";
import "./App.css";

const dateObject = {
  startDate: "",
  endDate: "",
  username: "",
  projectName: "",
  taskDescription: "",
  taskStatus: "",
  email: "",
  mobileNumber: "",
  status: "",
};

function App() {
  const [value, setValue] = useState(dateObject);
  const [taskList, setTaskList] = useState([]);

  const onChangeStartDate = (e) => {
    setValue({
      ...value,
      startDate: e.target.value,
    });
  };

  const onChangeEndDate = (e) => {
    setValue({
      ...value,
      endDate: e.target.value,
    });
  };

  const onChangeUserName = (e) => {
    setValue({
      ...value,
      username: e.target.value,
    });
  };

  const onChangeProjectName = (e) => {
    setValue({
      ...value,
      projectName: e.target.value,
    });
  };

  const onChangeTaskDescription = (e) => {
    setValue({
      ...value,
      taskDescription: e.target.value,
    });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const newTasker = {
      id: v4(),
      name: value.username,
      project: value.projectName,
      task: value.taskDescription,
      status: value.taskStatus,
      startDate: value.startDate,
      endDate: value.endDate,
    };
    setTaskList([...taskList, newTasker]);
  };

  const onChangeTaskStatus = (e) => {
    setValue({
      ...value,
      taskStatus: e.target.value,
    });
  };

  console.log(taskList);
  console.log(value.username);
  console.log(value.status);
  return (
    <div className="app-container">
      <form onSubmit={onSubmitForm} className="form-container">
        <div className="date-feilds">
          <div className="label-and-input-container">
            <label htmlFor="startDate">Start Date</label>

            <input
              type="date"
              id="startDate"
              className="start-date"
              placeholder="Start Date"
              value={value.startDate}
              onChange={onChangeStartDate}
            />
          </div>
          <div className="label-and-input-container">
            <label htmlFor="startDate">End Date</label>

            <input
              type="date"
              className="end-date"
              placeholder="End Date"
              value={value.endDate}
              onChange={onChangeEndDate}
            />
          </div>
        </div>
        <div className="detials-container">
        <div className="field-container">
          <label htmlFor="name" className="name">
            NAME
          </label>
          <input
            type="text"
            id="name"
            value={value.username}
            placeholder="Username"
            onChange={onChangeUserName}
            className="input-field"
          />
        </div>
        <div className="field-container">
          <label htmlFor="project" className="name">
            PROJECT
          </label>

          <input
            type="text"
            id="project"
            placeholder="Project Name"
            value={value.projectName}
            className="input-field"
            onChange={onChangeProjectName}
          />
        </div>
        <div className="field-container">
          <p className="name">Task Description</p>

          <textarea
            placeholder="Task Description"
            className="task-description"
            value={value.taskDescription}
            onChange={onChangeTaskDescription}
          />
        </div>
        <div className="status-container">
          <label htmlFor="STATUS" className="task-status  name"> Task Status</label>
          <div className="radio-btn-container" onChange={onChangeTaskStatus}>
            <input type="radio" value="planned" name="status" />
            Planned
            <input
              type="radio"
              value="inProgress"
              name="status"
              id="inProgress"
            />
            In-Progress
            <input type="radio" value="done" name="status" />
            Done
          </div>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
        </div>
      </form>

      <table>
        <tr>
          <th>S.NO</th>
          <th>Name</th>
          <th>Project</th>
          <th>Task</th>
          <th>Status</th>
          <th>StartDate</th>
          <th>EndDate</th>
        </tr>

        {taskList.map((eachTask) => (
          <tr key={eachTask.id}>
            <td>{eachTask.id}</td>
            <td>{eachTask.name}</td>
            <td>{eachTask.project}</td>
            <td>{eachTask.task}</td>
            <td>{eachTask.status}</td>
            <td>{eachTask.startDate}</td>
            <td>{eachTask.endDate}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
