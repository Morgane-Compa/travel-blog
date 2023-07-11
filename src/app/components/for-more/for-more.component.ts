import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-for-more',
  templateUrl: './for-more.component.html',
  styleUrls: ['./for-more.component.css']
})
export class ForMoreComponent {

  @Input() photos: string[] = [];

}
