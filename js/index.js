const mermaid = require("mermaid")

// ENTER AND LEAVE FULLSCREEN
nw.App.registerGlobalHotKey(new nw.Shortcut({
    key: "F11",
    active: function () {
      nw.Window.get().toggleFullscreen()
    }
  }));