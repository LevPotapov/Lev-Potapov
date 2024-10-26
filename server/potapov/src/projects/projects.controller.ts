import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Response } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Project } from 'src/schemas/projects.schema';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @ApiResponse({ status: HttpStatus.OK, type: [Project] })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  @Get()
  async getAllProjects(@Res() res: Response) {
    const projects = await this.projectsService.getAllProjects();
    if (!projects) {
      res.statusCode = HttpStatus.NOT_FOUND;
      res.send('Not Found');
    }
    res.statusCode = HttpStatus.OK;
    res.send(projects);
  }
}
