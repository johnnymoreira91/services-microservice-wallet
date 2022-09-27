import { Wallet } from '@entities/Wallet'
import { database } from '@infra/database/knex'
import { WalletModel } from '@infra/model-infra/WalletModel'
import { WalletRepositoryModel } from '@infra/model-infra/WalletRepositoryModel'
import { IWalletRepository } from '@repositories/IWalletrepository'

class WalletRepository implements IWalletRepository {
  async list (): Promise<Wallet[]> {
    return WalletModel.query()
  }

  async findById (wallet_number: string): Promise<Wallet> {
    return WalletModel.query().where('wallet_number', wallet_number).first()
  }

  async update (wallet: Wallet): Promise<Wallet> {
    await database.transaction(async trx => {
      await WalletModel.query(trx).update({ ...wallet })
    })
    return wallet
  }

  async save (wallet: Wallet): Promise<Wallet> {
    await database.transaction(async trx => {
      await WalletModel.query(trx).insert({ ...wallet })
    })
    return wallet
  }

  async deleteById (wallet_number: string): Promise<void> {
    const wallet = await WalletModel.query().where('wallet_number', wallet_number).first()
    await database.transaction(async trx => {
      await WalletModel.query(trx).deleteById(wallet.id)
      const walletRepository = await WalletRepositoryModel.query().where('wallet_number', wallet_number).first()
      await WalletRepositoryModel.query(trx).deleteById(walletRepository.id)
    })
  }
}

export { WalletRepository }
