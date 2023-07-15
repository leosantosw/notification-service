import { SendNotification } from './send-notification'
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository'

describe('SendNotification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository)
    const { notification } = await sendNotification.execute({
      recipientId: 'example',
      content: 'content',
      category: 'category',
    })

    expect(notificationsRepository.notifications).toHaveLength(1)
    expect(notificationsRepository.notifications[0]).toEqual(notification)
  })
})
