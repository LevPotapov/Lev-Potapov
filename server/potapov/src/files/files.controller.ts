import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('files')
@Controller('files')
export class FilesController {
  constructor() {}

  @ApiParam({
    name: 'iconName',
    type: 'String',
    description: 'icon file name',
    example: 'icon_backend.svg',
    required: true,
  })
  @ApiResponse({ status: HttpStatus.OK })
  @Get('icons/:iconName')
  async getIcon(@Res() res: Response, @Param() param: object) {
    res.sendFile(param['iconName'], { root: 'static/icons' });
  }

  @ApiParam({
    name: 'imageName',
    type: 'String',
    description: 'image file name',
    example: 'Screenshot_Kasa.webp',
    required: true,
  })
  @ApiResponse({ status: HttpStatus.OK })
  @Get('images/:imageName')
  async getImage(@Res() res: Response, @Param() param: object) {
    res.sendFile(param['imageName'], { root: 'static/images' });
  }
}
