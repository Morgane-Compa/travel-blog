import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-the-travel',
  templateUrl: './the-travel.component.html',
  styleUrls: ['./the-travel.component.css']
})
export class TheTravelComponent {

  // Je créer des input, vide pour le moment car ils recevront leur données quand je déclarerai le composant enfant dans le parent
  @Input() title!: string;
  @Input() text!: string;

}
