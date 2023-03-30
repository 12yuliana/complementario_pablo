import express  from "express";
import userRoute from './routers/UserRouter.js'
import indexRouter from './routers/indexRouter.js'
const app = express()
app.use('/api',indexRouter)
app.use('/api',userRoute)

export default app 

