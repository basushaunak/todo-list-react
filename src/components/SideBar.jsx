
export default function SideBar({userDetails}) {
  return (
    <div id="side-bar">
      <div id="usr-img-div">
        <img id="usr-img" src={userDetails.userImage} />
      </div>
      <div id="user-id-div">
        <p id="user-id">@{userDetails.userName}</p>
      </div>
      <div id="tasks-div">
        <p class="sidebar-heading" id="txt-all-tasks" title="Show All Tasks">
          All Tasks
        </p>
        <p id="txt-task-new" title="Add a new Task">
          New Task...
        </p>
        <p id="txt-task-today">Today</p>
        <p id="txt-task-thisweek">This Week</p>
        <p id="txt-task-thismonth">This Month</p>
        <p id="txt-task-nextweek">Next Week</p>
        <p id="txt-task-nextmonth">Next Month</p>
        <div>
          <input type="date" id="filter-date" />
          <button type="button" id="btn-date-go">
            Go!
          </button>
        </div>
      </div>
      <div id="projects-div"></div>
    </div>
  );
}
