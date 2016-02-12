
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as frame from 'ui/frame';
import BeersViewModel from './view-models/beers-view-model';

let viewModel = new BeersViewModel(); 

let pageLoaded = (args: EventData) => {
    let page = <Page>args.object;
    page.bindingContext = viewModel;
    
    viewModel.getBeers();    
    
    if (page.ios) {
        let controller = frame.topmost().ios.controller;
        let navigationBar = controller.navigationBar;
        
        navigationBar.barStyle = 1;
    }
}

let itemLoading = (args) => {
    var cell = args.ios;
    if (cell) {
        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectStyleNone;
    }
}

export { pageLoaded, itemLoading }






















// turn off the row selection (ios)
// let listViewItemLoading = (args) => {
//     var cell = args.ios;
//     if (cell) {
//         cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectStyleNone;
//     }
// }

// export { pageLoaded, listViewItemLoading }

// tweak some iOS styles
    // if (page.ios) {
    //     let controller = frame.topmost().ios.controller;
    //     let navigationBar = controller.navigationBar;
        
    //     // change the status bar color to white (that's the battery, time, ect...)
    //     navigationBar.barStyle = 1;
        
    //     // turn of the default aciton bar translucency in iOS
    //     navigationBar.translucent = false;        
    // }