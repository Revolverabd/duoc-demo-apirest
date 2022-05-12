import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  dni: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  avatar: { type: String, default: '' },
  birthDate: Date,
  mobilePhone: String,
  address: String,
  postalCode: String,
  city: String,
  state: String,
  country: String,
  biography: {
    alias: String,
    profession: String,
    hobby: String,
    aboutMe: String,
    hadPets: String,
    publicUrl: String
  },
  socialNetwork: [{
    name: String,
    publicUrl: String
  }],
  createdDate: { type: Date, default: new Date().toISOString() },
  updatedDate: Date
})

userSchema.index({ dni: 1 })

userSchema.set('toObject', { virtuals: true })
userSchema.set('toJSON', { virtuals: true })


export default mongoose.model('users', userSchema)
