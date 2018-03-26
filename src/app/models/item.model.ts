export class Item{
  purchased: boolean = false;
  constructor(public name: string){}

  crossOut(){
    this.purchased = true;
  }
}
