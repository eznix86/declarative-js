import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    esbuild: {
        minify: true,
        minifySyntax: true
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'declarative-js',
            fileName: (format) => `declarative-js.${format}.js`
        },
    },
})