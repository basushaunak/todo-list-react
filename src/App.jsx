import { useState, useEffect } from "react";
import "./App.css";
import { SideBar } from "./components/SideBar.jsx";
import { Details } from "./components/Details.jsx";

export default function App() {
  const { userName, setUserName } = useState("basushaunak");
  const { userImage, setUserImage } = useState(
    "./assets/images/user-image.jpg"
  );
  const { taskList, setTaskList } = useState([]);
  const { projectList, setProjectList } = useState([]);
  const userDetails = { userName: userName, userImage: userImage };
  const { filteredTaskList, setFilteredTaskList } = useState([]);

  return (
    <div class="wrapper" id="main-wrapper">
      <div id="content">
        <SideBar
          userDetails={userDetails}
          taskList={taskList}
          projectList={projectList}
        />
        <Details taskList={filteredTaskList} />
      </div>
    </div>
  );
}
