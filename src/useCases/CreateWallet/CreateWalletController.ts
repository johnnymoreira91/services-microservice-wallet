import { Request, Response } from 'express'
import { CreateWalletUseCase } from './CreateWalletUseCase'

class CreateWalletController {
  constructor (
    private createWalletUseCase: CreateWalletUseCase
  ) {}

  async handle (req: Request<{}, {}, {
    coins: number, owner_id: string, active: boolean
  }>, res: Response): Promise<Response> {
    const { coins, owner_id, active } = req.body
    try {
      if (!coins || !owner_id || !active) {
        return res.status(400).json({
          error: 'Params is missing'
        })
      }

      const data = await this.createWalletUseCase.execute({
        coins,
        owner_id,
        active: active ?? true
      })
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}

export { CreateWalletController }
