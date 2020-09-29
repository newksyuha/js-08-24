const script = require('../script');

describe('Арифметическая функция ', () => {
    it('SUM Должна возвращать 5 при аргументах 2 и 3', () => {
        const result = script.sum(2,3);
        expect(result).toBe(5);
    });

    it('Sum Должна возвращать 5 при аргументах null и 5', () => {
        const result = script.sum(null, 5);
        expect(result).toBe(5);
    });
 
    it('Sum Должна возвращать 5 при аргументах 5 и null', () => {
        const result = script.sum(5, null);
        expect(result).toBe(5);
    });

    it('Sum Должна возвращать NaN при аргументах 5 и string', () => {
        const result = script.sum(5, '5');
        expect(result).toBeNaN();
    });

    it('Sum Должна возвращать NaN при аргументах string и 5', () => {
        const result = script.sum('5', 5);
        expect(result).toBeNaN();
    });

    it('Sum Должна возвращать NaN при аргументах undefined и 5', () => {
        const result = script.sum(undefined, 5);
        expect(result).toBeNaN();
    });

    it('Sum Должна возвращать NaN при аргументах 5 и undefined', () => {
        const result = script.sum(5, undefined);
        expect(result).toBeNaN();
    });

    it('minus Должна возвращать -1 при аргументах 2 и 3', () => {
        const result = script.minus(2,3);
        expect(result).toBe(-1);
    });

    it('minus  Должна возвращать 5 при аргументах null и 5', () => {
        const result = script.minus(null, 5);
        expect(result).toBe(-5);
    });
 
    it('minus Должна возвращать 5 при аргументах 5 и null', () => {
        const result = script.minus(5, null);
        expect(result).toBe(5);
    });

    it('minus Должна возвращать NaN при аргументах 5 и string', () => {
        const result = script.minus(5, '5');
        expect(result).toBeNaN();
    });

    it('minus Должна возвращать NaN при аргументах string и 5', () => {
        const result = script.minus('5', 5);
        expect(result).toBeNaN();
    });

    it('minus Должна возвращать NaN при аргументах undefined и 5', () => {
        const result = script.minus(undefined, 5);
        expect(result).toBeNaN();
    });

    it('minus Должна возвращать NaN при аргументах 5 и undefined', () => {
        const result = script.minus(5, undefined);
        expect(result).toBeNaN();
    });

    it('mnojit Должна возвращать 6 при аргументах 2 и 3', () => {
        const result = script.mnojit(2,3);
        expect(result).toBe(6);
    });

    it('mnojit Должна возвращать 0 при аргументах null и 5', () => {
        const result = script.mnojit(null, 5);
        expect(result).toBe(0);
    });
 
    it('mnojit Должна возвращать 0 при аргументах 5 и null', () => {
        const result = script.mnojit(5, null);
        expect(result).toBe(0);
    });

    it('mnojit Должна возвращать NaN при аргументах 5 и string', () => {
        const result = script.mnojit(5, '5');
        expect(result).toBeNaN();
    });

    it('mnojit Должна возвращать NaN при аргументах string и 5', () => {
        const result = script.mnojit('5', 5);
        expect(result).toBeNaN();
    });

    it('mnojit Должна возвращать NaN при аргументах undefined и 5', () => {
        const result = script.mnojit(undefined, 5);
        expect(result).toBeNaN();
    });

    it('mnojit Должна возвращать NaN при аргументах 5 и undefined', () => {
        const result = script.mnojit(5, undefined);
        expect(result).toBeNaN();
    });

    it('dv Должна возвращать 3 при аргументах 6 и 2', () => {
        const result = script.dv(6,2);
        expect(result).toBe(3);
    });

    it('dv Должна возвращать NaN при аргументах 5 и null', () => {
        const result = script.dv(5, null);
        expect(result).toBeNaN();
    });
 
    it('dv Должна возвращать 0 при аргументах null и 5', () => {
        const result = script.dv(null, 5);
        expect(result).toBe(0);
    });

    it('dv Должна возвращать NaN при аргументах 5 и string', () => {
        const result = script.dv(5, '5');
        expect(result).toBeNaN();
    });

    it('dv Должна возвращать NaN при аргументах string и 5', () => {
        const result = script.dv('5', 5);
        expect(result).toBeNaN();
    });

    it('dv Должна возвращать NaN при аргументах undefined и 5', () => {
        const result = script.dv(undefined, 5);
        expect(result).toBeNaN();
    });

    it('dv Должна возвращать NaN при аргументах 5 и undefined', () => {
        const result = script.dv(5, undefined);
        expect(result).toBeNaN();
    });

});
