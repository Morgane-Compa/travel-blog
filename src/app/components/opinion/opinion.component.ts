import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent {

    // Je créer des input, vide pour le moment car ils recevront leur données quand je déclarerai le composant enfant dans le parent

    @Input() pointspositif: string[] = [];
    @Input() pointsnegatif: string[] = [];
    @Input() conseils: string[] = [];

}
