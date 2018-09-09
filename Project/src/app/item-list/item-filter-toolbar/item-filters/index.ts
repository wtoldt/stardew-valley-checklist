
export interface ItemSearchFilter {
  hideChecked: boolean;
  nameString: string;
  sourceString: string;
}

export interface ItemSeasonFilter {
  selectedSeasons: string[];
  andOr: boolean; // True = and, false = or
  containsAnyOnly: boolean; // True = any, false = only
}

export interface ItemSkillFilter {
  selectedSkills: string[];
  andOr: boolean; // True = and, false = or
  containsAnyOnly: boolean; // True = any, false = only
}

export interface ItemBundleFilter {
  selectedRoom: number;
  selectedBundles: number[];
  andOr: boolean; // True = and, false = or
  containsAnyOnly: boolean; // True = any, false = only
}

export interface ItemFilters {
  searchFilter: ItemSearchFilter;
  seasonFilter: ItemSeasonFilter;
  skillFilter: ItemSkillFilter;
  bundleFilter: ItemBundleFilter;
}

export const initialItemFilters: ItemFilters = {
  searchFilter: {
    hideChecked: false,
    nameString: '',
    sourceString: ''
  },
  seasonFilter: {
    selectedSeasons: [],
    andOr: false,
    containsAnyOnly: true
  },
  skillFilter: {
    selectedSkills: [],
    andOr: false,
    containsAnyOnly: true
  },
  bundleFilter: {
    selectedRoom: undefined,
    selectedBundles: [],
    andOr: false,
    containsAnyOnly: true
  }
};

export const andOrOptions: {name: string, value: boolean}[] = [
  {
    name: 'And',
    value: true
  },
  {
    name: 'Or',
    value: false
  },
];

export const containsAnyOnlyOptions: {name: string, value: boolean}[] = [
  {
    name: 'Contains Any',
    value: true
  },
  {
    name: 'Contains Only',
    value: false
  },
];

