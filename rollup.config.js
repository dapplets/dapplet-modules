import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import fs from 'fs';

export default fs.readdirSync('packages').map(packageName => ({
    input: `packages/${packageName}/src/index.ts`,
    output: [{
        file: `packages/${packageName}/build/index.js`,
        format: 'cjs',
        exports: 'named'
    }],
    plugins: [typescript(), image()],
    external: ['@dapplets/dapplet-extension']
}));