import { AnswerAttachmentsRepository } from '@/domain/forum/application/repositories/answer-attachments-repository'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'

export class InMemoryAnswerAttachmentsRepository implements AnswerAttachmentsRepository {
  public answerAttachments: AnswerAttachment[] = []

  async findManyByAnswerId(answerId: string) {
    const answerAttachment = this.answerAttachments.filter(
      (item) => item.answerId.toString() === answerId,
    )

    return answerAttachment
  }

  async deleteManyByAnswerId(answerId: string) {
    const answerAttachment = this.answerAttachments.filter(
      (item) => item.answerId.toString() !== answerId,
    )

    this.answerAttachments = answerAttachment
  }
}
