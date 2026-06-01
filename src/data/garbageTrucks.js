const garbageTrucks = [
  {
    id: 'front-loader',
    name: 'Front Loader',
    emoji: '🚛',
    color: '#9fd3c7',
    description: 'A truck that picks up bins from the front.',
    action: 'tip',
    buttonText: 'Lift Bin',
    sound: 'bin',
    fact: 'Front loaders use arms to lift bins up.',
  },
  {
    id: 'side-loader',
    name: 'Side Loader',
    emoji: '🟩',
    color: '#f2d479',
    description: 'A truck that picks up bins from the side.',
    action: 'tip',
    buttonText: 'Raise Bin',
    sound: 'bin',
    fact: 'Side loaders sweep bins from the curb side.',
  },
  {
    id: 'rear-loader',
    name: 'Rear Loader',
    emoji: '⬅️',
    color: '#ffd6a5',
    description: 'A truck that fills from the back.',
    action: 'tip',
    buttonText: 'Fill Bin',
    sound: 'bin',
    fact: 'Rear loaders pull trash into a hopper at the back.',
  },
];

export default garbageTrucks;
