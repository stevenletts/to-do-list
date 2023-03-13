import "./style.css";

// Folder DOM Manipulation

const sumbitFolder = document.getElementById("submit-folder");

const addFolderToDOM = () => {
  // add folder to DOM
  //  gets name from input -> creates table row -> adds styles via class -> insert cells->
  // in cell puts name -> add delete button into another cell and styles ->
  // appends new folder to table
  let folders = document.querySelector(".folder-table");
  let newFolderName = getNewFolderName();

  let newFolder = document.createElement("tr");
  activeFolderListner(newFolder);
  newFolder.classList.add("folder");

  let c1 = newFolder.insertCell(0);
  let c2 = newFolder.insertCell(1);

  // substitute for folder object
  c1.innerText = `${newFolderName}`;
  let delBtn = document.createElement("button");
  delBtn.classList.add("delete-icon");
  c2.appendChild(delBtn);
  deleteItem(delBtn, folders);

  folders.appendChild(newFolder);
};

const getNewFolderName = () => {
  // retrieve name from input field and clear input field
  let folderNameField = document.getElementById("folder-name");
  let name = folderNameField.value;
  folderNameField.value = "";
  return name;
};

const deleteItem = (btn, tableElem) => {
  // delete table row representing folder from DOM
  btn.addEventListener("click", function () {
    let gparent = btn.parentElement.parentElement;
    tableElem.deleteRow(gparent.rowIndex);
  });
};

const activeFolderListner = () => {
  row.addEventListener("click", () => {
    removeActive();
    row.classList.add("active");
    return row;
  });
};

const removeActive = () => {
  // remove active class when active is changed
  let tableBody = document.querySelector(".folder-table");
  for (let i = 0, row; (row = tableBody.rows[i]); i++) {
    if (row.classList.contains("active")) {
      row.classList.remove("active");
      return;
    }
  }
};

sumbitFolder.addEventListener("click", addFolderToDOM);

// TASK DOM MANIPULATION

// Add task
const submitTask = document.getElementById("submit-task");

const addTaskToDOM = () => {
  let taskDesc = document.getElementById("description").value;
  let date = document.getElementById("date").value;
  let priority = document.getElementById("priority").value;

  // insert validation function
  // replace with task object

  let table = document.getElementById("task-table");
  let row = document.createElement("tr");

  row.classList.add("to-do-item", `${priority}`);

  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
  let c4 = row.insertCell(3);
  let c5 = row.insertCell(4);

  const cb = createCheckbox();
  c1.appendChild(cb);
  checked(cb);
  c2.innerText = taskDesc;
  c3.innerText = reformatDate(date);

  let editBtn = document.createElement("button");
  editBtn.classList.add("small-icon");
  c4.appendChild(editBtn);

  let delBtn = document.createElement("button");
  delBtn.classList.add("delete-icon");
  c5.appendChild(delBtn);
  deleteItem(delBtn, table);

  table.appendChild(row);
};

const createCheckbox = () => {
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  return checkBox;
};

const reformatDate = (dateStr) => {
  let split = dateStr.split("-");
  return split[2] + "/" + split[1] + "/" + split[0];
};

const checked = (checkBox) => {
  checkBox.addEventListener("click", () => {
    const desc = checkBox.parentElement.nextSibling;
    if (desc.classList.contains("line")) {
      desc.classList.remove("line");
    } else desc.classList.add("line");
  });
};

submitTask.addEventListener("click", addTaskToDOM);
