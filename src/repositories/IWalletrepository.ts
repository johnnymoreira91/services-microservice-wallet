import { Wallet } from '@entities/Wallet'

export interface IWalletRepository {
  list(): Promise<Wallet[]>;
  findById(wallet_number: string): Promise<Wallet>;
  findByOwner(owner_id: string): Promise<Wallet>;
  update(wallet: Wallet): Promise<Wallet>;
  save(wallet: Wallet): Promise<Wallet>;
  deleteById(wallet_number: string): Promise<void>;
}
