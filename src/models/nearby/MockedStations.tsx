export const MockedStations = [
  {
    id: 1702,
    name: 'Virta Office CP',
    latitude: 46.74837,
    longtitude: 46.333,
    icon: 0,
    address: 'Energiakuja 3, 00180 Helsinki',
    city: 'Helsinki',
    openHours: '24/7',
    providers: 'Liikennevirta',
    pictures: [
      'https://res.cloudinary.com/virta/image/upload/1068/1068_Runeberginkatu1_kuacsd.jpg',
      'https://res.cloudinary.com/virta/image/upload/1068/1068_Runeberginkatu2_kuacsd.jpg',
      'https://res.cloudinary.com/virta/image/upload/1068/1068_Runeberginkatu3_kuacsd.jpg',
    ],
    evses: [
      {
        id: 1120,
        connectors: [
          {
            connectorID: 1,
            type: 'CHAdeMO',
            currentType: 'DC',
            maxKwh: 22,
          },
          {
            connectorID: 2,
            type: 'CCS',
            currentType: 'DC',
            maxKwh: 22,
          },
        ],
        available: true,
        reservable: true,
        pricing: [
          {
            name: 'Price_Per_Kwh',
            priceCents: 100,
            currency: 'EUR',
          },
          {
            name: 'Price_Per_Minute',
            priceCents: 100,
            currency: 'EUR',
          },
        ],
      },
      {
        id: 1121,
        connectors: [
          {
            connectorID: 3,
            type: 'Type2',
            currentType: 'AC',
            maxKwh: 16,
          },
        ],
        available: true,
        reservable: true,
        pricing: [
          {
            name: 'Price_Per_Kwh',
            priceCents: 100,
            currency: 'EUR',
            $$ref: '#/definitions/Pricing/example',
          },
        ],
      },
    ],
  },
  {
    id: 1703,
    name: 'Virta Office Tampere',
    latitude: 46.74837,
    longtitude: 46.333,
    icon: 0,
    address: 'Energiakuja 3, 00180 Tampere',
    city: 'Helsinki',
    openHours: '24/7',
    providers: 'Liikennevirta',
    pictures: [
      'https://res.cloudinary.com/virta/image/upload/1068/1068_Runeberginkatu1_kuacsd.jpg',
      'https://res.cloudinary.com/virta/image/upload/1068/1068_Runeberginkatu2_kuacsd.jpg',
      'https://res.cloudinary.com/virta/image/upload/1068/1068_Runeberginkatu3_kuacsd.jpg',
    ],
    evses: [
      {
        id: 1120,
        connectors: [
          {
            connectorID: 1,
            type: 'CHAdeMO',
            currentType: 'DC',
            maxKwh: 22,
          },
          {
            connectorID: 2,
            type: 'CCS',
            currentType: 'DC',
            maxKwh: 22,
          },
        ],
        available: true,
        reservable: true,
        pricing: [
          {
            name: 'Price_Per_Kwh',
            priceCents: 100,
            currency: 'EUR',
          },
          {
            name: 'Price_Per_Minute',
            priceCents: 100,
            currency: 'EUR',
          },
        ],
      },
      {
        id: 1121,
        connectors: [
          {
            connectorID: 3,
            type: 'Type2',
            currentType: 'AC',
            maxKwh: 16,
          },
        ],
        available: true,
        reservable: true,
        pricing: [
          {
            name: 'Price_Per_Kwh',
            priceCents: 100,
            currency: 'EUR',
            $$ref: '#/definitions/Pricing/example',
          },
        ],
      },
    ],
  },
];
