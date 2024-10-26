import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type SkillsDocument = Skill & Document;

@Schema()
export class Skill {
  @ApiProperty()
  _id: mongoose.Types.ObjectId | string;

  @ApiProperty()
  @Prop({ required: true })
  iconUrl: string;

  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  description: string;
}

export const SkillsSchema = SchemaFactory.createForClass(Skill);
