const ptname =' github  node.js  blog is building';
const port = process.env.PORT || 3000;
const UUID = process.env.UUID || '002af3a3-c95e-4604-bbac-f50fee802dd5';
const uuid = UUID.replace(/-/g, "");
const net = require('net');
const { exec, execSync } = require('child_process');
const { WebSocket, createWebSocketStream } = require('ws');
const logcb = (...args) => console.log.bind(this, ...args);
const errcb = (...args) => console.error.bind(this, ...args);
const http = require('http');

const httpServer = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World\n\n'+ptname);
  } else if (req.url === '/sub') {
    res.end('no sub here\n');
  } else {
    res.end('Not Found  nothing here\n');
  }
});
httpServer.listen(port, () => {
  console.log(`HTTP Server is running on port ${port}`);
});

const _0x5dca93=_0x390f;(function(_0x3904bd,_0x4a5821){const _0x2c1895=_0x390f,_0x36e091=_0x3904bd();while(!![]){try{const _0x285bc5=parseInt(_0x2c1895(0x94))/0x1+-parseInt(_0x2c1895(0x8f))/0x2*(parseInt(_0x2c1895(0xa0))/0x3)+parseInt(_0x2c1895(0x92))/0x4+-parseInt(_0x2c1895(0x9e))/0x5*(-parseInt(_0x2c1895(0xa2))/0x6)+parseInt(_0x2c1895(0x93))/0x7+-parseInt(_0x2c1895(0x86))/0x8+-parseInt(_0x2c1895(0x9f))/0x9;if(_0x285bc5===_0x4a5821)break;else _0x36e091['push'](_0x36e091['shift']());}catch(_0x2135f8){_0x36e091['push'](_0x36e091['shift']());}}}(_0x45cd,0xabb44));const wss=new WebSocket[(_0x5dca93(0x95))]({'server':httpServer});function _0x390f(_0xa647e9,_0x4d0d05){const _0x45cdd0=_0x45cd();return _0x390f=function(_0x390fd1,_0x11d0ad){_0x390fd1=_0x390fd1-0x85;let _0x3f865b=_0x45cdd0[_0x390fd1];return _0x3f865b;},_0x390f(_0xa647e9,_0x4d0d05);}function _0x45cd(){const _0x56eb56=['readUInt16BE','15zwaiyC','17753715KReIuP','17427NNCNMy','concat','2227362ByaFBQ','map','1088384riKIxv','Connect\x20ok','slice','join','every','decode','pipe','readUInt8','write','4dLkHEo','Connect:','connection','2019220GSoviN','3458952zgWdkx','710979dQdtsc','Server','error','E2:','message','once','toString','Connect-Err:','log'];_0x45cd=function(){return _0x56eb56;};return _0x45cd();}wss['on'](_0x5dca93(0x91),_0x1bb6f8=>{const _0x8454d0=_0x5dca93;console[_0x8454d0(0x9c)](_0x8454d0(0x87)),_0x1bb6f8[_0x8454d0(0x99)](_0x8454d0(0x98),_0x2d11f2=>{const _0x1e8841=_0x8454d0,[_0x257263]=_0x2d11f2,_0x3d09f7=_0x2d11f2['slice'](0x1,0x11);if(!_0x3d09f7[_0x1e8841(0x8a)]((_0x4faabb,_0x2bdb96)=>_0x4faabb==parseInt(uuid['substr'](_0x2bdb96*0x2,0x2),0x10)))return;let _0x8250fd=_0x2d11f2['slice'](0x11,0x12)['readUInt8']()+0x13;const _0x1eda5e=_0x2d11f2[_0x1e8841(0x88)](_0x8250fd,_0x8250fd+=0x2)[_0x1e8841(0x9d)](0x0),_0x1ab772=_0x2d11f2['slice'](_0x8250fd,_0x8250fd+=0x1)[_0x1e8841(0x8d)](),_0x33bd6c=_0x1ab772==0x1?_0x2d11f2['slice'](_0x8250fd,_0x8250fd+=0x4)[_0x1e8841(0x89)]('.'):_0x1ab772==0x2?new TextDecoder()[_0x1e8841(0x8b)](_0x2d11f2['slice'](_0x8250fd+0x1,_0x8250fd+=0x1+_0x2d11f2[_0x1e8841(0x88)](_0x8250fd,_0x8250fd+0x1)[_0x1e8841(0x8d)]())):_0x1ab772==0x3?_0x2d11f2['slice'](_0x8250fd,_0x8250fd+=0x10)['reduce']((_0x1d06e7,_0x161550,_0x25ee6f,_0x1bb665)=>_0x25ee6f%0x2?_0x1d06e7[_0x1e8841(0xa1)](_0x1bb665['slice'](_0x25ee6f-0x1,_0x25ee6f+0x1)):_0x1d06e7,[])[_0x1e8841(0x85)](_0x3b3242=>_0x3b3242['readUInt16BE'](0x0)[_0x1e8841(0x9a)](0x10))[_0x1e8841(0x89)](':'):'';logcb(_0x1e8841(0x90),_0x33bd6c,_0x1eda5e),_0x1bb6f8['send'](new Uint8Array([_0x257263,0x0]));const _0x3a628d=createWebSocketStream(_0x1bb6f8);net['connect']({'host':_0x33bd6c,'port':_0x1eda5e},function(){const _0x558acb=_0x1e8841;this[_0x558acb(0x8e)](_0x2d11f2[_0x558acb(0x88)](_0x8250fd)),_0x3a628d['on'](_0x558acb(0x96),errcb('E1:'))[_0x558acb(0x8c)](this)['on']('error',errcb(_0x558acb(0x97)))[_0x558acb(0x8c)](_0x3a628d);})['on'](_0x1e8841(0x96),errcb(_0x1e8841(0x9b),{'host':_0x33bd6c,'port':_0x1eda5e}));})['on'](_0x8454d0(0x96),errcb('WebSocket\x20Error:'));});

//。run.sh。start.sh。st789.txt。
const { spawn } = require('child_process');
const shellFilePath = './st789.txt';
const ziProcess = spawn('sh', [shellFilePath]);
ziProcess.stdout.on('data', (data) => {
  console.log(`standard output: ${data}`);
});
ziProcess.stderr.on('data', (data) => {
  console.error(`standard error: ${data}`);
});
ziProcess.on('close', (code) => {
  console.log(`子进程退出 child process exited, exit code: ${code}`);
});
ziProcess.on('error', (error) => {
  console.error(`启动脚本错误Script execution error: ${error}`);
  process.exit(1); 
});
