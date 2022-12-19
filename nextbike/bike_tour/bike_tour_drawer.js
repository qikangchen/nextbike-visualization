class BikeTourDrawer{

    SCALING = 700
    X_Y_SCALING = 1.5

    bike_tours = undefined

    constructor(bike_tour_data, heartbeat){
        this.timestamp_selector = new TimestampSelector(bike_tour_data)
        this.heartbeat = heartbeat
    }

    draw(){

        if(this.heartbeat.getBeatIndex() == 0){
            let bike_tours_ts = this.timestamp_selector.on(this.heartbeat.getTimestamp()) 
            let bike_tour_builder = new BikeTourBuilder(this.heartbeat.BEATS_PER_CYCLE)
            this.bike_tours = bike_tour_builder.build(bike_tours_ts)
        }

        this.bike_tours.forEach((bike_tour) => {
            this.__draw_bike_tour(bike_tour)
        })
    }

    __draw_bike_tour(bike_tour) {
        stroke(255, 0, 0)
        strokeWeight(7)
        // print(bike_tour.x1, bike_tour.x2)
        line(
            bike_tour.current_x1 * this.SCALING * this.X_Y_SCALING,
            bike_tour.current_y1 * this.SCALING,
            bike_tour.current_x2 * this.SCALING * this.X_Y_SCALING,
            bike_tour.current_y2 * this.SCALING
        )
        bike_tour.move()
    }

}