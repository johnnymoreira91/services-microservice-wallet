import { WalletRepository } from '@repositories/implementations/WalletrRepository'
import { CreateWalletController } from './CreateWalletController'
import { CreateWalletUseCase } from './CreateWalletUseCase'

const walletRepository = new WalletRepository()

const createWalletUseCase = new CreateWalletUseCase(
  walletRepository
)

const createWalletController = new CreateWalletController(
  createWalletUseCase
)

export {
  createWalletController,
  createWalletUseCase
}
