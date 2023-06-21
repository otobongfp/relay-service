import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { requestProviders } from './request.providers';
import { RequestService } from './request.service';
import { LoggerModule } from '../common/logger/logger.module';
import { ConfigModule } from '../common/config/config.module';

export const RequestModuleConfig = {
  imports: [LoggerModule, ConfigModule, HttpModule],
  controllers: [],
  providers: [...requestProviders, RequestService],
  exports: [...requestProviders, RequestService],
};

@Module(RequestModuleConfig)
export class RequestModule {}
