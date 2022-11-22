/** @type {import('next').NextConfig} */
const nextEnv = require('next-env')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
  }
}

module.exports = nextConfig
