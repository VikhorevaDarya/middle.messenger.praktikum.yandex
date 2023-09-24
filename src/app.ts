import './styles/globals.scss'
import '@/pages'
import '@/components'

//import { Chat, SignIn, SignUp, Error404, Error500, Settings } from './pages'
import { Router, routes } from './router'

//const pages = [Chat, SignIn, SignUp, Error404, Error500, Settings]

// pages.forEach((page) => Router.use(page))

const router = new Router()

routes.forEach((route) => router.renderPage(route))
