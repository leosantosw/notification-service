import { SendNotification } from './send-notification'
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository'

describe('SendNotification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository)
    await sendNotification.execute({
      recipientId: 'example',
      content: 'content',
      category: 'category',
    })

    expect(notificationsRepository.notifications).toHaveLength(1)
  })
})
