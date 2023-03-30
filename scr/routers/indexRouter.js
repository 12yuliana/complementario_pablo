import { Router } from "express";
import { getindex,createindex,actualindex,eliminarindex} from "../controllers/indexController.js";
const router= Router()
router.get('/index',getindex)
router.post('/index',createindex)
router.put('/index',actualindex)
router.delete('/index',eliminarindex)
export default router