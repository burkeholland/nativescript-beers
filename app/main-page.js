var frame = require('ui/frame');
var beers_view_model_1 = require('./view-models/beers-view-model');
var viewModel = new beers_view_model_1.default();
var pageLoaded = function (args) {
    var page = args.object;
    page.bindingContext = viewModel;
    viewModel.getBeers();
    if (page.ios) {
        var controller = frame.topmost().ios.controller;
        var navigationBar = controller.navigationBar;
        navigationBar.barStyle = 1;
    }
};
exports.pageLoaded = pageLoaded;
var itemLoading = function (args) {
    var cell = args.ios;
    if (cell) {
        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectStyleNone;
    }
};
exports.itemLoading = itemLoading;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLElBQVksS0FBSyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ2xDLGlDQUEyQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTVELElBQUksU0FBUyxHQUFHLElBQUksMEJBQWMsRUFBRSxDQUFDO0FBRXJDLElBQUksVUFBVSxHQUFHLFVBQUMsSUFBZTtJQUM3QixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBRWhDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNYLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFFN0MsYUFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztBQUNMLENBQUM7QUFTUSxrQkFBVSxjQVRsQjtBQUVELElBQUksV0FBVyxHQUFHLFVBQUMsSUFBSTtJQUNuQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsY0FBYyxHQUFHLDZCQUE2QixDQUFDLDhCQUE4QixDQUFDO0lBQ3ZGLENBQUM7QUFDTCxDQUFDO0FBRW9CLG1CQUFXLGVBRi9CO0FBeUJELG1DQUFtQztBQUNuQyx3Q0FBd0M7QUFDeEMsMkJBQTJCO0FBQzNCLGtCQUFrQjtBQUNsQiw4RkFBOEY7QUFDOUYsUUFBUTtBQUNSLElBQUk7QUFFSiw2Q0FBNkM7QUFFN0Msd0JBQXdCO0FBQ3BCLGtCQUFrQjtBQUNsQix1REFBdUQ7QUFDdkQsb0RBQW9EO0FBRXBELGlGQUFpRjtBQUNqRixrQ0FBa0M7QUFFbEMsNERBQTREO0FBQzVELGlEQUFpRDtBQUNqRCxJQUFJIn0=