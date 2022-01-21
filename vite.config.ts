// @ts-ignore
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default (
  { mode } // vite配置文件中环境变量可以以如下方式取到
) =>
  defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    base: mode === "development" ? "/" : "./", //此时把环境打包路径也配置好，避免生产环境打包出现白屏
    server: {
      port: 8888,
    },
    resolve: {
      alias: {
        // @ts-ignore
        "@": resolve(__dirname, "/src"),
      },
    },
  });
