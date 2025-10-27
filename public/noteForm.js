const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get("id"); // if id exists, we are editing

const titleInput = document.getElementById("noteTitle");
const contentInput = document.getElementById("noteContent");
const form = document.getElementById("noteForm");

let diary = new Diary();

if (noteId) {
  const note = diary.getNoteById(noteId);
  if (note) {
    titleInput.value = note.title;
    contentInput.value = note.content;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title && !content) return;

  if (noteId) diary.updateNote(noteId, title, content);
  else diary.addNote(title, content);

  window.location.href = "diary.html"; // back to list
});
