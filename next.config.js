/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['design', 'utils'])

const nextConfig = withTM({
  reactStrictMode: true,
})

module.exports = nextConfig
