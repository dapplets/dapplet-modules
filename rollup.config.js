import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';

export default [{
    input: 'src/index.ts',
    output: [{
        file: 'build/index.js',
        format: 'esm'
    }],
    plugins: [typescript(), image()],
    external: ['@dapplets/dapplet-extension']
}];