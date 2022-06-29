import hmacSHA512 from 'crypto-js/hmac-sha512'

const SALT = process.env.REACT_APP_SALT

export const hashPassword = (password: string): string => {
  if (SALT) {
    const encryptedPassword = hmacSHA512(password, SALT)
    return String(encryptedPassword)
  }

  return password
}
