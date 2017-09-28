const expect = require('code').expect;
require('../index');

describe('unpop', () => {
  it('adds unpop method to array objects', () => {
    const arrays = [[], [1,2,3], new Array()]; // eslint-disable-line no-array-constructor
    arrays.forEach((array) => expect(array.unpop).to.be.a.function());
  });
  it('unpop places argument onto end of array', () => {
    const newElements = [5, 'a', {}, ['an array']];
    const startingArray = [1,2,3];
    newElements.forEach((element) => {
      startingArray.unpop(element);
      expect(startingArray[startingArray.length - 1]).to.equal(element);
    });
  });
  it('works with multiple arguments', () => {
    const array = [1, 2, 3];
    const multipleArguments = [5, 'a', {}, ['an array']];
    array.unpop(...multipleArguments);
    expect(array.slice(-4)).to.equal(multipleArguments);
  });
  it('returns length of array', () => {
    const array = [1, 2, 3];
    const result = array.unpop('something');
    expect(result).to.equal(array.length);
  });
  it('mutates array', () => {
    const array = [1,2,3];
    const brray = array;
    array.unpop(5);
    expect(brray).to.have.length(4);
    expect(brray[3]).to.equal(5);
    expect(array).to.shallow.equal(brray);
  });
});
