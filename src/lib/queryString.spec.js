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
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Elvin&abilities=JS,TDD');
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

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Elvin&profession=Developer';

    expect(parse(qs)).toEqual({
      name: 'Elvin',
      profession: 'Developer',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Elvin';

    expect(parse(qs)).toEqual({
      name: 'Elvin',
    });
  });

  it('should convert a query string to an object taking care of comma separeted values', () => {
    const qs = 'name=Elvin&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Elvin',
      abilities: ['JS', 'TDD'],
    });
  });
});
