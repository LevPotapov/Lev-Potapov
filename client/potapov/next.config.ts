import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'potapov.fr',
                port: '',
                pathname: '/**',
            },
        ],
    },
    productionBrowserSourceMaps: true,
}

export default nextConfig
