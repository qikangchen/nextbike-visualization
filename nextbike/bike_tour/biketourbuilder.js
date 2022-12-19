class BikeTourBuilder{

    constructor(beats_per_cycle){
        this.beats_per_cycle = beats_per_cycle
    }

    build(bike_tours_ts){
      let bike_tours = []
      for (var x in bike_tours_ts){
        let bike_tour = bike_tours_ts[x][0]
        let [lat_x, lng_x, lat_y, lng_y] = this.__getBikeTour(bike_tour)

        bike_tours = bike_tours.concat(new BikeTour(lng_x, lat_x, lng_y, lat_y, this.beats_per_cycle))
      }

      return bike_tours
    }

    __getBikeTour(o){
      return [o['lat_x'], o['lng_x'], o['lat_y'], o['lng_y']]
    }
}