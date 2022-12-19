class GraphSkeleton{

    COLOR = (200, 200, 200)

    constructor(x1, y1, x2, y2, day_indexes, font){
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2

        this.font = font

        this.days = [...new Set(Object.values(day_indexes))]
    }

    draw(){
        stroke(this.COLOR)
        fill(this.COLOR)
        strokeWeight(2)

        textAlign(LEFT)
        textFont(this.font)
        textSize(25)
        text('activity', this.x1-40, this.y1-25)
        text('day', this.x2+10, this.y2+8)
        for(let i=1; i<this.days.length; i++){
            let day = this.days[i] + 1
            text(day, this.x1 + 10 + (i-1)*104, this.y2+25)
        }

        this.draw_scales() 
        this.draw_triangle_up(this.x1, this.y1, 10)
        this.draw_triangle_right(this.x2, this.y2, 10)
    }

    draw_scales() {
        line(this.x1, this.y2, this.x2, this.y2) // x scale
        line(this.x1, this.y1, this.x1, this.y2) // y scale
    }

    draw_triangle_up(x, y, width){
        triangle(
            x, y,
            x-width/2, y+width,
            x+width/2, y+width
        )
    }

    draw_triangle_right(x, y, width){
        triangle(
            x, y,
            x-width, y-width/2,
            x-width, y+width/2
        )
    }


}