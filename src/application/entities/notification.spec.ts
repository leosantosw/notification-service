import { Content } from './content'
import { Notification } from './notification'

describe('Notification', () => {
  it('should be able to create a new notification', () => {
    const notification = new Notification({
      recipientId: 'recipientId',
      content: new Content('a'.repeat(100)),
      category: 'course',
    })

    expect(notification).toBeTruthy()
  })
})
