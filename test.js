const assert = require('chai').assert;
const calculateBill = require('./calculate').calculateBill;

describe('Calculate', function(){
    it('Test calculation with noVat', function(){
        let result = calculateBill(1,1);
        assert.equal(result, 0.24)
    });
})