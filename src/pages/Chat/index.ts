import { Form, RoomCard, Input, Button } from '@/components'
import { ChatLayout } from '@/layouts'

const senders = [
  {
    name: 'John Doe',
    avatarSrc: '',
    lastMessage: {
      text: 'Lorem ipsum',
      time: '12:00',
    },
    unread: 7,
  },
  {
    name: 'Ann White',
    avatarSrc: '',
    lastMessage: {
      text: 'hi how are you?',
      time: '15:45',
    },
  },
]

const arrowIconPath = '../../../static/icons/arrow.svg#arrow'
const field = { placeholder: 'Type your message here...', type: 'text', name: 'message' }

const formProps = {
  children: {
    fields: [new Input(field)],
    button: new Button({ type: 'submit', icon: arrowIconPath }),
  },
}
const roomCards = senders.map((sender) => new RoomCard({ sender }))

export default class Chat {
  constructor() {
    return new ChatLayout({
      children: {
        form: new Form(formProps),
        roomCards,
      },
    })
  }
}
