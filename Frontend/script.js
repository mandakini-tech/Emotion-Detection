function toggleChat() {
            const chatContainer = document.querySelector('.chat-container');
            chatContainer.classList.toggle('active');
        }
        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            if (message !== '') {
                // Add the message to the chat messages div (example)
                const chatMessages = document.querySelector('.chat-messages');
                const newMessage = document.createElement('div');
                newMessage.textContent = message;
                chatMessages.appendChild(newMessage);
                input.value = ''; // Clear the input
                // Optionally, you can send the message to a server here
            }
        }

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