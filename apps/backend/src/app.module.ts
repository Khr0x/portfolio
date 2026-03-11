import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsController } from './projects/controllers/projects.controller';
import { ProjectsModule } from './projects/projects.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './config/env.schema';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      validationSchema: envSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
    }),
    ProjectsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
