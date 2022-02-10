import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const apiUrl = "127.0.0.1:3000";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 设置为'0.0.0.0' 所有网卡都会启动服务
    host: "0.0.0.0",
    // 服务端口
    port: 8080,
    // 设置是否为https
    https: false,
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    strictPort: false,
    // 设置默认打开页面
    // open:'/index.html'
    // 设置接口代理，下发为/api转发到服务端
    proxy: {
      "/api": {
        target: apiUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    // 热更新
    hmr: {
      // 设置为false时，编译错误时不弹出屏蔽层
      overlay: true,
    },

    // 为开发服务器配置 CORS。默认启用并允许任何源
    cors: false,
    // 设置origin
    origin: "http://127.0.0.1:8080/",
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false
      },
    },
  },
  build: {
    // 打包路径
    outDir: "dist",

    // 打包混淆 'terser' | 'esbuild',设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Esbuild
    minify: false,
  },
});
