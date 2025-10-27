const notesContainer = document.querySelector("#noteList");

const handleDelete = (id) => {
  diary.deleteNote(id);
  renderNotes();
}

const handleEdit = (id) => {
  window.location.href = `noteForm.html?id=${id}`; // redirect to edit page
}

if (notesContainer) {
  notesContainer.addEventListener('click', (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const action = btn.dataset.action;
    const id = btn.dataset.id;

    if (action === "delete") handleDelete(id);
    else if (action === "edit") handleEdit(id);
  });
}

function renderNotes() {
  if (!notesContainer) return;
  notesContainer.innerHTML = "";

  diary.notes.forEach(note => {
    notesContainer.innerHTML += `
      <div class="card">
        <div class="note-meta">${new Date(note.date).toLocaleDateString()}</div>
        <div class="note-title">${note.title}</div>
        <div class="note-content">${note.content}</div>
        <div class="note-meta">Created: ${new Date(note.createdAt).toLocaleString()} · Updated: ${new Date(note.updatedAt).toLocaleString()}</div>
        <div class="note-actions">
          <button class="btn" data-id="${note.id}" data-action="edit">Edit</button>
          <button class="btn" data-id="${note.id}" data-action="delete">Delete</button>
        </div>
      </div>
    `;
  });
}

function LoadNotes() {
  diary.loadfromlocalStorage();
  renderNotes();
}

// Init
let diary = new Diary();
LoadNotes();
