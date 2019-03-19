import { Injectable } from '@angular/core';
import {Http} from '@angular/http' ;

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private url ='https://jsonplaceholder.typicode.com/todos';
  constructor( private http :Http) { }

  getNotes(){
  return  this.http.get(this.url)
  }
  createNotes(note){
    return this.http.post(this.url ,JSON.stringify(note) ); 
  }
  update(note){
    return this.http.patch(this.url +'/'+ note.id , JSON.stringify({ author :'ichraf'}));
  }
  delete(id){
    return this.http.delete(this.url+'/'+id);
  }
}
