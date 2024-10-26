import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectsDocument } from 'src/schemas/projects.schema';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectsModel: Model<ProjectsDocument>,
  ) {}

  async getAllProjects(): Promise<Project[]> {
    return this.projectsModel.find().exec();
  }
}
