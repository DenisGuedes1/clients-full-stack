import express, { Application } from "express";
import "express-async-errors";
import { handlreErrors } from "./errors/error";
import { contactRouter } from "./routes/Contact Routes/contact.routes";
// import { updateContactRoutes } from "./routes/Contact Routes/update.routes";
import { contactDeleteRouter } from "./routes/Contact Routes/delete.routes";
import { updateContactRoutes } from "./routes/Contact Routes/update.routes";
import { deleteUserRouter } from "./routes/delete.routes";
import { getRouterInfoUser } from "./routes/get.routes";
import { loginRouter } from "./routes/login.routes";
import { updatedRouter } from "./routes/update.routes";
import userRouter from "./routes/users.routes";

const app: Application = express()
app.use(express.json())

app.use('/register', userRouter)
app.use('/login', loginRouter)
app.use('/user/dashboard/update', updatedRouter)
app.use('/user/delete-account',deleteUserRouter)
app.use('/user/info-account', getRouterInfoUser)

app.use('/user/contact', contactRouter)
app.use('/user/contact/edit', updateContactRoutes)
app.use('/user/contact/delete',contactDeleteRouter)
app.use(handlreErrors)
export default app