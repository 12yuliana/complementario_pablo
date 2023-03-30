import { Router } from "express";
import { getUsers,postUsers,putUsers,deleteUsers} from "../controllers/UserController.js";
const router= Router()
router.get('/usuarios',getUsers)
router.post('/usuarios',postUsers)
router.put('/usuarios',putUsers)
router.delete('/usuarios',deleteUsers)
export default router