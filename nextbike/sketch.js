let data = {}
let FPS = 60

let heartbeat

let kieze_drawer
let bike_tour_drawer
let clock_drawer
let activity_graph_drawer
let capturer

function preload(){
  data['ts_indexes'] = loadJSON('data/freq30_indexes.json')
  data['day_indexes'] = loadJSON('data/freq30_day_indexes.json')

  data['kieze'] = loadJSON('data/kieze.json')
  data['kieze_centroids'] = loadJSON('data/kieze_centroids.json')

  data['bike_tour_data'] = loadJSON('data/bike_tours_freq30minutes.json')
  data['bike_tour_activity'] = loadJSON('data/bike_tours_freq30minutes_activity.json')
  data['bike_tour_heatmap'] = loadJSON('data/bike_tours_freq30minutes_heatmap.json')
  data['bike_tour_heatmap_cumsum'] = loadJSON('data/bike_tours_freq30minutes_heatmap_cumsum.json')

  data['font'] = loadFont('font/SourceSansPro-Regular.ttf')
}

function setup() {
  frameRate(FPS)
  createCanvas(1200, 2100);


  heartbeat = new HeartBeat(data['ts_indexes'])

  kieze_drawer = new KiezeDrawer(data['kieze'], data['kieze_centroids'], data['font'])
  bike_tour_drawer = new BikeTourDrawer(data['bike_tour_data'], heartbeat)
  clock_drawer = new ClockDrawer(data['font'], heartbeat)
  day_drawer = new DayDrawer(data['font'], data['day_indexes'], heartbeat)
  activity_graph_drawer = new ActivityGraphDrawer(data['bike_tour_activity'], data['ts_indexes'], data['day_indexes'], heartbeat, data['font'])
  heatmap_drawer = new HeatmapDrawer(data['bike_tour_heatmap'], data['bike_tour_heatmap_cumsum'], heartbeat, data['font'])

  capturer = new CCapture({ format: 'png', framerate: FPS }) 

  // noLoop()
}

function draw() {
  // if(heartbeat.getCycleIndex() == 0 && heartbeat.getBeatIndex() == 0){
  //   print("Start!")
  //   capturer.start()
  // }

  // if(heartbeat.getCycleIndex() == 453 && heartbeat.getBeatIndex() == 0){
  //   noLoop()
  //   print("End!")
  //   capturer.stop()
  //   capturer.save()
  //   return
  // }


  background(100)

  translate(90, 30)
  kieze_drawer.draw()
  bike_tour_drawer.draw()
  clock_drawer.draw()
  day_drawer.draw()
  activity_graph_drawer.draw()
  heatmap_drawer.draw()

  heartbeat.beat()
  // capturer.capture(document.getElementById('defaultCanvas0'));
}
