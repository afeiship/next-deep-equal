require('../src');

jest.setTimeout(60 * 1000);

describe('api.basic test', () => {
  test('plain obj is equal', function () {
    const obj1 = {
      a: 1,
      s1: 'string',
      items: [1, 2]
    };

    const obj2 = {
      a: 1,
      items: [1, 2],
      s1: 'string'
    };

    const res = nx.deepEqual(obj1, obj2);
    expect(res).toEqual(true);
  });
});
