import { SendNotification } from './send-notification'

describe('SendNotification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification()
    const { notification } = await sendNotification.execute({
      recipientId: 'example',
      content: 'content',
      category: 'category',
    })

    expect(notification).toBeTruthy()
  })
})
