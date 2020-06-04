require('dotenv-safe').config()
const whitelist = process.env.CORS_WHITELIST.split(',')

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

module.exports = { corsOptions }