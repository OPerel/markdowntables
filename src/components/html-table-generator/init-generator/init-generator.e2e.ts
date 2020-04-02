import { newE2EPage } from '@stencil/core/testing';

describe('init-generator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<init-generator></init-generator>');

    const element = await page.find('init-generator');
    expect(element).toHaveClass('hydrated');
  });
});
