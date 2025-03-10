import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire-edition',
  imports: [FormsModule],
  templateUrl: './formulaire-edition.component.html',
  styleUrl: './formulaire-edition.component.css'
})

export class FormulaireEditionComponent {
  firstname: string = '';
  age: number = 0;

  @Output() onSubmit = new EventEmitter<{ firstname: string, age: number}>();

  submitForm(): void {
    this.onSubmit.emit({
      firstname: this.firstname,
      age: this.age
    });
  }

}
