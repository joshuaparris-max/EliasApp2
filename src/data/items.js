export const sections = [
  { id: 'garbage', title: 'Garbage Trucks', emoji: '🚛', color: 'green' },
  { id: 'construction', title: 'Construction', emoji: '🏗️', color: 'yellow' },
  { id: 'cars', title: 'Cars', emoji: '🚗', color: 'blue' },
  { id: 'tools', title: 'Tools', emoji: '🧰', color: 'red' },
  { id: 'spin', title: 'Things That Spin', emoji: '⚙️', color: 'purple' },
  { id: 'build', title: 'Build & Fix', emoji: '🛠️', color: 'orange' },
  { id: 'watch', title: 'Watch & Learn', emoji: '🎬', color: 'teal' },
  { id: 'play', title: 'Play Zone', emoji: '🎲', color: 'pink' },
];

export const garbageTrucks = [
  {
    id: 'front-loader',
    name: 'Front Loader',
    emoji: '🚛',
    image: '/media/images/garbage-front-loader.jpg',
    fact: 'Front loader trucks use big arms to lift large bins.',
  },
  {
    id: 'side-loader',
    name: 'Side Loader',
    emoji: '🟩',
    image: '/media/images/garbage-side-loader.jpg',
    fact: 'Side loader trucks can pick up bins from the side of the road.',
  },
  {
    id: 'rear-loader',
    name: 'Rear Loader',
    emoji: '⬅️',
    image: '/media/images/garbage-rear-loader.jpg',
    fact: 'Rear loader trucks are filled from the back.',
  },
  {
    id: 'recycling-truck',
    name: 'Recycling Truck',
    emoji: '♻️',
    image: '/media/images/recycling-truck.jpg',
    fact: 'Recycling trucks collect paper, cardboard, glass, and plastic.',
  },
];

export const constructionMachines = [
  { id: 'excavator', name: 'Excavator', emoji: '🚜', image: '/media/images/excavator.jpg', action: 'dig', fact: 'An excavator has a bucket for digging and scooping.' },
  { id: 'bulldozer', name: 'Bulldozer', emoji: '🚧', image: '/media/images/bulldozer.jpg', action: 'push', fact: 'A bulldozer pushes soil, sand, and rocks.' },
  { id: 'crane', name: 'Crane', emoji: '🏗️', image: '/media/images/crane.jpg', action: 'lift', fact: 'A crane lifts heavy things high into the air.' },
  { id: 'dump-truck', name: 'Dump Truck', emoji: '🛻', image: '/media/images/dump-truck.jpg', action: 'tip', fact: 'A dump truck tips its tray to unload dirt.' },
  { id: 'concrete-mixer', name: 'Concrete Mixer', emoji: '🥣', image: '/media/images/concrete-mixer.jpg', action: 'mix', fact: 'A concrete mixer keeps wet concrete turning.' },
  { id: 'loader', name: 'Loader', emoji: '🟨', image: '/media/images/loader.jpg', action: 'scoop', fact: 'A loader scoops and carries heavy piles.' },
  { id: 'road-roller', name: 'Road Roller', emoji: '🛞', image: '/media/images/road-roller.jpg', action: 'flatten', fact: 'A road roller presses roads smooth and flat.' },
];

export const vehicles = [
  { id: 'family-car', name: 'Family Car', emoji: '🚙', image: '/media/images/family-car.jpg', wheels: 4, sound: 'beep' },
  { id: 'race-car', name: 'Race Car', emoji: '🏎️', image: '/media/images/race-car.jpg', wheels: 4, sound: 'vroom' },
  { id: 'police-car', name: 'Police Car', emoji: '🚓', image: '/media/images/police-car.jpg', wheels: 4, sound: 'woo' },
  { id: 'fire-truck', name: 'Fire Truck', emoji: '🚒', image: '/media/images/fire-truck.jpg', wheels: 6, sound: 'nee naw' },
  { id: 'ambulance', name: 'Ambulance', emoji: '🚑', image: '/media/images/ambulance.jpg', wheels: 4, sound: 'wee oo' },
  { id: 'tractor', name: 'Tractor', emoji: '🚜', image: '/media/images/tractor.jpg', wheels: 4, sound: 'chug' },
  { id: 'ute', name: 'Ute', emoji: '🛻', image: '/media/images/ute.jpg', wheels: 4, sound: 'toot' },
  { id: 'little-truck', name: 'Little Truck', emoji: '🚚', image: '/media/images/little-truck.jpg', wheels: 6, sound: 'rumble' },
];

