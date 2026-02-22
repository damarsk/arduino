import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'
import Device from '#models/device'

export default class DevicesController {
    async index({ inertia }: HttpContext) {
        return inertia.render('Devices/Create')
    }

    async create({ request, response }: HttpContext) {
        const { deviceName, type, endpoint } = request.only(['deviceName', 'type', 'endpoint'])
        // Validator
        const createDeviceValidator = vine.compile(
            vine.object({
                deviceName: vine.string().minLength(3),
                type: vine.string().minLength(3),
                endpoint: vine.string()
            })
        )

        await request.validateUsing(createDeviceValidator)

        await Device.create({
            deviceName,
            type,
            endpoint
        })

        return response.redirect('/dashboard')
    }
}