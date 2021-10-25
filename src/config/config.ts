import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export interface IConfig {
  env: string;
  port: number;
  host: string;
  dbport: number;
  user: string;
  password: string;
  database: string;
  dialect: string;
}

const config: IConfig = {
  host: process.env.DB_HOST,
  dbport: +process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT,
  env: process.env.ENV,
  port: +process.env.PORT || 8000,
};

export { config } ;
