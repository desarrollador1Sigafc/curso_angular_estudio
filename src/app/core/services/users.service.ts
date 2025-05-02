import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usuario = signal<string>('default user');

  changeUser (userName: string) {
    this.usuario.set(userName);
  }

  getUser () {
    return this.usuario();
  }
}
