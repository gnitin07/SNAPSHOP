require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/authRoutes')
const connectDb = require('./config/db')
const cartRouter = require('./routes/cartRoutes')
const app = express()

// Use the port Render gives you, or default to 3000 locally
const port = process.env.PORT || 3000



connectDb()

app.use(express.json())
// index.js

app.use(cors({
    origin: [
        'https://snapshop-frontend.vercel.app/register', // Replace with your actual Vercel link
        'http://localhost:5173'                 // Keep this for local development
    ],
    credentials: true
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