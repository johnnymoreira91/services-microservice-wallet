import { createWalletController } from '@useCases/CreateWallet'
import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
  return createWalletController.handle(req, res)
})
export default router
