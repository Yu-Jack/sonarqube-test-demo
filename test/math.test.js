const assert = require('assert');
const math = require("../math");
describe('Number', function () {
    it('should return sun when add two number ', function () {
        assert.deepStrictEqual(math.sum(1, 5), 6);
    });
});