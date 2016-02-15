
import { Observable, EventData } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import * as http from 'http';
import Beer from '../models/beer';

class BeersViewModel extends Observable {
    beerList: ObservableArray<Beer>;
    images: Array<string>;
    
    constructor() {
        super();
        
        this.beerList = new ObservableArray<Beer>();
    }
    
    getBeers() {
        http.getJSON('http://www.beer-tutorials.org/beers/beers.json').then((result: Array<Object>) => {
           result.forEach((beer: any) => {
             // get the image and then 
             console.log(`Name: ${beer.name}`);  
             try {
                this.beerList.push(new Beer(beer.name, beer.description, beer.alcohol, beer.img)); 
             }
             catch (err) {
                 console.log(err);
             }
           });
        });
    }
}

export default BeersViewModel;
