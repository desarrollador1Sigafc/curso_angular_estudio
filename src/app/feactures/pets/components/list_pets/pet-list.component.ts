 import { Component } from '@angular/core';
import { DataPetComponent } from '../data-pet/data-pet.component';

@Component({
  selector: 'app-products',
  imports: [DataPetComponent],
  template : `

     <div  class="bg-amber-200">
        @for (pet of pets; track $index) {
          <app-data-pet [petImage]="pet.image" [petName]="pet.name" [petPrice]="pet.price" />
        } 
    </div> 
  `,
})
export class PetListComponent {

  
  pets= [
    { id: 1, name: 'perro', price: 10  ,image : 'https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80'},
    { id: 2, name: 'leon', price: 20 ,image : 'https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_2788792_0.jpg?w=1900&h=1267'},
    { id: 3, name: 'gato', price: 30 ,image : 'https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg'},
  ];

}
 