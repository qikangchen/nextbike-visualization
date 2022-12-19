class KiezeDrawer{

    SCALING = 700
    X_Y_RATIO = 1.5
    kieze = []

    constructor(kieze, kieze_centroids, font){
        this.kieze = kieze
        this.kieze_centroids = kieze_centroids
        this.font = font
    }

    draw(){
        this.__draw_kieze()

        this.__draw_kiez_numbers()
    }

    __draw_kieze() {
        stroke(50)
        strokeWeight(2)
        fill(200)

        for (let j = 0; j < 23; j++) {
            this.__draw_kiez(this.kieze[j])
        }
    }

    __draw_kiez(kiez){
        beginShape()
        for(let i = 0; i < kiez['lat'].length; i++){
            let x = kiez['lng'][i]
            let y = kiez['lat'][i]

            vertex(x *this.SCALING * this.X_Y_RATIO, y*this.SCALING)
        }
        endShape(CLOSE)
    }

    __draw_kiez_numbers() {
        textFont(this.font)
        textAlign(CENTER, CENTER)
        fill(0)
        strokeWeight(0)
        textSize(25)

        for (let i = 0; i < 23; i++) {
            let centroid = this.kieze_centroids[i]
            let x = centroid['x']
            let y = centroid['y']

            text(i, x * this.SCALING * this.X_Y_RATIO, y * this.SCALING)
        }
    }
    
}