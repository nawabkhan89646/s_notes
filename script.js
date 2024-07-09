function addNote() {
    const noteText = document.getElementById("noteInput").value;
    const note = { text: noteText, id: Date.now() };
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
    document.getElementById("noteInput").value = "";
  }

  function displayNotes() {
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note) => {
      const div = document.createElement("div");
      div.className = "note";
      div.textContent = note.text;
      notesContainer.appendChild(div);
    });
  }

  displayNotes();