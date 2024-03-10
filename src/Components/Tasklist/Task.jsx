import { useState } from "react";
import "./style.css";

const NewTask = ({ task, onDelete, onAdd }) => {
  const [status, setstatus] = useState("In Progress!");
  const [inputval, setinputval] = useState("");


  const handleChange = () => {
    setstatus(() => {
      return "Task is Completed.";
    });
  };

  const handleDelete = () => {
    onDelete();
  };

  const handleInput = () => {
    onAdd(inputval);
    setinputval("");
  }

  return (
    <><>
      <div className="searchbar">
        <input type="text" placeholder="Enter Description" value={inputval} onChange={(e) => setinputval(e.target.value)} />&nbsp;
        <button onClick={handleInput}>Click Me!</button>
      </div>
    </><>
        <div className="to-do">
          <h3>Description Data: {task.description} </h3>
          <p>Status of Task: {status}</p>
          <input type="checkbox" onClick={handleChange} />
          &nbsp;&nbsp;
          <button id="deletebutton" onClick={handleDelete}>
            DELETE
          </button>
        </div>
      </>
      </>
  );
};
export default NewTask;
