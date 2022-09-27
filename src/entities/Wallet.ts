import { v4 as uuidv4 } from 'uuid'

class Wallet {
  public readonly id?: number
  public readonly wallet_number?: string

  public coins: number
  public owner_id: string
  public active: boolean

  constructor (props: Omit<Wallet, 'id' | 'wallet_number'>, wallet_number?: number) {
    Object.assign(this, props)

    if (!wallet_number) {
      this.wallet_number = uuidv4()
    }
  }
}

export { Wallet }
