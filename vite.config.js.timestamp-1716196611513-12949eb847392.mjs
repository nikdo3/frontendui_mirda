// vite.config.js
import { defineConfig } from "file:///C:/Users/lulup/OneDrive/Dokumenty/SUprSkola/frontendui_mirda/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///C:/Users/lulup/OneDrive/Dokumenty/SUprSkola/frontendui_mirda/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\lulup\\OneDrive\\Dokumenty\\SUprSkola\\frontendui_mirda";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      "/api/gql": "http://localhost:33001"
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "src/index.js"),
      name: "FORMS",
      // the proper extensions will be added
      fileName: (format, name) => `${format}/${name}.js`,
      // formats: ['es', 'umd', 'iife']
      formats: ["es", "umd"]
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ['react', 'react-dom', 'react-bootstrap', '@reduxjs/toolkit'],
      // '@reduxjs/toolkit' se nedari da jako externi
      // external: ['react', 'react-dom', 'react-bootstrap', '@reduxjs/toolkit'],
      external: ["react", "react-dom", "@reduxjs/toolkit"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@reduxjs/toolkit": "RTK"
          // "react-bootstrap": "ReactBootstrap",
          // "process": 'JSON.parse("{env:{Node_ENV: ""}}")'
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsdWx1cFxcXFxPbmVEcml2ZVxcXFxEb2t1bWVudHlcXFxcU1VwclNrb2xhXFxcXGZyb250ZW5kdWlfbWlyZGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGx1bHVwXFxcXE9uZURyaXZlXFxcXERva3VtZW50eVxcXFxTVXByU2tvbGFcXFxcZnJvbnRlbmR1aV9taXJkYVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbHVsdXAvT25lRHJpdmUvRG9rdW1lbnR5L1NVcHJTa29sYS9mcm9udGVuZHVpX21pcmRhL3ZpdGUuY29uZmlnLmpzXCI7LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbi8vICAgcGx1Z2luczogW3JlYWN0KCldLFxyXG4vLyAgIGJ1aWxkOiB7XHJcbi8vICAgICAgICBsaWI6IHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwic2hhcmVkXCIsXHJcbi8vICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdsaWIvaW5kZXguanMnKSxcclxuLy8gICAgICAgICAgIC8vIGVudHJ5OiBfX2Rpcm5hbWUgKyAnL2xpYi9pbmRleC5qcycsXHJcbi8vICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddXHJcbi8vICAgICAgICB9XHJcbi8vICAgICB9ICBcclxuLy8gfSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwcm94eToge1xyXG4gICAgICAvLyBzdHJpbmcgc2hvcnRoYW5kOiBodHRwOi8vbG9jYWxob3N0OjUxNzMvZm9vIC0+IGh0dHA6Ly9sb2NhbGhvc3Q6NDU2Ny9mb29cclxuICAgICAgJy9hcGkvZ3FsJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMwMDEnLFxyXG4gICAgfSwgIFxyXG4gIH0sXHJcblxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzXHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5qcycpLFxyXG4gICAgICBuYW1lOiAnRk9STVMnLFxyXG4gICAgICAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxyXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCwgbmFtZSkgPT4gYCR7Zm9ybWF0fS8ke25hbWV9LmpzYCxcclxuICAgICAgLy8gZm9ybWF0czogWydlcycsICd1bWQnLCAnaWlmZSddXHJcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ11cclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcclxuICAgICAgLy8gaW50byB5b3VyIGxpYnJhcnlcclxuICAgICAgLy8gZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LWJvb3RzdHJhcCcsICdAcmVkdXhqcy90b29sa2l0J10sXHJcblxyXG4gICAgICAvLyAnQHJlZHV4anMvdG9vbGtpdCcgc2UgbmVkYXJpIGRhIGpha28gZXh0ZXJuaVxyXG4gICAgICAvLyBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3QtYm9vdHN0cmFwJywgJ0ByZWR1eGpzL3Rvb2xraXQnXSxcclxuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ0ByZWR1eGpzL3Rvb2xraXQnXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgLy8gUHJvdmlkZSBnbG9iYWwgdmFyaWFibGVzIHRvIHVzZSBpbiB0aGUgVU1EIGJ1aWxkXHJcbiAgICAgICAgLy8gZm9yIGV4dGVybmFsaXplZCBkZXBzXHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXHJcbiAgICAgICAgICBcInJlYWN0LWRvbVwiOiAnUmVhY3RET00nLFxyXG4gICAgICAgICAgXCJAcmVkdXhqcy90b29sa2l0XCI6IFwiUlRLXCIsXHJcbiAgICAgICAgICAvLyBcInJlYWN0LWJvb3RzdHJhcFwiOiBcIlJlYWN0Qm9vdHN0cmFwXCIsXHJcbiAgICAgICAgICAvLyBcInByb2Nlc3NcIjogJ0pTT04ucGFyc2UoXCJ7ZW52OntOb2RlX0VOVjogXCJcIn19XCIpJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFdBQVc7QUFIbEIsSUFBTSxtQ0FBbUM7QUFtQnpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUVqQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQSxNQUVMLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQTtBQUFBLE1BRU4sVUFBVSxDQUFDLFFBQVEsU0FBUyxHQUFHLE1BQU0sSUFBSSxJQUFJO0FBQUE7QUFBQSxNQUU3QyxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsSUFDdkI7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPYixVQUFVLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBLE1BQ25ELFFBQVE7QUFBQTtBQUFBO0FBQUEsUUFHTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsVUFDYixvQkFBb0I7QUFBQTtBQUFBO0FBQUEsUUFHdEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
