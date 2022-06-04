//Add Notes

const btnAddNote = document.getElementById('addNote')
btnAddNote.addEventListener("click", () => {
    const textoNotes = document.getElementById('textoNotes')
    const notes = document.getElementById('notes')
    if (textoNotes.value == 0) {
        Swal.fire({
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/889/889669.png',
            title: 'Ingresa una Nota Importante!',
            imageAlt: 'A tall image',
            imageHeight: 80,
            imageWidth: 80,
        })
    } else {
        const lista = document.createElement('li')
        lista.textContent = textoNotes.value
        notes.appendChild(lista)
        textoNotes.value = ""
    }

});

//Delete Notes
const btnDeleteNote = document.getElementById('delteNote')
btnDeleteNote.addEventListener("click", () => {
    const note = document.querySelector('li:last-child')
    note.parentElement.removeChild(note)
});