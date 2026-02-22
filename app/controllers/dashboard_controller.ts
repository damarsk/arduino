import type { HttpContext } from '@adonisjs/core/http'
import Device from '#models/device'

export default class DashboardController {
    async index({ inertia }: HttpContext) {
        const devices = await Device.all()
        return inertia.render('Home/App', { devices })
    }
}