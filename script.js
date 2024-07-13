document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      listItem.className = "py-2 border-b flex justify-between items-center";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "text-red-500 hover:underline ml-4";
      deleteBtn.addEventListener("click", function () {
        taskList.removeChild(listItem);
      });

      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  });
});
