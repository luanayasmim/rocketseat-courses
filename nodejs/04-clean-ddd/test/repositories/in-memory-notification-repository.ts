import { NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository'
import { Notification } from '@/domain/notification/enterprise/entities/notification'

export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = []

  async findById(id: string) {
    const notification = this.notifications.find(
      (notification) => notification.id.toString() === id,
    )

    if (!notification) return null

    return notification
  }

  async create(data: Notification) {
    this.notifications.push(data)
  }

  async save(data: Notification) {
    const notificationIndex = this.notifications.findIndex(
      (notification) => notification.id === data.id,
    )

    this.notifications[notificationIndex] = data
  }
}
