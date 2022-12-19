class HeartBeat{

    BEATS_PER_CYCLE = 5

    beat_index = 0
    cycle_index = 0

    constructor(ts_indexes){
        this.ts_indexes = ts_indexes
    }

    beat(){
        if(this.beat_index == this.BEATS_PER_CYCLE){
            this.beat_index = 0
            this.cycle_index++
        }else{
            this.beat_index++
        }
        
        if(this.cycle_index == Object.keys(this.ts_indexes).length){
            this.cycle_index = 0
        }
    }

    getBeatIndex(){
        return this.beat_index
    }

    getCycleIndex(){
        return this.cycle_index
    }

    getTimestamp(){
        return this.ts_indexes[this.cycle_index]
    }

    getDatetime(){
        let ts = this.ts_indexes[this.cycle_index]
        return new Date(ts*1)
    }
}