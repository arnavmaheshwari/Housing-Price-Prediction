import { Component } from '@angular/core';
import { HousingPredService } from './housing-pred.service';
import { HousingPred } from './housing-pred';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'housing_price';
  constructor(private housingPredService: HousingPredService) { }

  HousingPred: HousingPred = new HousingPred("","","","","","","","","","","","");
  list:any = [];

  predict(){
    
    // Getting the values of the object and storing it in a list
    this.list = (Object.values(this.HousingPred));

    // Converting all the elements of the list to number
    this.list = this.list.map(Number);

    // Storing the list in an object 'data'
    var obj = {
      "data": this.list
    };

    // Converting the object to JSON
    var json = JSON.stringify(obj);
    
    this.housingPredService.predict(json)
    .subscribe(data => {
      const price = JSON.parse(JSON.stringify(data));
      alert("Approximate Price: $"+price.toFixed(2));
    });
  }
}