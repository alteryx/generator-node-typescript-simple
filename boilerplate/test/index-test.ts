import * as chai from 'chai';
import index = require('../src/index');

const expect = chai.expect;
describe('index - Greeter', () => {
  it('should provide Greeter', () => {
    expect(index.Greeter).to.not.be.undefined;
  });
});
