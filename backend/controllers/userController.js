import User from '../models/UserModels.js'
import { validate } from '../utils/validator.js'

export const userLogin = async (req, res) => {
    const {email, password} = req.body
    const vEmail = validate(email._value)
    
    try {
      if(vEmail) {
        const user = await User.login(email._value, password._value)
        res.status(200).json(user)
      
      } else {
        throw new Error('Invalid email format')
      }
    } catch (error) {
        res.status(400).json({error: error.message})
      }
  }

export const userSignup = async (req, res) =>{
  try {
    const {email, password} = req.body
      
        // create a token
      //   const token = createToken(user._id)

  } catch (error) {
    console.log(error)
  }
}


