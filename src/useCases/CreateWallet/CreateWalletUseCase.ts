import { Wallet } from '@entities/Wallet'
import { IWalletRepository } from '@repositories/IWalletrepository'
import { ICreateWalletRequestDTO } from './CreateWalletDTO'

class CreateWalletUseCase {
  constructor (
    private walletRepository: IWalletRepository
  ) {}

  async execute (data: ICreateWalletRequestDTO): Promise<Wallet> {
    const walletAlreadyExist = await this.walletRepository.findByOwner(data.owner_id)

    if (walletAlreadyExist) {
      throw new Error('User already has a wallet')
    }

    const wallet = new Wallet(data)
    await this.walletRepository.save(wallet)
    return this.walletRepository.findByOwner(data.owner_id)
  }
}

export { CreateWalletUseCase }
