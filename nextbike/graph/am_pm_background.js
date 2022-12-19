class AmPmBackground{

    constructor(ts_indexes){
        this.ts_indexes = ts_indexes

        this.am_pm_arr = this.createAmPmArray()
    }

    createAmPmArray(){
        let is_am_before = this.isAm(0)
        let is_am_currently 

        let start = 0
        let end = 0

        let am_pm_arr = []

        for(let i=1; i<Object.keys(this.ts_indexes).length; i++){
            is_am_currently = this.isAm(i)

            if(is_am_currently != is_am_before){
                am_pm_arr.push(this.createAmPmDict(start, end, is_am_before))
                is_am_before = is_am_currently 
                start = i
            }{
                end = i
            }
        }
        am_pm_arr.push(this.createAmPmDict(start, end, is_am_currently))

        return am_pm_arr
    }

    isAm(index){
        return new Date(this.ts_indexes[index]).getHours()<=12
    }

    createAmPmDict(start, end, am){
        return {
            "start": start,
            "end": end,
            "am": am
        }
    }

    draw(x1, y1, x2, y2, x_scaling){

        let y_delta = y2-y1
        strokeWeight(0)

        for(let i=0; i<this.am_pm_arr.length; i++){
            let am_pm = this.am_pm_arr[i] 
           
            if(am_pm['am']){
                fill(200)
            }else{
                fill(150)
            }

            let rect_width = am_pm['end'] - am_pm['start']
            rect(
                x1 + am_pm['start']*x_scaling, 
                y1,
                x1 + rect_width*x_scaling,
                y_delta
            )
        }

    }

}