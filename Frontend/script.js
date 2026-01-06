// // const cameraBtn = document.getElementById("cameraBtn");
// // const stopBtn = document.getElementById("stopBtn");
// // const musicBtn = document.getElementById("musicBtn");
// // const notesBtn = document.getElementById("notesBtn");

// // const background = document.getElementById("background-section");
// // const camera = document.getElementById("camera-section");
// // const notes = document.getElementById("notes-section");

// // // 🎥 Start camera
// // cameraBtn.addEventListener("click", () => {
// //   background.classList.add("hidden");
// //   notes.classList.add("hidden");
// //   camera.classList.remove("hidden");
// // });

// // // 🛑 Stop camera
// // stopBtn.addEventListener("click", async () => {
// //   await fetch("/stop_camera");
// //   camera.classList.add("hidden");
// //   background.classList.remove("hidden");
// // });

// // // 🎵 Random music
// // musicBtn.addEventListener("click", () => {
// //   const sounds = [
// //     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
// //     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
// //     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
// //   ];
// //   const random = sounds[Math.floor(Math.random() * sounds.length)];
// //   new Audio(random).play();
// // });

// // // 📝 Notes
// // notesBtn.addEventListener("click", () => {
// //   background.classList.add("hidden");
// //   camera.classList.add("hidden");
// //   notes.classList.remove("hidden");
// // });

// // document.getElementById("addNote").addEventListener("click", () => {
// //   const input = document.getElementById("noteInput");
// //   const text = input.value.trim();
// //   if (text === "") return;

// //   const li = document.createElement("li");
// //   li.textContent = text;
// //   li.addEventListener("click", () => li.remove());

// //   document.getElementById("noteList").appendChild(li);
// //   input.value = "";
// // });


// // function openKaggle() {
// //   window.open("https://www.kaggle.com/jonathanoheix/face-expression-recognition-dataset", "_blank")
// // }
// // function addTask() {
// //   let task = document.getElementById("taskInput").value;

// //   fetch("/add_task", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ task: task })
// //   })
// //   .then(res => res.json())
// //   .then(data => {
// //     let list = document.getElementById("taskList");
// //     list.innerHTML = "";
// //     data.forEach(t => {
// //       let li = document.createElement("li");
// //       li.innerText = t;
// //       list.appendChild(li);
// //     });
// //   });
// // }


// let todoList = [{ item: 'Buy milk', dueDate: '2025-08-04' }];

// function toggleTodo() {
//     let section = document.getElementById('todoSection');

//     if (section.style.display === 'none') {
//         section.style.display = 'block';
//         displayItems();   // show todos when opened
//     } else {
//         section.style.display = 'none';
//     }
// }

// function addTodo() {
//     let inputElement = document.querySelector('#enter');
//     let dateElement = document.querySelector('#todo-date');

//     let todoItem = inputElement.value.trim();
//     let todoDate = dateElement.value;

//     if (todoItem !== '') {
//         todoList.push({
//             item: todoItem,
//             dueDate: todoDate
//         });

//         inputElement.value = '';
//         dateElement.value = '';
//         displayItems();
//     }
// }

// function displayItems() {
//     let containerElement = document.querySelector('.todo-container');
//     let newHtml = '';

//     for (let i = 0; i < todoList.length; i++) {
//         let item = todoList[i].item;
//         let dueDate = todoList[i].dueDate;

//         newHtml += `
//         <div class="todo-row">
//             <span class="todo-item">${item}</span>
//             <span class="todo-date">Due: ${dueDate}</span>
//             <button class="delete-button" onclick="deleteTodo(${i})">
//                 Delete
//             </button>
//         </div>`;
//     }

//     containerElement.innerHTML = newHtml;
// }

// function deleteTodo(index) {
//     todoList.splice(index, 1);
//     displayItems();
// }


// // function hideAll() {
// //   document.getElementById("camera-section").classList.add("hidden");
// //   document.getElementById("notes-section").classList.add("hidden");
// //   document.getElementById("todo-section").classList.add("hidden");
// // }

// // function showCamera() {
// //   hideAll();
// //   document.getElementById("camera-section").classList.remove("hidden");
// // }

// // function showNotes() {
// //   hideAll();
// //   document.getElementById("notes-section").classList.remove("hidden");
// //   loadNotes();
// // }

// // function showTodo() {
// //   hideAll();
// //   document.getElementById("todo-section").classList.remove("hidden");
// //   loadTodos();
// // }

// // // ---------------- NOTES ----------------
// // function addNote() {
// //   let note = document.getElementById("noteInput").value;

// //   fetch("/add_note", {
// //     method: "POST",
// //     headers: {"Content-Type": "application/json"},
// //     body: JSON.stringify({note: note})
// //   })
// //   .then(res => res.json())
// //   .then(showNotes);
// // }

// // function loadNotes() {
// //   fetch("/get_notes")
// //     .then(res => res.json())
// //     .then(data => {
// //       let list = document.getElementById("noteList");
// //       list.innerHTML = "";
// //       data.forEach(n => {
// //         let li = document.createElement("li");
// //         li.innerText = n;
// //         list.appendChild(li);
// //       });
// //     });
// // }

// // // // ---------------- TODO ----------------
// // // function addTodo() {
// // //   let text = document.getElementById("todoText").value;
// // //   let date = document.getElementById("todoDate").value;

