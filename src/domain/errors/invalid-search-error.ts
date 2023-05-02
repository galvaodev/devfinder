/* eslint-disable @typescript-eslint/space-before-function-paren */
export class InvalidSearchError extends Error {
  constructor() {
    super('Credenciais inválidas')
    this.name = 'InvalidSearchError'
  }
}
