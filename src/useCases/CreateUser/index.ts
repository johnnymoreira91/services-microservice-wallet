import { UsersRepository } from '@repositories/implementations/WalletrRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const usersRepository = new UsersRepository()

const createUserUseCase = new CreateUserUseCase(
  usersRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export {
  createUserUseCase,
  createUserController
}
