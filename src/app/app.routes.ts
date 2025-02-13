import {Routes} from '@angular/router';
import {SignalsComponent} from './signals/signals.component';
import {TemplateComponent} from './template/template.component';
import {ComponentsComponent} from './components/components.component';
import {MemoryComponent} from './memory/memory.component';

export const routes: Routes = [
  {
    path: 'components',
    component: ComponentsComponent
  },
  {
    path: 'signals',
    component: SignalsComponent
  },
  {
    path: 'template',
    component: TemplateComponent
  },
  {
    path: 'memory',
    component: MemoryComponent
  },
  {
    path: '**',
    redirectTo: 'signals',
  },

];



