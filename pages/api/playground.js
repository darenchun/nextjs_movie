// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function videoCrawl(req, res) {
    const { chromium } = require('playwright');
    const jsdom = require('jsdom'); // kinda wierd but jsdom is not applicable in client-side code. so I am writing this here.
    const { JSDOM } = jsdom;

    (async () => {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://noonoo28.tv/en_drama/5191#afdf0ec7sF1AScGo');
        const html = await page.content();
        const dom = new JSDOM(html);
        const title = dom.window.document.querySelector('video');
        console.log(html);
        await browser.close();
    })();
}
