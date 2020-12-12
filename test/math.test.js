const assert = require('assert');
const math = require("../math");
describe('Number', function () {
    it('should return sun when add two number ', function () {
        assert.deepStrictEqual(math.sum(1, 5), 6);
    });
    it('should return sub when two number sub ', function () {
        assert.deepStrictEqual(math.sub(5, 1), 4);
    });
    it('should return multiply when two number  multiply', function () {
        assert.deepStrictEqual(math.multiply(1, 5), 5);
    });
    it('should return division when two number  division', function () {
        assert.deepStrictEqual(math.division(4, 2), 2);
    });
});