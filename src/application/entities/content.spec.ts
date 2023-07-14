import { Content } from './content'

describe('Notification content', () => {
  it('should be able to create a new notification content', () => {
    const content = new Content('a'.repeat(240))

    expect(content).toBeTruthy()
    expect(content.value).toEqual(content.value)
  })

  it('should not be able to create a new notification content with less than 5 characters', () => {
    expect(() => new Content('a')).toThrowError()
  })

  it('should not be able to create a new notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrowError()
  })
})