export const tools = [
  { id: 'screwdriver', name: 'Screwdriver', emoji: '🪛', image: '/media/images/screwdriver.jpg', job: 'turning a pretend screw', fact: 'A screwdriver turns screws round and round.' },
  { id: 'hammer', name: 'Hammer', emoji: '🔨', image: '/media/images/hammer.jpg', job: 'gentle tapping', fact: 'A toy hammer can tap softly with a grown-up nearby.' },
  { id: 'spanner', name: 'Spanner', emoji: '🔧', image: '/media/images/spanner.jpg', job: 'tightening a bolt', fact: 'A spanner helps turn nuts and bolts.' },
  { id: 'drill', name: 'Drill', emoji: '🌀', image: '/media/images/drill.jpg', job: 'making a pretend hole', fact: 'A drill spins a bit. Grown-ups use real drills.' },
  { id: 'tape-measure', name: 'Tape Measure', emoji: '📏', image: '/media/images/tape-measure.jpg', job: 'measuring a block', fact: 'A tape measure shows how long something is.' },
  { id: 'pliers', name: 'Pliers', emoji: '🗜️', image: '/media/images/pliers.jpg', job: 'holding a small part', fact: 'Pliers pinch and hold little parts.' },
];

export const spinners = [
  { id: 'wheels', name: 'Wheels', emoji: '🛞' },
  { id: 'screws', name: 'Screws', emoji: '🪛' },
  { id: 'cement-mixer', name: 'Cement Mixer', emoji: '🥣' },
  { id: 'drill-bit', name: 'Drill Bit', emoji: '🌀' },
  { id: 'fan', name: 'Fan', emoji: '🪭' },
  { id: 'steering-wheel', name: 'Steering Wheel', emoji: '⭕' },
];

// Parents should review all videos before adding them.
export const videos = [
  { id: 'garbage-day', title: 'Garbage Day', category: 'Garbage Trucks', description: 'A safe placeholder for a truck video.', thumbnail: '/media/images/video-garbage.jpg', embedUrl: '' },
  { id: 'excavator-work', title: 'Excavator Work', category: 'Construction', description: 'A safe placeholder for an excavator clip.', thumbnail: '/media/images/video-excavator.jpg', embedUrl: '' },
  { id: 'cars-drive', title: 'Cars Driving', category: 'Cars', description: 'A safe placeholder for vehicle watching.', thumbnail: '/media/images/video-cars.jpg', embedUrl: '' },
  { id: 'tool-time', title: 'Tool Time', category: 'Tools', description: 'A safe placeholder for supervised tool learning.', thumbnail: '/media/images/video-tools.jpg', embedUrl: '' },
  { id: 'things-spin', title: 'Things Spin', category: 'Spin', description: 'A safe placeholder for spinning wheels.', thumbnail: '/media/images/video-spin.jpg', embedUrl: '' },
  { id: 'building-blocks', title: 'Building Blocks', category: 'Build', description: 'A safe placeholder for building play.', thumbnail: '/media/images/video-build.jpg', embedUrl: '' },
];

export const miniGames = [
  { id: 'sound-match', title: 'Match the Sound', prompt: 'Which vehicle says beep?', answer: 'Family Car', emoji: '🔊' },
  { id: 'tool-job', title: 'Tool to Job', prompt: 'Which tool turns the screw?', answer: 'Screwdriver', emoji: '🪛' },
  { id: 'wheel-count', title: 'Count the Wheels', prompt: 'How many wheels are on the race car?', answer: '4', emoji: '🛞' },
  { id: 'yellow-truck', title: 'Find Yellow Truck', prompt: 'Tap the yellow truck.', answer: 'Dump Truck', emoji: '🟨' },
  { id: 'big-small', title: 'Big or Small', prompt: 'Is the crane big or small?', answer: 'Big', emoji: '🏗️' },
  { id: 'road-build', title: 'Build a Road', prompt: 'Tap road pieces to make a road.', answer: 'Road Ready', emoji: '🛣️' },
];

export const fixObjects = [
  { id: 'toy-car', name: 'Toy Car', emoji: '🚗' },
  { id: 'little-truck', name: 'Little Truck', emoji: '🚚' },
  { id: 'toolbox', name: 'Toolbox', emoji: '🧰' },
  { id: 'block-tower', name: 'Block Tower', emoji: '🧱' },
];
