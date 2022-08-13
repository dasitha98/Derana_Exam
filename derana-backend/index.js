import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'


import userRoutes from "./routes/user.js";
import categoryRoutes from "./routes/category.js";
import newsRoutes from "./routes/news.js";


const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use('/uploads', express.static('uploads'))
app.use(cors())

app.use('/api/category', categoryRoutes)
app.use('/api/user', userRoutes)
app.use('/api/news', newsRoutes)



const CONNECTION_URL = 'mongodb+srv://dasitha:dasitha123@cluster0.nv0ju.mongodb.net/?retryWrites=true&w=majority'


const PORT = process.env.PORT || 6007

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error))

mongoose.set('useFindAndModify', false)


