import Percy from '@percy/puppeteer';

describe('Visual Regression Tests', () => {
    let percy;

    beforeAll(async () => {
        percy = await Percy.launch({
            // Настройки для вашего Percy проекта
        });
    });

    afterAll(async () => {
        await percy.stop();
    });

    test('renders App correctly', async () => {
        // eslint-disable-next-line no-undef
        let page;
        await page.goto('http://localhost:3000');
        await percy.snapshot('App');
    });
});
