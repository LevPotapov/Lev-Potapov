import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ProjectsDocument = Project & Document;

@Schema()
export class Project {
  @ApiProperty()
  _id: mongoose.Types.ObjectId | string;

  @ApiProperty()
  @Prop({ required: true })
  imageUrl: string;

  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  description: string;

  @ApiProperty()
  @Prop({ required: true })
  link: string;
}

export const ProjectsSchema = SchemaFactory.createForClass(Project);
