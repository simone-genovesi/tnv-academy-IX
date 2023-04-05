import { Component, Input } from '@angular/core';
import { Piatto } from '../@models/piatto';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent {

  @Input() sectionName: string = '';
  @Input() menuItems: Piatto[] = [];
}
