import { Component } from '@angular/core';
import { ApiServiceService, Weather } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // je créer une variable avec le type que j'ai créé dans le service de mon api
  data?: Weather;

  // j'importe mon service
  constructor(private serviceApi: ApiServiceService) { }

  // j'initialise la fonction que j'ai créé dans mon service
  ngOnInit() {
    this.serviceApi.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

}
