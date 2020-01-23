const path = require('path');
const express = require('express');
const ssHelloWorld = require('ss-hello-world-module-incllc');

const app = express(),
            DIST_DIR = __dirname + '/dist',
            HTML_FILE = path.join(DIST_DIR, 'index.html')
            
app.use(express.static(DIST_DIR))

const hw = new ssHelloWorld;
            
app.get('/cs-hello-world', (req, res) => res.sendFile(HTML_FILE));
app.get('/ss-hello-world', (req, res) => res.send(hw.getGreeting()));

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Express application listening to ${port}...`);
    console.log('Press Ctrl+C to terminate process.');
});