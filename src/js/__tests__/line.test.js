import line from '../line';

test('проверяем 0', () => {
    const result = line({name: 'Маг', health: 0});
    expect(result).toBe('error');
});

test('проверяем 1', () => {
        const result = line({name: 'Маг', health: 1});
        expect(result).toBe('critical');
});

test('проверяем до 14', () => {
        const result = line({name: 'Маг', health: 14});
        expect(result).toBe('critical');
});

test('проверяем с 15', () => {
    const result = line({name: 'Маг', health: 15});
    expect(result).toBe('wounded');
});

test('проверяем 49', () => {
    const result = line({name: 'Маг', health: 49});
    expect(result).toBe('wounded');
});


test('проверяем 50', () => {
    const result = line({name: 'Маг', health: 50});
    expect(result).toBe('healthy');
});


test('проверяем 100', () => {
    const result = line({name: 'Маг', health: 100});
    expect(result).toBe('healthy');
});