// src/questions/controller.ts
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
// import questionsById, { Question } from "./data";
import Question from "./entity";

@JsonController()
export default class QuestionController {
  @Get("/questions/:id")
  getQuestion(@Param("id") id: number) {
    return Question.findOne(id);
  }

  @Get("/questions")
  async allQuestions() {
    const questions = await Question.find();
    return { questions };
  }

  @Put("/questions/:id")
  async updateVote(@Param("id") id: number, @Body() update: Partial<Question>) {
    console.log("hoi");
    const question = await Question.findOne(id);
    if (!question) throw new NotFoundError("Cannot find page");

    return Question.merge(question, update).save();
  }

  @Post("/questions")
  @HttpCode(201)
  createQuestion(@Body() question: Question) {
    console.log("Hi");
    // console.log(Number(question.vote)
    return question.save();
  }
}
