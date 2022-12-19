class ClockDrawer{

    constructor(font, heartbeat){
        this.font = font
        this.heartbeat = heartbeat
    }
    
    draw(){
        this.__drawClock()
        this.__drawAmPm()
    }

    __drawClock(){
        stroke(255);

        let minute = this.heartbeat.getDatetime().getMinutes()
        let hour = this.heartbeat.getDatetime().getHours()

        let width = 200
        let height = 200
        let radius = min(width, height) / 2;
        let minutesRadius = radius * 0.7;
        let hoursRadius = radius * 0.6;
        let clockDiameter = radius * 1.7;

        let cx = width / 2;
        let cy = height / 2;

        noStroke();
        fill(150);
        ellipse(cx, cy, clockDiameter + 15, clockDiameter + 15);
        fill(200);
        ellipse(cx, cy, clockDiameter, clockDiameter);

        let m = map(minute + norm(0, 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
        let h = map(hour + norm(minute, 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

        // Draw the hands of the clock
        stroke(100);
        strokeWeight(1.5);
        line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
        strokeWeight(3);
        line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
    }

    __drawAmPm(){
        translate(-70, 0)

        stroke(200)
        fill(200)
        textFont(this.font)
        textAlign(LEFT)
        textSize(32)
        text('am' , 0, 60)
        text('pm' , 0, 130)

        let x = 55
        if(this.__isAm()){
            fill(255, 0, 0)
        }else{
            fill(200)
        }
        rect(x, 20, 10, 80)

        if(!this.__isAm()){
            fill(255, 0, 0)
        }else{
            fill(150)
        }
        rect(x, 100, 10, 80)
        
        translate(70, 0)
    }

    __isAm(){
        return this.heartbeat.getDatetime().getHours() <= 12
    }

}