export default [
  {
    key: 'house',
    label: 'Дом:',
    type: 'tile',
    values: [
      {
        id: 1,
        title: 1,
      },
      {
        id: 2,
        title: 2,
      },
    ],
  },
  {
    key: 'floor',
    label: 'Этаж:',
    type: 'tile',
    values: [
      {
        id: 1,
        title: 1,
      },
      {
        id: 2,
        title: 2,
      },
      {
        id: 3,
        title: 3,
      },
      {
        id: 4,
        title: 4,
      },
      {
        id: 5,
        title: 5,
      },
    ],
  },
  {
    key: 'rooms',
    label: 'Количество комнат:',
    type: 'tile',
    values: [
      {
        id: 1,
        title: 1,
      },
      {
        id: 2,
        title: 2,
      },
      {
        id: 3,
        title: 3,
      },
      {
        id: 4,
        title: 4,
      },
    ],
  },
  {
    key: 'total_area',
    label: 'Площадь м<sup>2</sup>:',
    type: 'range',
    values: {
      from: '59.16',
      to: '195.50',
    },
  },
  {
    key: 'price',
    label: 'Цена:',
    type: 'range',
    values: {
      from: '15509.00',
      to: '1937864.00',
    },
  },
  {
    key: 'naznacenie',
    label: 'Назначение:',
    type: 'tag',
    values: [
      {
        id: 'sfera-uslug',
        title: 'Сфера услуг',
      },
      {
        id: 'eda',
        title: 'Еда',
      },
      {
        id: 'riteil',
        title: 'Ритейл',
      },
      {
        id: 'salon-krasoty',
        title: 'Салон красоты',
      },
      {
        id: 'sport',
        title: 'Спорт',
      },
    ],
  },
  {
    key: 'tegi',
    label: 'Теги:',
    type: 'tag',
    values: [
      {
        id: 'akciya',
        title: 'акция',
      },
      {
        id: 'rasrocka',
        title: 'расрочка',
      },
      {
        id: 'terrasa',
        title: 'терраса',
      },
      {
        id: 's-remontom',
        title: 'с ремонтом',
      },
    ],
  },
];
