import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { PaginationParams } from '@/core/repositories/pagination-params'
import { InMemoryAnswerAttachmentsRepository } from './in-memory-answer-attachments-repository'
import { DomainEvents } from '@/core/events/domain-events'

export class InMemoryAnswersRepository implements AnswersRepository {
  public answers: Answer[] = []

  constructor(
    private inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository,
  ) {}

  async findById(id: string) {
    const answer = this.answers.find((answer) => answer.id.toString() === id)

    if (!answer) return null

    return answer
  }

  async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
    const answers = this.answers
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20)

    return answers
  }

  async create(data: Answer) {
    this.answers.push(data)

    DomainEvents.dispatchEventsForAggregate(data.id)
  }

  async save(data: Answer) {
    const answerIndex = this.answers.findIndex(
      (answer) => answer.id === data.id,
    )

    this.answers[answerIndex] = data

    DomainEvents.dispatchEventsForAggregate(data.id)
  }

  async delete(data: Answer) {
    const answerIndex = this.answers.findIndex(
      (answer) => answer.id === data.id,
    )

    this.answers.splice(answerIndex, 1)

    await this.inMemoryAnswerAttachmentsRepository.deleteManyByAnswerId(
      data.id.toString(),
    )
  }
}
