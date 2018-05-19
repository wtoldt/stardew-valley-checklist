export interface Item {
  id: number;
  name: string;
  source: string;
  seasons: string[];
  skills: string[];
  bundles: number[];
  checked: boolean;
}

export interface Bundle {
  id: number;
  name: string;
  room: number;
  reward: string;
  items_required: number;
}

export interface Room {
  id: number;
  name: string;
  reward: string;
}

export interface Season {
  id: string;
  name: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface DataBase {
  items: Item[];
  bundles: Bundle[];
  rooms: Room[];
  seasons: Season[];
  skills: Skill[];
}
export const db: DataBase = {
  'items': [
    {
      'id': 0,
      'name': 'Wild Horseradish',
      'source': 'Foraging during Spring.',
      'seasons': [
        'spring'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        0
      ],
      'checked': false
    },
    {
      'id': 1,
      'name': 'Daffodil',
      'source': 'Foraging during Spring. Buy from Pierre\'s Shop at the Flower Dance.',
      'seasons': [
        'spring'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        0
      ],
      'checked': false
    },
    {
      'id': 2,
      'name': 'Leek',
      'source': 'Foraging during Spring.',
      'seasons': [
        'spring'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        0
      ],
      'checked': false
    },
    {
      'id': 3,
      'name': 'Dandelion',
      'source': 'Foraging during Spring. Buy from Pierre\'s Shop at the Flower Dance.',
      'seasons': [
        'spring'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        0
      ],
      'checked': false
    },
    {
      'id': 4,
      'name': 'Grape',
      'source': 'Foraging during Summer.',
      'seasons': [
        'summer',
        'fall'
      ],
      'skills': [
        'foraging',
        'farming'
      ],
      'bundles': [
        1
      ],
      'checked': false
    },
    {
      'id': 5,
      'name': 'Spice Berry',
      'source': 'Foraging during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        1
      ],
      'checked': false
    },
    {
      'id': 6,
      'name': 'Sweet Pea',
      'source': 'Foraging during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        1
      ],
      'checked': false
    },
    {
      'id': 7,
      'name': 'Common Mushroom',
      'source': 'Foraging during Fall Or if you have the mushroom in your cave.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        2
      ],
      'checked': false
    },
    {
      'id': 8,
      'name': 'Wild Plum',
      'source': 'Foraging during Fall.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        2
      ],
      'checked': false
    },
    {
      'id': 9,
      'name': 'Hazelnut',
      'source': 'Foraging during Fall.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        2
      ],
      'checked': false
    },
    {
      'id': 10,
      'name': 'Blackberry',
      'source': 'Foraging during Fall.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        2
      ],
      'checked': false
    },
    {
      'id': 11,
      'name': 'Winter Root',
      'source': 'Foraging during Winter or dropped by slimes on 41-79 Mines levels.',
      'seasons': [
        'winter',
        'spring',
        'summer',
        'fall'
      ],
      'skills': [
        'foraging',
        'combat'
      ],
      'bundles': [
        3
      ],
      'checked': false
    },
    {
      'id': 12,
      'name': 'Crystal Fruit',
      'source': 'Foraging during Winter or dropped by coal sprites on 41-79 Mines levels.',
      'seasons': [
        'winter',
        'spring',
        'summer',
        'fall'
      ],
      'skills': [
        'foraging',
        'combat'
      ],
      'bundles': [
        3
      ],
      'checked': false
    },
    {
      'id': 13,
      'name': 'Snow Yam',
      'source': 'Foraging during Winter (Using a Hoe outside the farm).',
      'seasons': [
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        3
      ],
      'checked': false
    },
    {
      'id': 14,
      'name': 'Crocus',
      'source': 'Foraging during Winter.',
      'seasons': [
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        3
      ],
      'checked': false
    },
    {
      'id': 15,
      'name': 'Wood (99)',
      'source': 'Chopping trees or logs using an axe.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        4
      ],
      'checked': false
    },
    {
      'id': 16,
      'name': 'Stone (99)',
      'source': 'Smashing stones with a pickaxe.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        4
      ],
      'checked': false
    },
    {
      'id': 17,
      'name': 'Hardwood (10)',
      'source': 'Chopping large stumps with an upgraded axe. Also in crates in the Mines',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging',
        'mining'
      ],
      'bundles': [
        4
      ],
      'checked': false
    },
    {
      'id': 18,
      'name': 'Coconut',
      'source': 'Found in the desert.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        5
      ],
      'checked': false
    },
    {
      'id': 19,
      'name': 'Cactus Fruit',
      'source': 'Found in the desert.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        5
      ],
      'checked': false
    },
    {
      'id': 20,
      'name': 'Cave Carrot',
      'source': 'In boxes inside the mines or using the hoe on soil spots in the Mines.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        5
      ],
      'checked': false
    },
    {
      'id': 21,
      'name': 'Red Mushroom',
      'source': 'Can be found in the mines or in the farm cave if you selected the mushroom perk.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging',
        'mining'
      ],
      'bundles': [
        5
      ],
      'checked': false
    },
    {
      'id': 22,
      'name': 'Purple Mushroom',
      'source': 'Can be found in the mines or in the farm cave if you selected the mushroom perk.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging',
        'mining'
      ],
      'bundles': [
        5
      ],
      'checked': false
    },
    {
      'id': 23,
      'name': 'Maple Syrup',
      'source': 'Harvested from maple trees using a Tapper.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        5
      ],
      'checked': false
    },
    {
      'id': 24,
      'name': 'Oak Resin',
      'source': 'Harvested from oak trees using a Tapper.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        5
      ],
      'checked': false
    },
    {
      'id': 25,
      'name': 'Pine Tar',
      'source': 'Harvested from pine trees using a Tapper.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        5
      ],
      'checked': false
    },
    {
      'id': 26,
      'name': 'Morel',
      'source': 'In the farm cave if you selected the mushroom perk',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        5
      ],
      'checked': false
    },
    {
      'id': 26,
      'name': 'Parsnip',
      'source': 'Crops during Spring.',
      'seasons': [
        'spring'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        6
      ],
      'checked': false
    },
    {
      'id': 28,
      'name': 'Green Bean',
      'source': 'Crops during Spring.',
      'seasons': [
        'spring'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        6
      ],
      'checked': false
    },
    {
      'id': 29,
      'name': 'Cauliflower',
      'source': 'Crops during Spring.',
      'seasons': [
        'spring'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        6
      ],
      'checked': false
    },
    {
      'id': 30,
      'name': 'Potato',
      'source': 'Crops during Spring.',
      'seasons': [
        'spring'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        6
      ],
      'checked': false
    },
    {
      'id': 31,
      'name': 'Tomato',
      'source': 'Crops during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        7
      ],
      'checked': false
    },
    {
      'id': 32,
      'name': 'Hot Pepper',
      'source': 'Crops during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        7
      ],
      'checked': false
    },
    {
      'id': 33,
      'name': 'Blueberry',
      'source': 'Crops during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        7
      ],
      'checked': false
    },
    {
      'id': 34,
      'name': 'Melon',
      'source': 'Crops during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        7
      ],
      'checked': false
    },
    {
      'id': 35,
      'name': 'Corn',
      'source': 'Crops during Summer and Fall.',
      'seasons': [
        'summer',
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        8
      ],
      'checked': false
    },
    {
      'id': 36,
      'name': 'Eggplant',
      'source': 'Crops during Fall.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        8
      ],
      'checked': false
    },
    {
      'id': 37,
      'name': 'Pumpkin',
      'source': 'Crops during Fall.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        8
      ],
      'checked': false
    },
    {
      'id': 38,
      'name': 'Yam',
      'source': 'Crops during Fall.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        8
      ],
      'checked': false
    },
    {
      'id': 39,
      'name': 'Parsnip (Gold Star) (5)',
      'source': 'Crops during Spring.',
      'seasons': [
        'spring'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        9
      ],
      'checked': false
    },
    {
      'id': 40,
      'name': 'Melon (Gold Star) (5)',
      'source': 'Crops during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        9
      ],
      'checked': false
    },
    {
      'id': 41,
      'name': 'Pumpkin (Gold Star) (5)',
      'source': 'Crops during Fall.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        9
      ],
      'checked': false
    },
    {
      'id': 42,
      'name': 'Corn (Gold Star) (5)',
      'source': 'Crops during Summer and Fall.',
      'seasons': [
        'summer',
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        9
      ],
      'checked': false
    },
    {
      'id': 43,
      'name': 'Milk (Large)',
      'source': 'Cows',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        10
      ],
      'checked': false
    },
    {
      'id': 44,
      'name': 'Egg (Large, Brown)',
      'source': 'Chickens',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        10
      ],
      'checked': false
    },
    {
      'id': 45,
      'name': 'Egg (Large, White)',
      'source': 'Chickens',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        10
      ],
      'checked': false
    },
    {
      'id': 46,
      'name': 'Goat Milk (Large)',
      'source': 'Goats',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        10
      ],
      'checked': false
    },
    {
      'id': 47,
      'name': 'Wool',
      'source': 'Sheep, Rabbits',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        10
      ],
      'checked': false
    },
    {
      'id': 48,
      'name': 'Duck Egg',
      'source': 'Ducks',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        10
      ],
      'checked': false
    },
    {
      'id': 49,
      'name': 'Truffle Oil',
      'source': 'Made from Truffles. Requires Oil Maker',
      'seasons': [
        'spring',
        'summer',
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 50,
      'name': 'Cloth',
      'source': 'Made from Wool. Requires Loom. Can also be rarely obtained by Recycling Soggy Newspaper.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming',
        'foraging'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 51,
      'name': 'Goat Cheese',
      'source': 'Made from Goat Milk. Requires Cheese Press.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 52,
      'name': 'Cheese',
      'source': 'Made from Cow Milk. Requires Cheese Press',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 53,
      'name': 'Honey',
      'source': 'Produced by Bees. Requires Beehive.',
      'seasons': [
        'spring',
        'summer',
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 54,
      'name': 'Jelly',
      'source': 'Made from any Fruit. Requires Preserves Jar.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming',
        'foraging'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 55,
      'name': 'Apple',
      'source': 'Gathered from Apple Trees during Fall. Fodder Bundle requires 3.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 56,
      'name': 'Apricot',
      'source': 'Gathered from Apricot Trees during Spring.',
      'seasons': [
        'spring'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 57,
      'name': 'Orange',
      'source': 'Gathered from Orange Trees during Summer or found in farm cave if fruit perk selected.',
      'seasons': [
        'summer',
        'spring',
        'fall',
        'winter'
      ],
      'skills': [
        'farming',
        'foraging'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 58,
      'name': 'Peach',
      'source': 'Gathered from Peach Trees during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 59,
      'name': 'Pomegranate',
      'source': 'Gathered from Pomegranate Trees during Fall.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 60,
      'name': 'Cherry',
      'source': 'Gathered from Cherry Trees during Spring or found in farm cave if fruit perk selected.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming',
        'foraging'
      ],
      'bundles': [
        11
      ],
      'checked': false
    },
    {
      'id': 61,
      'name': 'Sunfish',
      'source': 'Found in Rivers, Daytime, Spring, and Summer.',
      'seasons': [
        'spring',
        'summer'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        12
      ],
      'checked': false
    },
    {
      'id': 62,
      'name': 'Catfish',
      'source': 'Found in Rivers, Anytime, Spring and Fall. Only when raining.',
      'seasons': [
        'spring',
        'fall'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        12
      ],
      'checked': false
    },
    {
      'id': 63,
      'name': 'Shad',
      'source': 'Found in Rivers, Daytime, Spring, Summer, and Fall. Only when raining.',
      'seasons': [
        'spring',
        'summer',
        'fall'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        12
      ],
      'checked': false
    },
    {
      'id': 64,
      'name': 'Tiger Trout',
      'source': 'Found in Rivers, Daytime (Early afternoon), Fall and Winter.',
      'seasons': [
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        12
      ],
      'checked': false
    },
    {
      'id': 65,
      'name': 'Largemouth Bass',
      'source': 'Found in Lakes, Daytime, All Seasons.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        13
      ],
      'checked': false
    },
    {
      'id': 66,
      'name': 'Carp',
      'source': 'Found in Lakes, Anytime, All Seasons.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        13
      ],
      'checked': false
    },
    {
      'id': 67,
      'name': 'Bullhead',
      'source': 'Found in Lakes, Anytime, All Seasons.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        13
      ],
      'checked': false
    },
    {
      'id': 68,
      'name': 'Sturgeon',
      'source': 'Found in Lakes, Daytime, Summer and Winter.',
      'seasons': [
        'summer',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        13
      ],
      'checked': false
    },
    {
      'id': 69,
      'name': 'Sardine',
      'source': 'Found in the Ocean, Daytime, Spring, Fall, and Winter.',
      'seasons': [
        'spring',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        14
      ],
      'checked': false
    },
    {
      'id': 70,
      'name': 'Tuna',
      'source': 'Found in the Ocean, Daytime, Summer and Winter.',
      'seasons': [
        'summer',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        14
      ],
      'checked': false
    },
    {
      'id': 71,
      'name': 'Red Snapper',
      'source': 'Found in the Ocean, Daytime, Summer and Fall. Only when raining.',
      'seasons': [
        'summer',
        'fall'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        14
      ],
      'checked': false
    },
    {
      'id': 72,
      'name': 'Tilapia',
      'source': 'Found in the Ocean, Daytime, Summer and Fall.',
      'seasons': [
        'summer',
        'fall'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        14
      ],
      'checked': false
    },
    {
      'id': 73,
      'name': 'Walleye',
      'source': 'Found in Rivers, Nighttime, Fall and Winter. Only when raining.',
      'seasons': [
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        15
      ],
      'checked': false
    },
    {
      'id': 74,
      'name': 'Bream',
      'source': 'Found in Rivers, Nighttime, All Seasons.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        15
      ],
      'checked': false
    },
    {
      'id': 75,
      'name': 'Eel',
      'source': 'Found in the Ocean, Nighttime, Spring or Fall. Only when raining.',
      'seasons': [
        'spring',
        'fall'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        15
      ],
      'checked': false
    },
    {
      'id': 76,
      'name': 'Lobster',
      'source': 'Gathered from Crab Pots.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        16
      ],
      'checked': false
    },
    {
      'id': 77,
      'name': 'Crayfish',
      'source': 'Gathered from Crab Pot in rivers during any season.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        16
      ],
      'checked': false
    },
    {
      'id': 78,
      'name': 'Crab',
      'source': 'Gathered from Crab Pots. Also drops from killing hermit crabs in The Mines.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing',
        'combat'
      ],
      'bundles': [
        16
      ],
      'checked': false
    },
    {
      'id': 79,
      'name': 'Cockle',
      'source': 'Gathered from Crab Pots. Can be foraged from areas with sand.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing',
        'foraging'
      ],
      'bundles': [
        16
      ],
      'checked': false
    },
    {
      'id': 80,
      'name': 'Mussel',
      'source': 'Gathered from Crab Pots. Can be foraged from areas with sand.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing',
        'foraging'
      ],
      'bundles': [
        16
      ],
      'checked': false
    },
    {
      'id': 81,
      'name': 'Shrimp',
      'source': 'Gathered from Crab Pots.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        16
      ],
      'checked': false
    },
    {
      'id': 82,
      'name': 'Snail',
      'source': 'Gathered from Crab Pots.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        16
      ],
      'checked': false
    },
    {
      'id': 83,
      'name': 'Periwinkle',
      'source': 'Gathered from Crab Pots.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        16
      ],
      'checked': false
    },
    {
      'id': 84,
      'name': 'Oyster',
      'source': 'Gathered from Crab Pots. Can be foraged from areas with sand.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing',
        'foraging'
      ],
      'bundles': [
        16
      ],
      'checked': false
    },
    {
      'id': 85,
      'name': 'Clam',
      'source': 'Gathered from Crab Pots. Can be foraged from areas with sand.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing',
        'foraging'
      ],
      'bundles': [
        16
      ],
      'checked': false
    },
    {
      'id': 86,
      'name': 'Pufferfish',
      'source': 'Found in the Ocean, Early Afternoon, Summer. May also be purchased from the Traveling Cart.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        17
      ],
      'checked': false
    },
    {
      'id': 87,
      'name': 'Ghostfish',
      'source': 'Found in ponds in The Mines, Anytime, All Seasons. May also be dropped by Ghosts.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing',
        'combat'
      ],
      'bundles': [
        17
      ],
      'checked': false
    },
    {
      'id': 88,
      'name': 'Sandfish',
      'source': 'Found in the pond at Calico Desert. May also be purchased from the Traveling Cart.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing',
        'combat'
      ],
      'bundles': [
        17
      ],
      'checked': false
    },
    {
      'id': 89,
      'name': 'Woodskip',
      'source': 'Found in the Secret Woods, Anytime, All Seasons. May also be purchased from the Traveling Cart.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        17
      ],
      'checked': false
    },
    {
      'id': 90,
      'name': 'Copper Bar',
      'source': 'Smelting copper ore in the furnace.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        18
      ],
      'checked': false
    },
    {
      'id': 91,
      'name': 'Iron Bar',
      'source': 'Smelting iron ore in the furnace.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        18
      ],
      'checked': false
    },
    {
      'id': 92,
      'name': 'Gold Bar',
      'source': 'Smelting gold ore in the furnace.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        18
      ],
      'checked': false
    },
    {
      'id': 93,
      'name': 'Quartz',
      'source': 'Found on all levels of The Mines and in geodes.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        19
      ],
      'checked': false
    },
    {
      'id': 94,
      'name': 'Earth Crystal',
      'source': 'Found on levels 1 - 39 of The Mines and in geodes.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        19
      ],
      'checked': false
    },
    {
      'id': 95,
      'name': 'Frozen Tear',
      'source': 'Found on levels 40 - 79 of The Mines and in geodes.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        19
      ],
      'checked': false
    },
    {
      'id': 96,
      'name': 'Fire Quartz',
      'source': 'Found on levels 80 - 120 of The Mines and in magma geodes.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        19
      ],
      'checked': false
    },
    {
      'id': 97,
      'name': 'Slime (99)',
      'source': 'Dropped by Slimes in The Mines.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'combat'
      ],
      'bundles': [
        20
      ],
      'checked': false
    },
    {
      'id': 98,
      'name': 'Bat Wing (10)',
      'source': 'Dropped by Bats in The Mines.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'combat'
      ],
      'bundles': [
        20
      ],
      'checked': false
    },
    {
      'id': 99,
      'name': 'Solar Essence',
      'source': 'Dropped by Ghosts in The Mines.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'combat'
      ],
      'bundles': [
        20
      ],
      'checked': false
    },
    {
      'id': 100,
      'name': 'Void Essence',
      'source': 'Dropped by Shadow Brutes in The Mines.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'combat'
      ],
      'bundles': [
        20
      ],
      'checked': false
    },
    {
      'id': 101,
      'name': 'Fiddlehead Fern',
      'source': 'Found in the Secret Woods during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        21
      ],
      'checked': false
    },
    {
      'id': 102,
      'name': 'Truffle',
      'source': 'Found by pigs while grazing outdoors.',
      'seasons': [
        'spring',
        'summer',
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        21
      ],
      'checked': false
    },
    {
      'id': 103,
      'name': 'Poppy',
      'source': 'Crops during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        21
      ],
      'checked': false
    },
    {
      'id': 104,
      'name': 'Maki Roll',
      'source': 'Acquired by Cooking. Recipe available from the cooking channel on Summer 21 during odd years.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        21
      ],
      'checked': false
    },
    {
      'id': 105,
      'name': 'Fried Egg',
      'source': 'Acquired by Cooking.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        21
      ],
      'checked': false
    },
    {
      'id': 106,
      'name': 'Sea Urchin',
      'source': 'Can be foraged on the far right side of the beach, accessible after using 300 wood to fix the bridge.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        22
      ],
      'checked': false
    },
    {
      'id': 107,
      'name': 'Sunflower',
      'source': 'Crops during Summer and Fall.',
      'seasons': [
        'summer',
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        22
      ],
      'checked': false
    },
    {
      'id': 108,
      'name': 'Duck Feather',
      'source': 'Produced by ducks in the coop (similar to how chickens and ducks lay eggs)',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        22
      ],
      'checked': false
    },
    {
      'id': 109,
      'name': 'Aquamarine',
      'source': 'Can be found in stones and boxes in The Mines.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        22
      ],
      'checked': false
    },
    {
      'id': 110,
      'name': 'Red Cabbage',
      // tslint:disable-next-line:max-line-length
      'source': 'Crops during the Summer. Seeds can be purchased from Pierre\'s Year 2 and onward. Can be purchased from the Traveling Cart',
      'seasons': [
        'summer'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        22
      ],
      'checked': false
    },
    {
      'id': 111,
      'name': 'Nautilus Shell',
      'source': 'Found by foraging from the beach in the Winter.',
      'seasons': [
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        23
      ],
      'checked': false
    },
    {
      'id': 112,
      'name': 'Chub',
      'source': 'Can be found in the mountain lake and river during all seasons.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'fishing'
      ],
      'bundles': [
        23
      ],
      'checked': false
    },
    {
      'id': 113,
      'name': 'Frozen Geode',
      'source': 'Found on levels 40-79 of The Mines.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'mining'
      ],
      'bundles': [
        23
      ],
      'checked': false
    },
    {
      'id': 114,
      'name': 'Wheat (10)',
      'source': 'Crops during Summer.',
      'seasons': [
        'summer'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        24
      ],
      'checked': false
    },
    {
      'id': 115,
      'name': 'Hay (10)',
      'source': 'Purchased from Marnie at The Ranch or created by using the sickle on grass once you have a silo.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        24
      ],
      'checked': false
    },
    {
      'id': 117,
      'name': 'Wine',
      'source': 'Produced by putting most fruits into a keg.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming',
        'foraging'
      ],
      'bundles': [
        25
      ],
      'checked': false
    },
    {
      'id': 118,
      'name': 'Rabbit\'s Foot',
      'source': 'Dropped by Rabbits in the Coop, also dropped by a Serpent in Skull Cavern (0.8%).',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming',
        'combat'
      ],
      'bundles': [
        25
      ],
      'checked': false
    },
    {
      'id': 119,
      'name': '2,500 Gold',
      'source': 'Collect 2,500 Gold and turn in.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming',
        'mining',
        'foraging',
        'fishing',
        'combat'
      ],
      'bundles': [
        26
      ],
      'checked': false
    },
    {
      'id': 120,
      'name': '5,000 Gold',
      'source': 'Collect 5,000 Gold and turn in.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming',
        'mining',
        'foraging',
        'fishing',
        'combat'
      ],
      'bundles': [
        27
      ],
      'checked': false
    },
    {
      'id': 121,
      'name': '10,000 Gold',
      'source': 'Collect 10,000 Gold and turn in.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming',
        'mining',
        'foraging',
        'fishing',
        'combat'
      ],
      'bundles': [
        28
      ],
      'checked': false
    },
    {
      'id': 122,
      'name': '25,000 Gold',
      'source': 'Collect 25,000 Gold and turn in.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'farming',
        'mining',
        'foraging',
        'fishing',
        'combat'
      ],
      'bundles': [
        29
      ],
      'checked': false
    },
    {
      'id': 123,
      'name': 'Wood (99)',
      'source': 'Chopping trees or logs using an axe.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        4
      ],
      'checked': false
    },
    {
      'id': 124,
      'name': 'Red Mushroom',
      'source': 'Can be found in the mines or in the farm cave if you selected the mushroom perk.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging',
        'mining'
      ],
      'bundles': [
        22
      ],
      'checked': false
    },
    {
      'id': 125,
      'name': 'Purple Mushroom',
      'source': 'Can be found in the mines or in the farm cave if you selected the mushroom perk.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging',
        'mining'
      ],
      'bundles': [
        23
      ],
      'checked': false
    },
    {
      'id': 126,
      'name': 'Maple Syrup',
      'source': 'Harvested from maple trees using a Tapper.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        21
      ],
      'checked': false
    },
    {
      'id': 127,
      'name': 'Oak Resin',
      'source': 'Harvested from oak trees using a Tapper.',
      'seasons': [
        'spring',
        'summer',
        'fall',
        'winter'
      ],
      'skills': [
        'foraging'
      ],
      'bundles': [
        25
      ],
      'checked': false
    },
    {
      'id': 128,
      'name': 'Apple',
      'source': 'Gathered from Apple Trees during Fall. Fodder Bundle requires 3.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        24
      ],
      'checked': false
    },
    {
      'id': 129,
      'name': 'Pomegranate',
      'source': 'Gathered from Pomegranate Trees during Fall.',
      'seasons': [
        'fall'
      ],
      'skills': [
        'farming'
      ],
      'bundles': [
        25
      ],
      'checked': false
    },
  ],
  'bundles': [
    {
      'id': 0,
      'name': 'Spring Foraging Bundle',
      'room': 0,
      'reward': 'Spring Seeds (30)',
      'items_required': 4
    },
    {
      'id': 1,
      'name': 'Summer Foraging Bundle',
      'room': 0,
      'reward': 'Summer Seeds (30)',
      'items_required': 3
    },
    {
      'id': 2,
      'name': 'Fall Foraging Bundle',
      'room': 0,
      'reward': 'Fall Seeds (30)',
      'items_required': 4
    },
    {
      'id': 3,
      'name': 'Winter Foraging Bundle',
      'room': 0,
      'reward': 'Winter Seeds (30)',
      'items_required': 4
    },
    {
      'id': 4,
      'name': 'Construction Bundle',
      'room': 0,
      'reward': 'Charcoal Kiln',
      'items_required': 4
    },
    {
      'id': 5,
      'name': 'Exotic Foraging Bundle',
      'room': 0,
      'reward': 'Autumn\'s Bounty (5)',
      'items_required': 5
    },
    {
      'id': 6,
      'name': 'Spring Crops Bundle',
      'room': 1,
      'reward': 'Speed-Gro (20)',
      'items_required': 4
    },
    {
      'id': 7,
      'name': 'Summer Crops Bundle',
      'room': 1,
      'reward': 'Quality Sprinkler',
      'items_required': 4
    },
    {
      'id': 8,
      'name': 'Fall Crops Bundle',
      'room': 1,
      'reward': 'Bee House',
      'items_required': 4
    },
    {
      'id': 9,
      'name': 'Quality Crops Bundle',
      'room': 1,
      'reward': 'Preserves Jar',
      'items_required': 3
    },
    {
      'id': 10,
      'name': 'Animal Bundle',
      'room': 1,
      'reward': 'Cheese Press',
      'items_required': 5
    },
    {
      'id': 11,
      'name': 'Artisan Bundle',
      'room': 1,
      'reward': 'Keg',
      'items_required': 6
    },
    {
      'id': 12,
      'name': 'River Fish Bundle',
      'room': 2,
      'reward': 'Bait (30)',
      'items_required': 4
    },
    {
      'id': 13,
      'name': 'Lake Fish Bundle',
      'room': 2,
      'reward': 'Dressed Spinner',
      'items_required': 4
    },
    {
      'id': 14,
      'name': 'Ocean Fish Bundle',
      'room': 2,
      'reward': 'Warp Totem Beach (5)',
      'items_required': 4
    },
    {
      'id': 15,
      'name': 'Night Fishing Bundle',
      'room': 2,
      'reward': 'Small Glow Ring',
      'items_required': 3
    },
    {
      'id': 16,
      'name': 'Crab Pot Bundle',
      'room': 2,
      'reward': 'Crab Pot (3)',
      'items_required': 5
    },
    {
      'id': 17,
      'name': 'Specialty Fish Bundle',
      'room': 2,
      'reward': 'Dish O\' The Sea (5)',
      'items_required': 4
    },
    {
      'id': 18,
      'name': 'Blacksmith\'s Bundle',
      'room': 3,
      'reward': 'Furnace',
      'items_required': 3
    },
    {
      'id': 19,
      'name': 'Geologists\'s Bundle',
      'room': 3,
      'reward': 'Omni Geode (5)',
      'items_required': 4
    },
    {
      'id': 20,
      'name': 'Adventurer\'s Bundle',
      'room': 3,
      'reward': 'Small Magnet Ring',
      'items_required': 2
    },
    {
      'id': 21,
      'name': 'Chef\'s Bundle',
      'room': 4,
      'reward': 'Pink Cake (x3)',
      'items_required': 6
    },
    {
      'id': 22,
      'name': 'Dye Bundle',
      'room': 4,
      'reward': 'Seed Maker',
      'items_required': 6
    },
    {
      'id': 23,
      'name': 'Field Research Bundle',
      'room': 4,
      'reward': 'Recycling Machine',
      'items_required': 4
    },
    {
      'id': 24,
      'name': 'Fodder Bundle',
      'room': 4,
      'reward': 'Heater',
      'items_required': 3
    },
    {
      'id': 25,
      'name': 'Enchanter\'s Bundle',
      'room': 4,
      'reward': 'Gold Bar (5)',
      'items_required': 4
    },
    {
      'id': 26,
      'name': '2,500 Bundle',
      'room': 5,
      'reward': 'Chocolate Cake (3)',
      'items_required': 1
    },
    {
      'id': 27,
      'name': '5,000 Bundle',
      'room': 5,
      'reward': 'Quality Fertilizer (30)',
      'items_required': 1
    },
    {
      'id': 28,
      'name': '10,000 Bundle',
      'room': 5,
      'reward': 'Lightning Rod',
      'items_required': 1
    },
    {
      'id': 29,
      'name': '25,000 Bundle',
      'room': 5,
      'reward': 'Crystalarium',
      'items_required': 1
    }
  ],
  'rooms': [
    {
      'id': 0,
      'name': 'Crafts Room',
      'reward': 'Bridge Repair'
    },
    {
      'id': 1,
      'name': 'Pantry',
      'reward': 'Greenhouse'
    },
    {
      'id': 2,
      'name': 'Fish Tank',
      'reward': 'Glittering Boulder Removed'
    },
    {
      'id': 3,
      'name': 'Boiler Room',
      'reward': 'Minecarts Repaired'
    },
    {
      'id': 4,
      'name': 'Bulletin Board',
      'reward': 'Friendship'
    },
    {
      'id': 5,
      'name': 'Vault',
      'reward': 'Bus Repair'
    }
  ],
  'seasons': [
    {
      'id': 'spring',
      'name': 'Spring'
    },
    {
      'id': 'summer',
      'name': 'Summer'
    },
    {
      'id': 'fall',
      'name': 'Fall'
    },
    {
      'id': 'winter',
      'name': 'Winter'
    }
  ],
  'skills': [
    {
      'id': 'farming',
      'name': 'Farming'
    },
    {
      'id': 'mining',
      'name': 'Mining'
    },
    {
      'id': 'foraging',
      'name': 'Foraging'
    },
    {
      'id': 'fishing',
      'name': 'Fishing'
    },
    {
      'id': 'combat',
      'name': 'Combat'
    }
  ]
};

export const totalItems = db.items.length;

export const bundleMap: Map<number, Bundle> =
  db.bundles.reduce((accum: Map<number, Bundle>, b) => accum.set(b.id, b), new Map<number, Bundle>());

export const roomMap: Map<number, Room> =
  db.rooms.reduce((accum: Map<number, Room>, r) => accum.set(r.id, r), new Map<number, Room>());

export const bundleItemMap: Map<number, Item[]> =
  db.items.reduce((accum: Map<number, Item[]>, item) => {
    const bundleId = item.bundles[0];
    const items = accum.get(bundleId) ? accum.get(bundleId) : [];
    accum.set(bundleId, [...items, item]);
    return accum;
  }, new Map<number, Item[]>());
