test('проверяем', () => {
    for (let i = 0; i < 15; i++) {
        const result = line({name: 'Маг', health: i});
        expect(result).toBe('critical');
    }
});