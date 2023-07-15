import { Notification } from '../../src/application/entities/notification'
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  readonly notifications: Notification[] = []

  async create(notification: Notification) {
    this.notifications.push(notification)
  }
}
