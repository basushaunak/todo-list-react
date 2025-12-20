import {type User, type Project, type Task} from "./config";
import { DB_NAME,DB_VERSION } from "./config";

export function generateId():string{
    return window.crypto.randomUUID();
}

export function startOfWeek(date=new Date()):Date
{
  // Calculate the difference between the date's day of the month and its day of the week
  const diff:number = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

  // Set the date to the start of the week by setting it to the calculated difference
  return new Date(date.setDate(diff));
}

export function endOfWeek(date=new Date()):Date{
  // Calculate the date of the last day of the week by adding the difference between the day of the month and the day of the week, then adding 6.
  const lastday:number = date.getDate() - (date.getDay() - 1) + 6;
  // Set the date to the calculated last day of the week.
  return new Date(date.setDate(lastday));
}

export function properCase(name:string | undefined | null):string {
  if (!name) return "";
  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function setPadding(str:string, len:number = str.length, char:string = " "):string{
  if (str.length === len){
    return str;
  }
  if (str.length > len){
    return str.slice(0,len);
  }
  return str.padEnd(len,char);
}

export function isDuplicate(array, item):boolean {
  return array.includes(item);
}

export function showMessage(msg, element = ""):void {
  if (!element) {
    console.log(msg);
    return;
  }
  element.innerText = msg;
}

//get opposite color
export function getOppositeHSL(h:number, s:number, l:number):{h:number,s:number,l:number}{
  return {
    h: (h + 180) % 360,
    s: s,
    l: l,
  };
}

export function hexToRGB(hex:string):{r:number,g:number,b:number}{
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return { r, g, b };
}


export function getOppositeColorRGB(rgb:{r:number,g:number,b:number}):string {
  let r = 255 - rgb.r;
  let g = 255 - rgb.g;
  let b = 255 - rgb.b;
  return `rgb(${r},${g},${b})`;
}

//for high visibility of text

export function getTextColor(rgb:{r:number,g:number,b:number}):string {
  const luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
  return luminance > 128 ? "#000000" : "#ffffff";
}

export function getProjectId(array, title) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].projectTitle === title) {
      return array[i].projectId;
    }
  }
  let projId = generateId();
  array.push(new Project(projId, title));
  return projId;
}

export function showProjectsOnSideBar(projects,menuProjects){
  let str;
  menuProjects.innerHTML = `<p class="sidebar-heading" id="txt-projects-all" title="Show All Projects">All Projects</p>
                            <p id="txt-project-new" title="Add a new Project">New Project...</p>`
  projects.sort((a,b)=>a.projectTitle.localeCompare(b.projectTitle));
  for(let i = 0; i < projects.length; i++){
    str = ``;
    str = `<p id=${projects[i].projectId}>${projects[i].projectTitle}</p>`;
    menuProjects.innerHTML += str;
  }
  str = "";
}