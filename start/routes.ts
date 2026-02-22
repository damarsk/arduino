/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const AuthController = () => import('#controllers/auth_controller')
const DashboardController = () => import('#controllers/dashboard_controller')
const DevicesController = () => import('#controllers/devices_controller')

router.group(() => {
  router.get('/login', [AuthController, 'loginPage'])
  router.post('/login', [AuthController, 'login'])
}).use(middleware.guest())

router.group(() => {
  router.get('/dashboard', [DashboardController, 'index'])
  router.get('/devices/create', [DevicesController, 'index'])
  router.post('/devices/create', [DevicesController, 'create'])
  router.post('/logout', [AuthController, 'logout'])
}).use(middleware.auth())
