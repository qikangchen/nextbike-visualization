class ActivityGraphDrawer{

    X1 = 0 
    X2 = 1000
    Y1 = 750 
    Y2 = 900

    constructor(activities, ts_indexes, day_indexes, heartbeat, font){
        this.activities = activities
        this.ts_indexes = ts_indexes
        this.day_indexes = day_indexes
        this.heartbeat = heartbeat

        this.am_pm_background = new AmPmBackground(ts_indexes)
        this.graph_skeleton = new GraphSkeleton(this.X1, this.Y1, this.X2, this.Y2, day_indexes, font)
    }

    draw(){
        let y_delta = this.Y2-this.Y1
        let x_delta = this.X2-this.X1
        let x_scaling = x_delta / Object.keys(this.ts_indexes).length 

        this.am_pm_background.draw(this.X1, this.Y1, this.X2, this.Y2, x_scaling)

        this.drawPastActivity(this.X1, this.Y2, y_delta, x_scaling)
        this.drawCurrentCursor(this.X1, this.Y2, y_delta, x_scaling)

        this.graph_skeleton.draw()
    }


    drawPastActivity(x1, y2, y_delta, x_scaling) {
        noFill()
        stroke(255, 0, 0)
        beginShape()
        strokeWeight(2)
        for (let i = 0; i < this.heartbeat.getCycleIndex(); i++) {
            let vactivity = this.activities[this.ts_indexes[i + 1]]
            let vx = x1 + i * x_scaling
            let vy = y2 - y_delta * vactivity
            vertex(vx, vy)
        }
        endShape()
    }

    drawCurrentCursor(x1, y2, y_delta, x_scaling) {
        stroke(255, 0, 0)
        strokeWeight(10)
        let activity = this.activities[this.heartbeat.getTimestamp()]
        let x = x1 + this.heartbeat.getCycleIndex() * x_scaling
        let y = y2 - y_delta * activity
        point(x, y)
    }
}