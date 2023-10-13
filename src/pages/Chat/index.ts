import { Form, RoomCard } from '@/components'
import { MainLayout } from '@/layouts'

import './styles.scss'

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

const field = { placeholder: 'Type your message here...', type: 'text', name: 'message' }
const formProps = {
  fields: [field],
  submitClassName: 'chat__submit',
  inputProps: {
    type: 'textarea',
    additionalClass: 'chat__input',
    placeholder: 'Type your message here...',
  },
}
const roomCards = senders.map((sender) => new RoomCard(sender))
const arrowIconPath = '../../../static/icons/arrow.svg#arrow'

export default class Chat {
  constructor() {
    return new MainLayout({
      children: {
        form: new Form(formProps),
        roomCards,
      },
    })
  }
}
