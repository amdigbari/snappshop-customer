/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['share'])

const nextConfig = withTM({
  reactStrictMode: true,
})

module.exports = nextConfig
