/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { ConnectionOptionsEnvReader } from 'typeorm/connection/options-reader/ConnectionOptionsEnvReader';
export const loadEnvironmentVariables = async () => {
  config();
};
export const loadTypeOrmConnectionFromEnv = async () => {
  const envReader = new ConnectionOptionsEnvReader();
  const envconfig = await envReader.read();
  const obj = envconfig[0];
  const connectionOptions: TypeOrmModuleOptions = {
    ...obj,
    entities: [`${__dirname}/${process.env.TYPEORM_ENTITIES}`],
    migrations: [],
  };
  console.log(connectionOptions);
  return obj;
};
