var observable_1 = require('data/observable');
var observable_array_1 = require('data/observable-array');
var http = require('http');
var beer_1 = require('../models/beer');
var BeersViewModel = (function (_super) {
    __extends(BeersViewModel, _super);
    function BeersViewModel() {
        _super.call(this);
        this.beerList = new observable_array_1.ObservableArray();
    }
    BeersViewModel.prototype.getBeers = function () {
        var _this = this;
        http.getJSON('http://www.beer-tutorials.org/beers/beers.json').then(function (result) {
            result.forEach(function (beer) {
                // get the image and then 
                console.log("Name: " + beer.name);
                try {
                    _this.beerList.push(new beer_1.default(beer.name, beer.description, beer.alcohol, beer.img));
                }
                catch (err) {
                    console.log(err);
                }
            });
        });
        http.getJSON('');
    };
    return BeersViewModel;
})(observable_1.Observable);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BeersViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVlcnMtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJlZXJzLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOlsiQmVlcnNWaWV3TW9kZWwiLCJCZWVyc1ZpZXdNb2RlbC5jb25zdHJ1Y3RvciIsIkJlZXJzVmlld01vZGVsLmdldEJlZXJzIl0sIm1hcHBpbmdzIjoiQUFDQSwyQkFBc0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQUN4RCxJQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUM3QixxQkFBaUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUVsQztJQUE2QkEsa0NBQVVBO0lBSW5DQTtRQUNJQyxpQkFBT0EsQ0FBQ0E7UUFFUkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsa0NBQWVBLEVBQVFBLENBQUNBO0lBQ2hEQSxDQUFDQTtJQUVERCxpQ0FBUUEsR0FBUkE7UUFBQUUsaUJBZUNBO1FBZEdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGdEQUFnREEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsTUFBcUJBO1lBQ3ZGQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxJQUFTQTtnQkFDdkJBLDBCQUEwQkE7Z0JBQzFCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFTQSxJQUFJQSxDQUFDQSxJQUFNQSxDQUFDQSxDQUFDQTtnQkFDbENBLElBQUlBLENBQUNBO29CQUNGQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxjQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckZBLENBQ0FBO2dCQUFBQSxLQUFLQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDVEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQTtZQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNOQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFBQTtJQUNwQkEsQ0FBQ0E7SUFDTEYscUJBQUNBO0FBQURBLENBQUNBLEFBMUJELEVBQTZCLHVCQUFVLEVBMEJ0QztBQUVEO2tCQUFlLGNBQWMsQ0FBQyJ9