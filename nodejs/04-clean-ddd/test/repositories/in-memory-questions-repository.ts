import { Question } from '@/domain/forum/enterprise/entities/question'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { DomainEvents } from '@/core/events/domain-events'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public questions: Question[] = []

  constructor(
    private questionAttachmentsRepository: QuestionAttachmentsRepository,
  ) {}

  async findById(id: string) {
    const question = this.questions.find(
      (question) => question.id.toString() === id,
    )

    if (!question) return null

    return question
  }

  async findBySlug(slug: string) {
    const question = this.questions.find(
      (question) => question.slug.value === slug,
    )

    if (!question) return null

    return question
  }

  async findManyRecent({ page }: PaginationParams) {
    const questions = this.questions
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20)

    return questions
  }

  async create(data: Question) {
    this.questions.push(data)

    DomainEvents.dispatchEventsForAggregate(data.id)
  }

  async save(data: Question) {
    const questionIndex = this.questions.findIndex(
      (question) => question.id === data.id,
    )

    this.questions[questionIndex] = data

    DomainEvents.dispatchEventsForAggregate(data.id)
  }

  async delete(data: Question) {
    const questionIndex = this.questions.findIndex(
      (question) => question.id === data.id,
    )

    this.questions.splice(questionIndex, 1)

    this.questionAttachmentsRepository.deleteManyByQuestionId(
      data.id.toString(),
    )
  }
}
