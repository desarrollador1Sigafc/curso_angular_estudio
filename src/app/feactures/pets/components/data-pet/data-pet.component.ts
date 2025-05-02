import { Component, Input, input, signal } from '@angular/core';

@Component({
  selector: 'app-data-pet',
  imports: [],
  templateUrl: './data-pet.component.html',
  styleUrl: './data-pet.component.css'
})
export class DataPetComponent {
  petImage = input();
  petName =input();
  petPrice= input();

 
}
