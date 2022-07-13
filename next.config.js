/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['design'])

const nextConfig = withTM({
  reactStrictMode: true,
})

module.exports = nextConfig
