import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'

export class InMemoryQuestionAttachmentsRepository implements QuestionAttachmentsRepository {
  public questionAttachments: QuestionAttachment[] = []

  async findManyByQuestionId(questionId: string) {
    const questionAttachment = this.questionAttachments.filter(
      (item) => item.questionId.toString() === questionId,
    )

    return questionAttachment
  }

  async deleteManyByQuestionId(questionId: string) {
    const questionAttachment = this.questionAttachments.filter(
      (item) => item.questionId.toString() !== questionId,
    )

    this.questionAttachments = questionAttachment
  }
}
