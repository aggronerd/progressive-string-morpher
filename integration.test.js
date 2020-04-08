/**
 * Test for compiled Javascript.
 */
describe('readme example', () => {
  it('logs expected', () => {
    const log = jest.fn();
    // eslint-disable-next-line global-require
    const { morph } = require('./dist');
    const transition = morph('More', 'Rome!');

    do {
      log(transition.getCurrentString());
    } while (!transition.next());

    expect(log).toHaveBeenCalledTimes(7);
    expect(log).toHaveBeenNthCalledWith(1, 'More');
    expect(log).toHaveBeenNthCalledWith(2, 'more');
    expect(log).toHaveBeenNthCalledWith(3, 'omre');
    expect(log).toHaveBeenNthCalledWith(4, 'orme');
    expect(log).toHaveBeenNthCalledWith(5, 'rome');
    expect(log).toHaveBeenNthCalledWith(6, 'rome!');
    expect(log).toHaveBeenNthCalledWith(7, 'Rome!');
  });
});