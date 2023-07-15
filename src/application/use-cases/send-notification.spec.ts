import { SendNotification } from './send-notification'
import { Notification } from '../entities/notification'

const notifications: Notification[] = []

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification)
  },
}

describe('SendNotification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository)
    await sendNotification.execute({
      recipientId: 'example',
      content: 'content',
      category: 'category',
    })

    expect(notifications).toHaveLength(1)
  })
})
