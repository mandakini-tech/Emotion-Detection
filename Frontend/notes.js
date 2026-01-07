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