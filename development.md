Debugging
---

Run the following command to invoke the start command along the following config

The parameters that to be passed in each of the config can be seen in lib/cli.js

`node --inspect-brk ./lib/cli.js start ./static -c ./ssr.config.js -p 5000`

Once started the following img will be shown

![node inspect brk](/media/node-inspect-brk-started.png "node inspect brk started")

Open the browser, and you should be able to see a node debugger

![node debugger icon](/media/node_debugger.png "node debugger screeshot in dev tools")

Once the debugger is attached, it will pause at the first line in the entry point of the code, you can debug accordingly

![node debugger paused](/media/debugger-paused.png "node debugger paused in dev tools")
