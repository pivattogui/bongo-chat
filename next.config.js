const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  ...nextTranslate(),
}

module.exports = nextConfig
