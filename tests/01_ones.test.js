"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var chai_1 = require("chai");
describe('Convert ones', function () {
    it('should convert 0 to nulla', function () {
        var result = (0, index_1.numberToWordHun)(0);
        (0, chai_1.expect)(result).equal('nulla');
    });
    it('should convert 1 to egy', function () {
        var result = (0, index_1.numberToWordHun)(1);
        (0, chai_1.expect)(result).equal('egy');
    });
    it('should convert 2 to kettő', function () {
        var result = (0, index_1.numberToWordHun)(2);
        (0, chai_1.expect)(result).equal('kettő');
    });
    it('should convert 3 to három', function () {
        var result = (0, index_1.numberToWordHun)(3);
        (0, chai_1.expect)(result).equal('három');
    });
    it('should convert 4 to négy', function () {
        var result = (0, index_1.numberToWordHun)(4);
        (0, chai_1.expect)(result).equal('négy');
    });
    it('should convert 5 to öt', function () {
        var result = (0, index_1.numberToWordHun)(5);
        (0, chai_1.expect)(result).equal('öt');
    });
    it('should convert 6 to hat', function () {
        var result = (0, index_1.numberToWordHun)(6);
        (0, chai_1.expect)(result).equal('hat');
    });
    it('should convert 7 to hét', function () {
        var result = (0, index_1.numberToWordHun)(7);
        (0, chai_1.expect)(result).equal('hét');
    });
    it('should convert 8 to nyolc', function () {
        var result = (0, index_1.numberToWordHun)(8);
        (0, chai_1.expect)(result).equal('nyolc');
    });
    it('should convert 9 to kilenc', function () {
        var result = (0, index_1.numberToWordHun)(9);
        (0, chai_1.expect)(result).equal('kilenc');
    });
    it('should convert 10 to tíz', function () {
        var result = (0, index_1.numberToWordHun)(10);
        (0, chai_1.expect)(result).equal('tíz');
    });
});
