import { Generator } from './init-generator';

describe('init-generator', () => {
  it('builds', () => {
    expect(new Generator()).toBeTruthy();
  });
});
