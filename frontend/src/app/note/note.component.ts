import { Component, OnInit } from '@angular/core';
import {NoteService} from './../services/note.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private service :NoteService) { }
   notes :any[] ;
  ngOnInit() {
    this.service.getNotes().subscribe(notes => {
    this.notes=notes.json();
    })
  }
  createNote(input){
    let note ={ title :input.value } ;
    input.value = '';
    this.service.createNotes(note).subscribe(noted => {
      this.notes.push(note);

    })
  }
  updateNote(input){
    this.service.update(input).subscribe(updatedNote =>{
      console.log(updatedNote.json());
    })
  }
  deleteNote(input){
    this.service.delete(input.id).subscribe(notes => {
      let index = this.notes.indexOf(input);
      this.notes.splice(index, 1) ;
    })
  }
}
