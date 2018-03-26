//all components have an annotation and class declaration
import { Component } from '@angular/core';
import { Item } from './models/item.model';

//annotation: determines appearance
@Component({
  selector: 'application-root', //where it goes
  templateUrl: './app.component.html', //how it should appear
  styleUrls: ['./app.component.css'] // how it should be styled
})

//class declaration: determines behavior
export class AppComponent {
  // title = 'app';

  items: Item[] = [
    new Item('Almond milk'),
    new Item('Chia Seeds'),
    new Item('Peanutbutter')
  ];

  currentDate = new Date();
  month = this.currentDate.getMonth(); //use this to refer to class properties (currentDate is a class property of AppComponent)
  day = this.currentDate.getDay();
  year = this.currentDate.getFullYear();

}


//in depth: class annotation

//@component is known as a decorator
