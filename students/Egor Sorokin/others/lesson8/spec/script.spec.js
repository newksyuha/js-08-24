const exportedModule = require("../script");

describe('add()', () => {
    it('Should return 15 if x =5, y=10', () => {
        const result = exportedModule.add(5, 10);
        expect(result).toBe(15);
    });
    it('Should return 15 if x =15, y=0', () => {
        const result = exportedModule.add(15, 0);
        expect(result).toBe(15);
    });
    it('Should return 15 if x is convertible string x="5", y=10', () => {
        const result = exportedModule.add('5', 10);
        expect(result).toBe(15);
    });
    it('Should return 15 if y is convertible string y = "10", x=5', () => {
        const result = exportedModule.add(5, '10');
        expect(result).toBe(15);
    });
    it('Should return "Error" if x is inconvertible string, y=0', () => {
        const result = exportedModule.add('5aava', 10);
        expect(result).toBe('Error');
    });
    it('Should return "Error" if y is inconvertible string, y=0', () => {
        const result = exportedModule.add(10, 'aava5');
        expect(result).toBe('Error');
    });
    it('Should return "Error" if x is null, y=5', () => {
        const result = exportedModule.add(null, 5);
        expect(result).toBe('Error');
    });
    it('Should return "Error" if y is undefined, x=6', () => {
        const result = exportedModule.add(6, undefined);
        expect(result).toBe('Error');
    })
});

describe('substract()', () => {
    it('Should return -5 if x =5, y=10', () => {
        const result = exportedModule.substract(5, 10);
        expect(result).toBe(-5);
    });
    it('Should return 15 if x =15, y=0', () => {
        const result = exportedModule.substract(15, 0);
        expect(result).toBe(15);
    });
    it('Should return 15 if x is convertible string x="25", y=10', () => {
        const result = exportedModule.substract('25', 10);
        expect(result).toBe(15);
    });
    it('Should return 15 if y is convertible string y = "20", x=53', () => {
        const result = exportedModule.substract(53, '20');
        expect(result).toBe(33);
    });
    it('Should return "Error" if x is inconvertible string, y=0', () => {
        const result = exportedModule.substract('5aava', 10);
        expect(result).toBe('Error');
    });
    it('Should return "Error" if y is inconvertible string, y=0', () => {
        const result = exportedModule.substract(10, 'aava5');
        expect(result).toBe('Error');
    });
    it('Should return "Error" if x is null, y=5', () => {
        const result = exportedModule.substract(null, 5);
        expect(result).toBe('Error');
    });
    it('Should return "Error" if y is undefined, x=6', () => {
        const result = exportedModule.substract(6, undefined);
        expect(result).toBe('Error');
    });
});

describe('multiply()', () => {
    it('Should return 50 if x =5, y=10', () => {
        const result = exportedModule.multiply(5, 10);
        expect(result).toBe(50);
    });
    it('Should return 0 if x =15, y=0', () => {
        const result = exportedModule.multiply(15, 0);
        expect(result).toBe(0);
    });
    it('Should return -150 if x =15, y=-10', () => {
        const result = exportedModule.multiply(15, -10);
        expect(result).toBe(-150);
    });
    it('Should return 250 if x is convertible string x="25", y=10', () => {
        const result = exportedModule.multiply('25', 10);
        expect(result).toBe(250);
    });
    it('Should return 15 if y is convertible string y = "20", x=53', () => {
        const result = exportedModule.multiply(53, '20');
        expect(result).toBe(1060);
    });
    it('Should return "Error" if x is inconvertible string, y=0', () => {
        const result = exportedModule.multiply('5aava', 10);
        expect(result).toBe('Error');
    });
    it('Should return "Error" if y is inconvertible string, y=0', () => {
        const result = exportedModule.multiply(10, 'aava5');
        expect(result).toBe('Error');
    });
    it('Should return "Error" if x is null, y=5', () => {
        const result = exportedModule.multiply(null, 5);
        expect(result).toBe('Error');
    });
    it('Should return "Error" if y is undefined, x=6', () => {
        const result = exportedModule.multiply(6, undefined);
        expect(result).toBe('Error');
    });
});

describe('divide()', () => {
    it('Should return 0.5 if x =5, y=10', () => {
        const result = exportedModule.divide(5, 10);
        expect(result).toBe(0.5);
    });
    it('Should return 3 if x =15, y=5', () => {
        const result = exportedModule.divide(15, 5);
        expect(result).toBe(3);
    });
    it('Should return -5 if x =15, y=-3', () => {
        const result = exportedModule.divide(15, -3);
        expect(result).toBe(-5);
    });
    it('Should return 0 if x =0, y=15', () => {
        const result = exportedModule.divide(0, 15);
        expect(result).toBe(0);
    });
    it('Should return "Error" if x =15, y=0', () => {
        const result = exportedModule.divide(15, 0);
        expect(result).toBe('Error');
    });
    it('Should return "Error" if x =15, y="0"', () => {
        const result = exportedModule.divide(15, '0');
        expect(result).toBe('Error');
    });
    it('Should return 2.5 if x is convertible string x="25", y=10', () => {
        const result = exportedModule.divide('25', 10);
        expect(result).toBe(2.5);
    });
    it('Should return 2 if y is convertible string y = "20", x=40', () => {
        const result = exportedModule.divide(40, '20');
        expect(result).toBe(2);
    });
    it('Should return "Error" if x is inconvertible string, y=0', () => {
        const result = exportedModule.divide('5aava', 10);
        expect(result).toBe('Error');
    });
    it('Should return "Error" if y is inconvertible string, y=0', () => {
        const result = exportedModule.divide(10, 'aava5');
        expect(result).toBe('Error');
    });
    it('Should return "Error" if x is null, y=5', () => {
        const result = exportedModule.divide(null, 5);
        expect(result).toBe('Error');
    });
    it('Should return "Error" if y is undefined, x=6', () => {
        const result = exportedModule.divide(6, undefined);
        expect(result).toBe('Error');
    });
});