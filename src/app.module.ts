import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { loadTypeOrmConnectionFromEnv } from './loader';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return loadTypeOrmConnectionFromEnv();
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
