const path = require('path')
require('dotenv').config()
module.exports = {
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        EMAIL: process.env.EMAIL,
        EMAIL_PASS: process.env.EMAIL_PASS,
        TEMP_POST_PASS: process.env.TEMP_POST_PASS,
        SUBS_EMAIL: process.env.SUBS_EMAIL,
        PLAYLISTID: process.env.PLAYLISTID,
        YTAPIKEY: process.env.YTAPIKEY,
        NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}