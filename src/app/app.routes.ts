import { Routes } from '@angular/router';
import {SignalsComponent} from './signals/signals/signals.component';
import {TemplateComponent} from './signals/template/template.component';

export const routes: Routes = [
  {
    path: 'signals',
    component: SignalsComponent
  },
  {
    path: 'template',
    component: TemplateComponent
  },

  {
    path: '**',
    redirectTo: 'signals',
  },

];



