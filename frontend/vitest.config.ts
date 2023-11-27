import { UserConfig, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig as UserConfig, defineConfig({
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts',
  },
}))
