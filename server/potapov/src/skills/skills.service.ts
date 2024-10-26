import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill, SkillsDocument } from 'src/schemas/skills.schema';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel(Skill.name) private skillsModel: Model<SkillsDocument>,
  ) {}

  async getAllSkills(): Promise<Skill[]> {
    return this.skillsModel.find().exec();
  }
}
