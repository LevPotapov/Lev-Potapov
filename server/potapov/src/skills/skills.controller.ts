import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Response } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Skill } from 'src/schemas/skills.schema';

@ApiTags('skills')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @ApiResponse({ status: HttpStatus.OK, type: [Skill] })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  @Get()
  async getAllSkills(@Res() res: Response) {
    const skills = await this.skillsService.getAllSkills();
    if (!skills) {
      res.statusCode = HttpStatus.NOT_FOUND;
      res.send('Not Found');
    }
    res.statusCode = HttpStatus.OK;
    res.send(skills);
  }
}
