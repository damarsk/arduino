import type { HttpContext } from '@adonisjs/core/http'

export default class HandleInertiaRequestsMiddleware {
  async handle({ inertia, session }: HttpContext, next: () => Promise<void>) {
    inertia.share({
      errors: session.flashMessages.get('errors') || {},
    })
    await next()
  }
}