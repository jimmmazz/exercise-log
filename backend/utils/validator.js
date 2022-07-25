import validator from 'validator'

export const validate = (email) => {
    console.log(email)
    return validator.isEmail(email)
}