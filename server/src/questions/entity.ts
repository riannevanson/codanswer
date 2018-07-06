// src/questions/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString } from "class-validator";

@Entity()
export default class Question extends BaseEntity {
  @PrimaryGeneratedColumn() id?: number;

  @IsString()
  @Column("text", { nullable: false })
  subject: string;

  @IsString()
  @Column("text", { nullable: false })
  question: string;

  @IsString()
  @Column("text", { nullable: false })
  vote: string;

  @IsString()
  @Column("text", { nullable: false })
  userName: string;
}
