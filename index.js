require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/authRoutes')
const connectDb = require('./config/db')
const cartRouter = require('./routes/cartRoutes')
const app = express()


const port = process.env.PORT || 3000



connectDb()

app.use(express.json())
// index.js

app.use(cors({
    origin: [
        'https://snapshop-frontend.vercel.app', 
        'http://localhost:5173'                 
    ],
    
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
    allowedHeaders: ["Content-Type", "Authorization"]     
}))
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/cart",cartRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`)
})