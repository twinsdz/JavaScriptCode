const {
    expect
} = require('chai');
// const {rgbToHexColor} = require('./rgb-to-hex.js');
const rgbToHexColor = require('./rgb-to-hex.js').rgbToHexColor;

describe('RGB Convertor', () => {

    describe('Happy Path', () => {
        it('convert white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });

        it('convert black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });

        it('convert SoftUni Darkblue to #234465', () => {
            expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
        });
    });

    describe('Invalid parameters', () => {
        it('returns undefined for missing parameters', () => {
            expect(rgbToHexColor(255, 255)).to.be.undefined;
        });

        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
            expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
            expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        });

        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
            expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        });

        it('returns undefined for invalid parameter type', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
            expect(rgbToHexColor('0', 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, '0', 0)).to.be.undefined;
            expect(rgbToHexColor(0, 0, '0')).to.be.undefined;
        });
    });
});



/* // Task Number 5

const {expect} = require('chai');
const isSymmetric = require('./checkForSymmetry.js');

describe('Symmetrc checker', () => {
    it('returns true for symmertic array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1,2,3,4])).to.be.false;
    });

    it('returns false for non-array', () => {
        expect(isSymmetric(3)).to.be.false;
    });

    it('returns false for type different symmetric array', () => {
        expect(isSymmetric([1,2,'1'])).to.be.false;
    });

    // test overloading
    it('returns true for symmertic array with odd number of elements', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('returns true for symmertic array with strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('returns false for non-symmertic array with strings', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });

    it('returns false for string parameter', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

}); */



/* 
// Demo test
const {expect, assert} = require('chai');
const {sum} = require('./sumForExport');

describe('Demo Test', () => {
    it('works with 5 and 3', () => {
        assert.equal(sum(5, 3), 8);
        // expect(sum(5, 3).to.equal(8));
    });
}); */