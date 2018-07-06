// src/answers/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString } from "class-validator";

@Entity()
export default class Answers extends BaseEntity {
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
}
