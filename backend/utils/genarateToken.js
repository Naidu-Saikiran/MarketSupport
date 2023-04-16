import jwt from 'jsonwebtoken'
import * as dotenv from "dotenv"
dotenv.config()
console.log(process.env.REACT_APP_JWT_SECRET)

const generteToken = (id) => {
    return jwt.sign({ id }, process.env.REACT_APP_JWT_SECRET, {
        expiresIn: '30d'
    })
}

export default generteToken