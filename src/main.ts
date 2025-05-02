import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/config';
import { Trunk } from './app/trunk';

bootstrapApplication(Trunk, appConfig)
  .catch((err) => console.error(err));
