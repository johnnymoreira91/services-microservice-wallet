import { Model } from '@infra/database/knex'

class WalletRepositoryModel extends Model {
  id: number
  public_id: string
  wallet_number: string
  coins: number

  static get tableName () {
    return 'wallet_repository'
  }
}

export { WalletRepositoryModel }
