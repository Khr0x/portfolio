import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectsService } from './services/project.service';
import { Supabase } from '../common/supabase/supabase';

@Module({
  imports: [AuthModule, ConfigModule], 
  controllers: [ProjectsController],
  providers: [ProjectsService, Supabase],
})
export class ProjectsModule {}