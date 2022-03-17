import { dbCredentials } from 'db.constants';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  database: dbCredentials.db,
  host: dbCredentials.host,
  username: dbCredentials.user,
  password: dbCredentials.pass,
  port: dbCredentials.port,
  entities: ['dist/src/entity/*.entity.js'],
  migrations: ['./dist/src/db/migrations/*.js'],
  cli: { migrationsDir: 'src/db/migrations' },
  synchronize: false,
  type: 'mysql',
};

export default config;
