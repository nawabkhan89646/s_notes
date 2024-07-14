// Function to add a new note
function addNote() {
  // Get the text input value from the input field with id "noteInput"
  const noteText = document.getElementById("noteInput").value;
  // Create a new note object with text and a unique id based on the current timestamp
  const note = { text: noteText, id: Date.now() };

  // Retrieve existing notes from local storage, or initialize an empty array if none exist
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  // Add the new note to the array of notes
  notes.push(note);
  // Save the updated array of notes back to local storage
  localStorage.setItem("notes", JSON.stringify(notes));
  // Call the function to display all notes
  displayNotes();
  // Clear the input field for new note entry
  document.getElementById("noteInput").value = "";
}

// Function to display all notes
function displayNotes() {
  // Get the container element where notes will be displayed
  const notesContainer = document.getElementById("notesContainer");
  // Clear the current content of the notes container
  notesContainer.innerHTML = "";
  // Retrieve the notes from local storage, or initialize an empty array if none exist
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  // Iterate over each note in the array
  notes.forEach((note) => {
    // Create a new div element for each note
    const div = document.createElement("div");
    // Assign a class name to the div for styling purposes
    div.className = "note";
    // Set the text content of the div to the note's text
    div.textContent = note.text;
    // Append the note div to the notes container
    notesContainer.appendChild(div);
  });
}

// Initial call to display all notes when the page loads
displayNotes();
