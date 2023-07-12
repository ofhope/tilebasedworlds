const COLOR_FOREST = '#042940'
const COLOR_GRASS = '#9FC131'

const MAP_DICTIONARY = {
  0: {
    color: COLOR_GRASS
  },
  1: {
    color: COLOR_FOREST
  },
}

const MAP = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1]
];

const drawTile = (context, color, x, y) => {
  context.fillStyle = color;
  context.fillRect(x * 50, y * 50, 50, 50);
}

const renderMap = (context, map) => {
  const mapWidth = map[0].length
  const mapHeight = map.length
  for (let y = 0; y < mapHeight; ++y) {
    for (let x = 0; x < mapWidth; ++x) {
      const tileNumber = map[y][x]
      const tile = MAP_DICTIONARY[tileNumber]
      drawTile(context, tile.color, x, y)
    }
  }
}

const createCanvas = (width = 400, height = 400, id = 'game-canvas') => {
  const c = document.createElement('canvas')
  c.setAttribute('id', id)
  c.setAttribute('width', width)
  c.setAttribute('height', height)
  document.body.appendChild(c)
  return c.getContext("2d");
}

const gameContext = createCanvas()
renderMap(gameContext, MAP)
