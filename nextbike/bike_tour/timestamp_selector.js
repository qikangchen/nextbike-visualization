class TimestampSelector{

    constructor(data){
        this.data = data
    }

    on(timestamp){
        let datum = this.data[timestamp] 
        return datum
    }
    
}