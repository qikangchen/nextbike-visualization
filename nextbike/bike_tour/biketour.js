class BikeTour{


    constructor(x1, y1, x2, y2, beats_per_cycle){
        this.beats_per_cycle = beats_per_cycle

        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

        this.dx = x2-x1
        this.dy = y2-y1

        this.current_x1 = x1;
        this.current_y1 = y1;
        this.current_x2 = x1;
        this.current_y2 = y1;
    }

    move() {
        this.current_x2 += this.dx * (1/this.beats_per_cycle);
        this.current_y2 += this.dy * (1/this.beats_per_cycle);
    }
}