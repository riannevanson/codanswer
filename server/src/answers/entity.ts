// src/answers/entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString } from "class-validator";
import Question from "../questions/entity";

@Entity()
export default class Answer extends BaseEntity {
  @PrimaryGeneratedColumn() id?: number;

  @IsString()
  @Column("text", { nullable: false })
  answer: string;

  @IsString()
  @Column("text", { nullable: false })
  vote: string;

  @IsString()
  @Column("text", { nullable: false })
  userName: string;

  @ManyToOne(_ => Question, question => question.answers)
  question: Question;
}
