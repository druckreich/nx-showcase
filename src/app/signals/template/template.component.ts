import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-template',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

  code = '@let name = \'Frodo\';\n' +
    '<div>Dashboard for {{ name }}</div>\n' +
    '<div>Hello, {{ name }}</div>'

}
