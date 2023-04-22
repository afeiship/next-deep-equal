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

  test('primtive value', () => {
    const res1 = nx.deepEqual(1, 1);
    const res2 = nx.deepEqual('1', '1');
    const res3 = nx.deepEqual(true, true);
    const res4 = nx.deepEqual(false, false);
    expect(res1).toEqual(true);
    expect(res2).toEqual(true);
    expect(res3).toEqual(true);
    expect(res4).toEqual(true);
  });

  test('null/undefined', () => {
    const res = nx.deepEqual(null, undefined);
    expect(res).toEqual(false);
  });

});
