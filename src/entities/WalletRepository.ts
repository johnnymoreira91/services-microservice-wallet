import { v4 as uuidv4 } from 'uuid'

class WalletRepository {
  public readonly id?: number
  public readonly public_id?: string

  public wallet_number: string
  public coins: number

  constructor (props: Omit<WalletRepository, 'id' | 'public_id'>, public_id?: number) {
    Object.assign(this, props)

    if (!public_id) {
      this.public_id = uuidv4()
    }
  }
}

export { WalletRepository }
