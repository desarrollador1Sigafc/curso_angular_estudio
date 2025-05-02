
//canActivate  : este guard decide si un usuario puede acceder a una ruta o no
//canActivateChild : este guard decide si un usuario puede acceder a una ruta hija o no
//canDeactivate : este guard decide si un usuario puede salir de una ruta o no
//canMatch : este es el encargado de decidir si una ruta debe cargarse o no

import { CanActivateFn } from '@angular/router';

export const guardaRoutaGuard: CanActivateFn = (route, state) => {

  // los guardas son funciones que se ejecutan antes de cargar un componente
  // en este caso se ejecuta antes de cargar el componente home
  // se puede usar para validar si el usuario esta logueado o no
  //y proteger rutas
  
  const isLogged =true
  return isLogged;
};
