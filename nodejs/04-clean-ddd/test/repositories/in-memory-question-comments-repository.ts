import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { PaginationParams } from '@/core/repositories/pagination-params'

export class InMemoryQuestionCommentsRepository implements QuestionCommentsRepository {
  public questionComments: QuestionComment[] = []

  async findById(id: string) {
    const questionComment = this.questionComments.find(
      (question) => question.id.toString() === id,
    )

    if (!questionComment) return null

    return questionComment
  }

  async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
    const questionComment = this.questionComments
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20)

    return questionComment
  }

  async create(data: QuestionComment) {
    this.questionComments.push(data)
  }

  async delete(data: QuestionComment) {
    const questionIndex = this.questionComments.findIndex(
      (comment) => comment.id === data.id,
    )

    this.questionComments.splice(questionIndex, 1)
  }
}
