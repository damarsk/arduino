import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import vine from '@vinejs/vine'

const loginValidator = vine.compile(
    vine.object({
        email: vine.string().email(),
        password: vine.string().minLength(8)
    })
)

export default class AuthController {
    async loginPage({ inertia }: HttpContext) {
        return inertia.render('Auth/Login')
    }

    async login({ request, response, auth, session }: HttpContext) {
        const { email, password } = await request.validateUsing(loginValidator)

        try {
            const user = await User.verifyCredentials(email, password)
            await auth.use('web').login(user)
            return response.redirect('/')
        } catch (e) {
            session.flash('errors', { message: "Invalid email or password" })
            return response.redirect('/login')
        }
    }

    async logout({ auth, response }: HttpContext) {
        await auth.use('web').logout()
        return response.redirect('/login')
    }
}