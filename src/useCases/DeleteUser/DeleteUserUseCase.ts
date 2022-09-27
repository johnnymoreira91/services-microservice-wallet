import { IDeleteUserRequestDTO } from './DeleteUserDTO'
import { IUsersRepository } from '@repositories/IWalletrepository'

class DeleteUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (data: IDeleteUserRequestDTO): Promise<void> {
    await this.usersRepository.deleteById(data.id)
  }
}

export { DeleteUserUseCase }
