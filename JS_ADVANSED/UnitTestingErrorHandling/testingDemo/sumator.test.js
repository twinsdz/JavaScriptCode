const {
    expect
} = require('chai');

const {
    createCalculator
} = require('./addSubtract.js');

describe('Sumator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all mathods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('starst empty', () => {
        expect(instance.get()).to.equal(0);
    });

    it('add single number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it('add multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });

    it('subtrcts single number', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });

    it('subtrcts multiple numbers', () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    });

    it('adds and subtrcts', () => {
        instance.add(1);
        instance.add(2);
        instance.subtract(4);
        expect(instance.get()).to.equal(-1);
    });

    it('works with numbers as strings', () => {
        instance.add('1');
        instance.subtract('2');
        expect(instance.get()).to.equal(-1);
    });
});