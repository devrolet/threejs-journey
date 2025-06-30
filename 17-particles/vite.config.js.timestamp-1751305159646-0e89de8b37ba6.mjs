// vite.config.js
import restart from "file:///Users/chethill/Documents/courses/threejs-journey/17-particles/node_modules/vite-plugin-restart/dist/index.js";
var vite_config_default = {
  root: "src/",
  // Sources files (typically where index.html is)
  publicDir: "../static/",
  // Path from "root" to static assets (files that are served as they are)
  server: {
    host: true,
    // Open to local network and display URL
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env)
    // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist",
    // Output in the dist/ folder
    emptyOutDir: true,
    // Empty the folder first
    sourcemap: true
    // Add sourcemap
  },
  plugins: [
    restart({ restart: ["../static/**"] })
    // Restart server on static file change
  ]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hldGhpbGwvRG9jdW1lbnRzL2NvdXJzZXMvdGhyZWVqcy1qb3VybmV5LzE3LXBhcnRpY2xlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoZXRoaWxsL0RvY3VtZW50cy9jb3Vyc2VzL3RocmVlanMtam91cm5leS8xNy1wYXJ0aWNsZXMvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZXRoaWxsL0RvY3VtZW50cy9jb3Vyc2VzL3RocmVlanMtam91cm5leS8xNy1wYXJ0aWNsZXMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcmVzdGFydCBmcm9tICd2aXRlLXBsdWdpbi1yZXN0YXJ0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdDogJ3NyYy8nLCAvLyBTb3VyY2VzIGZpbGVzICh0eXBpY2FsbHkgd2hlcmUgaW5kZXguaHRtbCBpcylcbiAgICBwdWJsaWNEaXI6ICcuLi9zdGF0aWMvJywgLy8gUGF0aCBmcm9tIFwicm9vdFwiIHRvIHN0YXRpYyBhc3NldHMgKGZpbGVzIHRoYXQgYXJlIHNlcnZlZCBhcyB0aGV5IGFyZSlcbiAgICBzZXJ2ZXI6XG4gICAge1xuICAgICAgICBob3N0OiB0cnVlLCAvLyBPcGVuIHRvIGxvY2FsIG5ldHdvcmsgYW5kIGRpc3BsYXkgVVJMXG4gICAgICAgIG9wZW46ICEoJ1NBTkRCT1hfVVJMJyBpbiBwcm9jZXNzLmVudiB8fCAnQ09ERVNBTkRCT1hfSE9TVCcgaW4gcHJvY2Vzcy5lbnYpIC8vIE9wZW4gaWYgaXQncyBub3QgYSBDb2RlU2FuZGJveFxuICAgIH0sXG4gICAgYnVpbGQ6XG4gICAge1xuICAgICAgICBvdXREaXI6ICcuLi9kaXN0JywgLy8gT3V0cHV0IGluIHRoZSBkaXN0LyBmb2xkZXJcbiAgICAgICAgZW1wdHlPdXREaXI6IHRydWUsIC8vIEVtcHR5IHRoZSBmb2xkZXIgZmlyc3RcbiAgICAgICAgc291cmNlbWFwOiB0cnVlIC8vIEFkZCBzb3VyY2VtYXBcbiAgICB9LFxuICAgIHBsdWdpbnM6XG4gICAgW1xuICAgICAgICByZXN0YXJ0KHsgcmVzdGFydDogWyAnLi4vc3RhdGljLyoqJywgXSB9KSAvLyBSZXN0YXJ0IHNlcnZlciBvbiBzdGF0aWMgZmlsZSBjaGFuZ2VcbiAgICBdLFxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFcsT0FBTyxhQUFhO0FBRWhZLElBQU8sc0JBQVE7QUFBQSxFQUNYLE1BQU07QUFBQTtBQUFBLEVBQ04sV0FBVztBQUFBO0FBQUEsRUFDWCxRQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU0sRUFBRSxpQkFBaUIsUUFBUSxPQUFPLHNCQUFzQixRQUFRO0FBQUE7QUFBQSxFQUMxRTtBQUFBLEVBQ0EsT0FDQTtBQUFBLElBQ0ksUUFBUTtBQUFBO0FBQUEsSUFDUixhQUFhO0FBQUE7QUFBQSxJQUNiLFdBQVc7QUFBQTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFNBQ0E7QUFBQSxJQUNJLFFBQVEsRUFBRSxTQUFTLENBQUUsY0FBZ0IsRUFBRSxDQUFDO0FBQUE7QUFBQSxFQUM1QztBQUNKOyIsCiAgIm5hbWVzIjogW10KfQo=
