import { UsersRepository } from '@repositories/implementations/WalletrRepository'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserUseCase } from './DeleteUserUseCase'

const usersRepository = new UsersRepository()

const deleteUserUseCase = new DeleteUserUseCase(
  usersRepository
)

const deleteUserController = new DeleteUserController(
  deleteUserUseCase
)

export {
  deleteUserController,
  deleteUserUseCase
}
