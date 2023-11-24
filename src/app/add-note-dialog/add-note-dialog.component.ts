import { Component, Output, EventEmitter } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { NoteListService } from '../firebase-services/note-list.service'


@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.scss']
})
export class AddNoteDialogComponent {
  @Output() addDialogClosed: EventEmitter<boolean> = new EventEmitter();
  title = "";
  description = "";

  constructor(private noteService: NoteListService){}

  closeDialog() {
    debugger
    this.title = "";
    this.description = "";
    this.addDialogClosed.emit(false);
  }

  addNote(){
    //beachte das closeDialog() zum Schluss kommt, denn es leert die Variablen
    let note: Note = {
      type: "note",
      title: this.title,
      content: this.description,
      marked: false
    }
    this.noteService.addNote(note, "notes");
    this.closeDialog();
    console.log('addNote works!');
  }
}
