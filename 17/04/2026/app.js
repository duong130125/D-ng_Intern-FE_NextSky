let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let filtered = tasks;

  if (currentFilter === "active") {
    filtered = tasks.filter((t) => !t.done);
  } else if (currentFilter === "done") {
    filtered = tasks.filter((t) => t.done);
  }

  filtered.forEach((task, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.onchange = () => toggleTask(index);

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.done) span.classList.add("done");

    span.ondblclick = () => editTask(index);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Xóa";
    delBtn.onclick = () => deleteTask(index);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (!text) {
    alert("Không được để trống!");
    return;
  }

  tasks.push({
    text,
    done: false,
  });

  save();
  input.value = "";
}

function deleteTask(index) {
  tasks.splice(index, 1);
  save();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  save();
}

function editTask(index) {
  const newText = prompt("Sửa công việc:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    save();
  }
}

function filterTasks(type) {
  currentFilter = type;
  render();
}

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
}

render();
