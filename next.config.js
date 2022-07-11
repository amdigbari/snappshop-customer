/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['design-system', 'share'])

const nextConfig = withTM({
  reactStrictMode: true,
})

module.exports = nextConfig
