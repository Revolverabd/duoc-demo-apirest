import mongoose, { ConnectOptions } from 'mongoose'

const dbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_CNN}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    } as ConnectOptions)
    console.log('Connected to Distribution API Database - Initial Connection')
  } catch (error) {
    console.log(error)
    throw new Error('Error connecting to database')
  }
}

export default dbConnection

