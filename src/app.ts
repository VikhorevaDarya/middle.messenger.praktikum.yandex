import './styles/globals.scss'

import '@/components'
import '@/layouts'

import { Router } from '@/router'
import { Settings, Chat, NotFound, ServerError, SignIn, SignUp } from '@/pages'

const pages = [
  {
    path: '/settings',
    source: Settings,
  },
  {
    path: '/chat',
    source: Chat,
  },
  {
    path: '/not-found',
    source: NotFound,
  },
  {
    path: '/server-error',
    source: ServerError,
  },
  {
    path: '/sign-up',
    source: SignUp,
  },
  {
    path: '/sign-in',
    source: SignIn,
  },
]

const router = new Router()

pages.forEach((page) => router.use(page))
