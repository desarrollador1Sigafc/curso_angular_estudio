 import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ReversedPipe } from '../../pipes/reversed.pipe';
import { UsersService } from '../../../core/services/users.service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'feacture-home',
  imports: [CommonModule ,ReversedPipe],
  templateUrl: './estudio.component.html',
})
export class HomeComponent {
  user = inject(UsersService);

  changeUserName(event :Event){
    const input = event.target as HTMLInputElement;
    this.user.changeUser(input.value);
  }

  today = new Date();
  contador = signal(0);
  nombre = signal('Fernando');
  //una señal computada agrupa otras señales derivando un valor final
  nombreMasContador = computed(()=>this.contador() + ' - ' + this.nombre());
  estado = signal('activo');

  
  cambiarEstado (){
    this.estado.set(this.estado() == 'activo' ? 'inactivo' : 'activo');
  }

  //los effects son funciones que se ejecutan cuando una señal cambia util para llamadas a apis o logs

  readonly contadorLectura = this.contador

  increment(){
    this.contador.set(this.contador() + 1);
  }

  decrement(){
    //this.contador.update(value => value - 1); //modifica usando una funcion

    if(this.contador() == 0)return 
    this.contador.set(this.contador() - 1); //modifica usando el valor actual
  }


  //como manejar los errores en las apis usando observables

  //el next es como el response de una promesa si algo falla se va al error
  // this.user.getUsers().subscribe({
  //   next: (data :string) => {
  //     console.log(data);
  //   },
  //   error: (error) => {
  //     console.log(error);
  //   },
  //   complete: () => {
  //     console.log('complete');
  //   }
  // });
}
