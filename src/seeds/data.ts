const puppeteer = require('puppeteer');

import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Performance } from '../entity/Performance';
import * as cheerio from 'cheerio';

export default class CreatePerformance implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    console.log(factory);

    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      // For testing
      // await page.setViewport({
      //   width: 2720,
      //   height: 1480,
      //   deviceScaleFactor: 1,
      // });

      await page.goto(`https://develop.pub.afflu.net/main`);

      await page.$eval('input[name=username]', (el, value) => el.value = value, process.env.EMAIL);
      await page.$eval('input[name=password]', (el, value) => el.value = value, process.env.PASSWORD);

      await Promise.all([
        page.click('button'),
      ]);
      await page.waitForNavigation();

      await page.waitForTimeout(1000);
      await page.goto(`https://develop.pub.afflu.net/main?startDate=${process.env.STARTDATE}&endDate=${process.env.ENDDATE}`);

      await page.waitForTimeout(3000);

      const content = await page.content();

      const $ = cheerio.load(content);
      await page.waitForTimeout(1000);
      const data = [];
      $('#DataTables_Table_0>tbody>tr').each(function () {
        let column = 0;
        const record: any = {};
        $(this).children('td').each(function () {
          switch (column) {
            case 0:
              record.date = Number(new Date($(this).text()));
              break;
            case 1:
              record.comission = parseFloat($(this).text().replace(',', '').replace('$', ''));
              break;
            case 2:
              record.sales = Number($(this).text());
              break;
            case 3:
              record.leads = Number($(this).text());
              break;
            case 4:
              record.clicks = Number($(this).text().replace(',', ''));
              break;
            case 5:
              console.log()
              record.epc = parseFloat($(this).text().replace('$', ''));
              break;
            case 6:
              record.impressions = Number($(this).text());
              break;
            case 7:
              record.cr = parseFloat($(this).text().replace('%', ''));
              break;
          }

          column++;
        });
        data.push(record);
      });

      console.log(data);

      await browser.close();

      await connection
        .createQueryBuilder()
        .insert()
        .into(Performance)
        .values(data)
        .execute();
    } catch (e) {
      console.log(e);
    }
  }
}