// // //   fetch("/add_todo", {
// // //     method: "POST",
// // //     headers: {"Content-Type": "application/json"},
// // //     body: JSON.stringify({text: text, date: date})
// // //   })
// // //   .then(res => res.json())
// // //   .then(loadTodos);
// // // }

// // // function loadTodos() {
// // //   fetch("/get_todos")
// // //     .then(res => res.json())
// // //     .then(data => {
// // //       let list = document.getElementById("todoList");
// // //       list.innerHTML = "";
// // //       data.forEach(t => {
// // //         let li = document.createElement("li");
// // //         li.innerText = t.text + " (Due: " + t.date + ")";
// // //         list.appendChild(li);
// // //       });
// // //     });
// // // }

// // console.log("script.js loaded");

// // /* ---------- SECTION CONTROL ---------- */

// // function hideAll() {
// //   document.getElementById("camera-section").classList.add("hidden");
// //   document.getElementById("notes-section").classList.add("hidden");
// //   document.getElementById("todo-section").classList.add("hidden");
// // }

// // function showCamera() {
// //   hideAll();
// //   document.getElementById("camera-section").classList.remove("hidden");
// // }

// // function showNotes() {
// //   hideAll();
// //   document.getElementById("notes-section").classList.remove("hidden");
// // }

// // function showTodo() {
// //   hideAll();
// //   document.getElementById("todo-section").classList.remove("hidden");
// //   displayItems();
// // }

// // /* ---------- TODO LOGIC ---------- */

// // let todoList = [
// //   { item: "Buy milk", dueDate: "2025-08-04" }
// // ];

// // function addTodo() {
// //   let input = document.getElementById("enter");
// //   let date = document.getElementById("todo-date");

// //   let task = input.value.trim();
// //   let due = date.value;

// //   if (task === "") return;

// //   todoList.push({ item: task, dueDate: due });

// //   input.value = "";
// //   date.value = "";

// //   displayItems();
// // }

// // function displayItems() {
// //   let container = document.querySelector(".todo-container");
// //   let html = "";

// //   for (let i = 0; i < todoList.length; i++) {
// //     html += `
// //       <div class="todo-row">
// //         <span>${todoList[i].item}</span>
// //         <span>${todoList[i].dueDate}</span>
// //         <button onclick="deleteTodo(${i})">Delete</button>
// //       </div>
// //     `;
// //   }

// //   container.innerHTML = html;
// // }

// // function deleteTodo(index) {
// //   todoList.splice(index, 1);
// //   displayItems();
// // }


// // ---------------- TODO ----------------
// function addTodo() {
//   let text = document.getElementById("todoText").value.trim();
//   let date = document.getElementById("todoDate").value;

//   if (text === "") return;

//   fetch("/add_todo", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ text: text, date: date })
//   })
//   .then(res => res.json())
//   .then(() => {
//     document.getElementById("todoText").value = "";
//     document.getElementById("todoDate").value = "";
//     loadTodos();
//   });
// }

// function loadTodos() {
//   fetch("/get_todos")
//     .then(res => res.json())
//     .then(data => {
//       let list = document.getElementById("todoList");
//       list.innerHTML = "";

//       data.forEach(t => {
//         let li = document.createElement("li");
//         li.textContent = `${t.text} (Due: ${t.date})`;
//         list.appendChild(li);
//       });
//     });
// }

// function showTodo() {
//   hideAll();
//   document.getElementById("todo-section").classList.remove("hidden");
//   loadTodos();
// }

function hideAllSections() {
  document.getElementById("camera-section").classList.add("hidden");
  document.getElementById("music-section").classList.add("hidden");
  document.getElementById("notes-section").classList.add("hidden");
  document.getElementById("todo-section").classList.add("hidden");
}

/* NAVBAR FUNCTIONS */
function showCamera() {
  hideAllSections();
  document.getElementById("camera-section").classList.remove("hidden");
}

function showNotes() {
  hideAllSections();
  document.getElementById("notes-section").classList.remove("hidden");
}

function showTodo() {
  hideAllSections();
  document.getElementById("todo-section").classList.remove("hidden");
}

function generateMusic() {
  hideAllSections();

  document.getElementById("music-section").classList.remove("hidden");
  document.getElementById("text-sec").classList.remove("hidden");

  document.getElementById("musicStatus").innerText =
    "🎶 Generating emotion-based Lo-Fi music...";
}


/* NOTES */
function addNote() {
  let input = document.getElementById("noteInput");
  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;
  document.getElementById("noteList").appendChild(li);
  input.value = "";
}
function addText() {
  let input = document.getElementById("noteInput");
  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;
  document.getElementById("noteList").appendChild(li);
  input.value = "";
}
/* TODO */
function addTodo() {
  let text = document.getElementById("todoText").value;
  let date = document.getElementById("todoDate").value;

  if (text === "") return;

  let li = document.createElement("li");
  li.innerText = text + (date ? " (Due: " + date + ")" : "");
  document.getElementById("todoList").appendChild(li);

  document.getElementById("todoText").value = "";
  document.getElementById("todoDate").value = "";
}

function startCamera() {
  document.getElementById("emotionResult").innerText =
    "Detecting emotion...";

  fetch("/detect_emotion")
    .then(res => res.json())
    .then(data => {
      document.getElementById("emotionResult").innerText =
        "Detected Emotion: " + data.emotion;
    })
    .catch(() => {
      document.getElementById("emotionResult").innerText =
        "Camera error";
    });
}

