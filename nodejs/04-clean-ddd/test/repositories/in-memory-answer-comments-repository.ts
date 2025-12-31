import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { PaginationParams } from '@/core/repositories/pagination-params'

export class InMemoryAnswerCommentsRepository implements AnswerCommentsRepository {
  public answerComments: AnswerComment[] = []

  async findById(id: string) {
    const answerComment = this.answerComments.find(
      (answer) => answer.id.toString() === id,
    )

    if (!answerComment) return null

    return answerComment
  }

  async findManyByAnswerId(answerId: string, { page }: PaginationParams) {
    const answerComment = this.answerComments
      .filter((item) => item.answerId.toString() === answerId)
      .slice((page - 1) * 20, page * 20)

    return answerComment
  }

  async create(data: AnswerComment) {
    this.answerComments.push(data)
  }

  async delete(data: AnswerComment) {
    const answerIndex = this.answerComments.findIndex(
      (comment) => comment.id === data.id,
    )

    this.answerComments.splice(answerIndex, 1)
  }
}
