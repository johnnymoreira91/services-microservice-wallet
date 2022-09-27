import { Model } from '@infra/database/knex'

class WalletModel extends Model {
  id: number
  wallet_number: string
  coins: number
  owner_id: string
  active: boolean

  static get tableName () {
    return 'wallet'
  }
}

export { WalletModel }
