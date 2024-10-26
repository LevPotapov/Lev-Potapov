import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Skill, SkillsSchema } from 'src/schemas/skills.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Skill.name, schema: SkillsSchema }]),
  ],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
