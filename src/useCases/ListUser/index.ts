import { UsersRepository } from '@repositories/implementations/WalletrRepository'
import { ListUserController } from './ListUserController'
import { ListUserUseCase } from './ListUserUseCase'

const usersRepository = new UsersRepository()

const listUserUseCase = new ListUserUseCase(
  usersRepository
)

const listUserController = new ListUserController(
  listUserUseCase
)

export {
  listUserController,
  listUserUseCase
}
