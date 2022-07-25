import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.login = async function(email, password) {

//returns user if exist
    const response = await this.findOne({email: email})

//verifies a user and if password matches
    if (response === null || response.password !== password) {
        // console.log('error')
      return ({error: 'Not a valid email or password'})
    }

//
    // const match = await bcrypt.compare(password, user.password)
    // if (!match) {
    //   throw Error('Incorrect password')
    // }

    return response
  }
export default mongoose.model('User', userSchema)