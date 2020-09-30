const script = require('../script');

describe('Арифметическая функция ', () => {
    it('SUM Должна возвращать 10 при аргументах 5 и 5', () => {
        const result = script.sum(5,5);
        expect(result).toBe(10);
    });

    it('Sum Должна возвращать 15 при аргументах null и 15', () => {
        const result = script.sum(null, 15);
        expect(result).toBe(15);
    });
 
    it('Sum Должна возвращать 15 при аргументах 15 и null', () => {
        const result = script.sum(15, null);
        expect(result).toBe(15);
    });

    it('Sum Должна возвращать NaN при аргументах 15 и string', () => {
        const result = script.sum(15, '15');
        expect(result).toBeNaN();
    });

    it('Sum Должна возвращать NaN при аргументах string и 15', () => {
        const result = script.sum('15', 15);
        expect(result).toBeNaN();
    });

    it('Sum Должна возвращать NaN при аргументах undefined и 15', () => {
        const result = script.sum(undefined, 15);
        expect(result).toBeNaN();
    });

    it('Sum Должна возвращать NaN при аргументах 15 и undefined', () => {
        const result = script.sum(15, undefined);
        expect(result).toBeNaN();
    });

    it('subst Должна возвращать -10 при аргументах 20 и 30', () => {
        const result = script.subst(20,30);
        expect(result).toBe(-10);
    });

    it('subst  Должна возвращать 10 при аргументах null и 10', () => {
        const result = script.subst(null, 10);
        expect(result).toBe(-10);
    });
 
    it('subst Должна возвращать 10 при аргументах 10 и null', () => {
        const result = script.subst(10, null);
        expect(result).toBe(10);
    });

    it('subst Должна возвращать NaN при аргументах 10 и string', () => {
        const result = script.subst(10, '10');
        expect(result).toBeNaN();
    });

    it('subst Должна возвращать NaN при аргументах string и 10', () => {
        const result = script.subst('10', 10);
        expect(result).toBeNaN();
    });

    it('subst Должна возвращать NaN при аргументах undefined и 10', () => {
        const result = script.subst(undefined, 10);
        expect(result).toBeNaN();
    });

    it('subst Должна возвращать NaN при аргументах 10 и undefined', () => {
        const result = script.subst(10, undefined);
        expect(result).toBeNaN();
    });

    it('multi Должна возвращать 10 при аргументах 2 и 5', () => {
        const result = script.multi(2,5);
        expect(result).toBe(10);
    });

    it('multi Должна возвращать 0 при аргументах null и 5', () => {
        const result = script.multi(null, 5);
        expect(result).toBe(0);
    });
 
    it('multi Должна возвращать 0 при аргументах 10 и null', () => {
        const result = script.multi(10, null);
        expect(result).toBe(0);
    });

    it('multi Должна возвращать NaN при аргументах 10 и string', () => {
        const result = script.multi(10, '10');
        expect(result).toBeNaN();
    });

    it('multi Должна возвращать NaN при аргументах string и 10', () => {
        const result = script.multi('10', 10);
        expect(result).toBeNaN();
    });

    it('multi Должна возвращать NaN при аргументах undefined и 10', () => {
        const result = script.multi(undefined, 10);
        expect(result).toBeNaN();
    });

    it('multi Должна возвращать NaN при аргументах 10 и undefined', () => {
        const result = script.multi(10, undefined);
        expect(result).toBeNaN();
    });

    it('dived Должна возвращать 4 при аргументах 8 и 2', () => {
        const result = script.dived(8,2);
        expect(result).toBe(4);
    });

    it('dived Должна возвращать NaN при аргументах 10 и null', () => {
        const result = script.dived(10, null);
        expect(result).toBeNaN();
    });
 
    it('dived Должна возвращать 0 при аргументах null и 10', () => {
        const result = script.dived(null, 10);
        expect(result).toBe(0);
    });

    it('dived Должна возвращать NaN при аргументах 10 и string', () => {
        const result = script.dived(10, '5');
        expect(result).toBeNaN();
    });

    it('dived Должна возвращать NaN при аргументах string и 10', () => {
        const result = script.dived('5', 10);
        expect(result).toBeNaN();
    });

    it('dived Должна возвращать NaN при аргументах undefined и 10', () => {
        const result = script.dived(undefined, 10);
        expect(result).toBeNaN();
    });

    it('dived Должна возвращать NaN при аргументах 10 и undefined', () => {
        const result = script.dived(10, undefined);
        expect(result).toBeNaN();
    });

});