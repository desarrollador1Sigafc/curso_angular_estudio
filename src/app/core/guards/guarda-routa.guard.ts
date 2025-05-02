import { CanActivateFn } from '@angular/router';

export const guardaRoutaGuard: CanActivateFn = (route, state) => {

  // los guardas son funciones que se ejecutan antes de cargar un componente
  // en este caso se ejecuta antes de cargar el componente home
  // se puede usar para validar si el usuario esta logueado o no
  //y proteger rutas
  const isLogged =true
  return isLogged;
};
