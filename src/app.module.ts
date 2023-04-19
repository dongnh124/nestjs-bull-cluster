import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SharedModule } from '~shared/shared.module';
import { AudioModule } from '~models/audio/audio.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SharedModule,
    AudioModule,
  ],
  providers: [],
})
export class AppModule { }
