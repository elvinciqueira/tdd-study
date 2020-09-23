const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Elvin',
      profession: 'Developer',
    };

    expect(queryString(obj)).toBe('name=Elvin&profession=Developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Elvin',
      habilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Elvin&habilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Elvin',
      habilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

// describe('Query string to object', () => {
//   it('should convert a query string to object', () => {

//   });
// });
