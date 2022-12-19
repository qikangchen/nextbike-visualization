class HeatmapDrawer{

    X1 = 0 
    X2 = 1000
    Y1 = 1000 
    Y2 = 2000

    constructor(heatmap, heatmap_cumsum, heartbeat, font){
        this.heatmap = heatmap
        this.heatmap_cumsum = heatmap_cumsum
        this.heartbeat = heartbeat
        this.font = font
    }

    draw(){
        let delta_x = this.X2-this.X1
        let delta_y = this.Y2-this.Y1
        let x_width = delta_x/23 
        let y_width = delta_y/23


        textFont(this.font)
        textAlign(CENTER, CENTER)
        fill(200)
        strokeWeight(1)
        textSize(25)
        for(let end_index=0; end_index<23; end_index++){
            text(end_index, 20 + this.X1 + x_width*end_index, this.Y1 - 20)            
        }
        for(let start_index=0; start_index<23; start_index++){
            text(start_index, this.X1 - 20, 20 + this.Y1 + y_width*start_index)
        }
        text("end", this.X1 + delta_x/2, this.Y2 + 20)
        text("start", this.X2 + 40, this.Y1 + delta_y/2)


        this.drawHeatMapCumsum(x_width, y_width)
        this.drawHeatMapCurrent(x_width, y_width)
    }

    drawHeatMapCumsum(x_width, y_width) {
        strokeWeight(3)
        let current_cumsum_heatmap = this.heatmap_cumsum[this.heartbeat.getCycleIndex()]
        for (let start_index = 0; start_index < 23; start_index++) {
            for (let end_index = 0; end_index < 23; end_index++) {

                let value = current_cumsum_heatmap[start_index * 23 + end_index]
                fill(100 + value * 155)
                rect(this.X1 + end_index * x_width, this.Y1 + start_index * y_width, x_width, y_width)
            }
        }
    }

    drawHeatMapCurrent(x_width, y_width) {
        strokeWeight(3)
        let current_heatmap = this.heatmap[this.heartbeat.getCycleIndex()]
        for (let start_index = 0; start_index < 23; start_index++) {
            for (let end_index = 0; end_index < 23; end_index++) {
                let value = current_heatmap[start_index * 23 + end_index]
                // fill(value * 255, 0, 0)
                fill(255, 0, 0)
                if (value != 0) {
                    rect(this.X1 + end_index * x_width, this.Y1 + start_index * y_width, x_width, y_width)
                }
            }
        }
    }

}