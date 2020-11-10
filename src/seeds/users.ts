// import { HttpModule } from '@nestjs/common';
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../entity/Users';
import fetch from 'node-fetch';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    console.log(factory);

    try {
      const URL = process.env.REQRES_IN_USERS;
      if (!URL) {
        throw new Error('REQRES_IN_USERS variable is not set');
      }

      const response = await fetch(URL);
      const body = await response.text();
      const { data } = JSON.parse(body);

      await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(data)
        .execute();
    } catch (e) {
      console.log(e);
    }
  }
}
