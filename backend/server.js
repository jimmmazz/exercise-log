import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import exerciseLogRoutes from './routes/exerciseRoutes.js'

const app = express()

dotenv.config()
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

//routes
app.use('/routes/exerciseRoutes', exerciseLogRoutes)

//connect db and port
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => console.log(`dB connected and server running on port ${PORT}`))
})