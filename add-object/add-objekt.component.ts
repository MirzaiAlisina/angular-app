import { Component, ViewChild, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-objekt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-objekt.component.html',
  styleUrl: './add-objekt.component.css'
})
export class AddObjektComponent {

  @ViewChild ("addObjectform") objectForm : any;
  firestore: Firestore = inject(Firestore);


  saveData(): void{
    const acollection = collection(this.firestore, 'Books');
    addDoc(acollection,{
      'bookTitle' : this.objectForm.value.bookTitle,
      'author' : this.objectForm.value.author,
      'description' : this.objectForm.value.description,

    })
  }

  submitForm():void {
    alert(this.objectForm.value.bookTitle);
    this.saveData();
  }
  
}

