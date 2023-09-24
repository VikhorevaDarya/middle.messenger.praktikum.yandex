import { Chat, SignIn, SignUp, Error404, Error500, Settings } from '../pages'

const routes = [
  {
    pathName: '/',
    page: SignIn,
  },
  {
    pathName: '/sign-up',
    page: SignUp,
  },
  {
    pathName: '/chat',
    page: Chat,
  },
  {
    pathName: '/error-404',
    page: Error404,
  },
  {
    pathName: '/error-500',
    page: Error500,
  },
  {
    pathName: '/setting',
    page: Settings
  }
]

export default routes