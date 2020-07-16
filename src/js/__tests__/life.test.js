import life from '../life';

  test('проверяем проверяем сортировку', () => {
    const result = life([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]);
    const tryResult = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ];
    expect(result).toEqual(tryResult);
});

