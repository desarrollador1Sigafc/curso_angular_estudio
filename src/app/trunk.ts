import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<div>
      <router-outlet/>
  </div>`,
})
export class Trunk {
  title = 'test_angular';
}
