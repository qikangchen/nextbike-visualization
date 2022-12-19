class DayDrawer{
    
    last_day = 0
    day_counter = 0

    constructor(font, day_indexes, heartbeat){
        this.font = font
        this.day_indexes = day_indexes
        this.heartbeat = heartbeat
    }
    
    draw(){
        stroke(200)
        fill(200)
        textAlign(LEFT)
        textFont(this.font)
        textSize(60)

        let day = this.day_indexes[this.heartbeat.getCycleIndex()] + 1
        text('Day ' + day, 150, 650)
    }

}