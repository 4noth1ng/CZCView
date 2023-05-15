import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite'
import Components from 'unplugin-vue-components/vite'
import { QRViewResolver } from './resolver'
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    Components({
      resolvers: [
        (componentName) => {
          // where `componentName` is always CapitalCase
          if (componentName.toLowerCase().includes('ea')) {
            const name = componentName.slice(2)
            const lowercaseName = name.toLowerCase()
            return {
              name,
              from: `@QRView/qr/es`,
              sideEffects: `@QRView/qr/es/src/theme-chalk/${lowercaseName}.css`
            }
          }
        }
      ]
    })
  ]
})
