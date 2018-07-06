// src/answers/controller.ts
import {
  JsonController,
  Get,
  Param,
  Put,
  Body,
  NotFoundError,
  Post,
  HttpCode
} from "routing-controllers";
// import answersById, { Answer } from "./data";
import Answer from "./entity";

@JsonController()
export default class AnswerController {
  @Get("/answers/:id")
  getAnswer(@Param("id") id: number) {
    return Answer.findOne(id);
  }

  @Get("/answers")
  async allAnswers() {
    const answers = await Answer.find();
    return { answers };
  }

  @Put("/answers/:id")
  async updateVote(@Param("id") id: number, @Body() update: Partial<Answer>) {
    const question = await Answer.findOne(id);
    if (!question) throw new NotFoundError("Cannot find page");

    return Answer.merge(question, update).save();
  }

  @Post("/answers")
  @HttpCode(201)
  createAnswer(@Body() question: Answer) {
    // console.log(Number(question.vote)
    return question.save();
  }
}
