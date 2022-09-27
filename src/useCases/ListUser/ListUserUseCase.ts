import { User } from '@entities/User'
import { IUsersRepository } from '@repositories/IWalletrepository'

class ListUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (): Promise<User[]> {
    const users = await this.usersRepository.list()

    if (!users) {
      throw new Error('Any Users found')
    }

    return users
  }
}

export { ListUserUseCase }
