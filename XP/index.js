const http = require('http')
const fs = require('fs')


const fullpage = `!function(t,n){"use strict";var i=function(){function t(t,n){this.$el=t,this.currIndex=0,this.animating=!1,this.init()}var i={throttle:function(t,n,i){var e=null,o=0;return function(){var r=this,s=arguments,c=Date.now();i&&c-o>=i?(o=c,t.apply(r,s)):(e&&clearTimeout(e),e=setTimeout(function(){t.apply(r,s)},n))}}};return t.prototype={constructor:t,init:function(){this.initHTML(),this.bindEvent()},initHTML:function(){this.$el.children().css({height:"100vh",transition:"all 0.7s","-webkit-transition":"all 0.7s"})},bindEvent:function(){var t,e,o,r,s,c,h=this;n(window).on("wheel DOMMouseScroll",i.throttle(function(){var n=arguments[0].originalEvent;c=n.wheelDelta?n.wheelDelta:-n.detail,t=h.currIndex+(c>0?-1:1),h.gotoTarget(t)},100)),this.$el.on("touchstart",function(t){e=t.touches[0].clientX,o=t.touches[0].clientY}),this.$el.on("touchmove",i.throttle(function(){console.log("move");var n=arguments[0];e&&o&&(r=n.touches[0].clientX-e,s=n.touches[0].clientY-o,t=h.currIndex+(s>0?-1:1),h.gotoTarget(t))},16))},gotoTarget:function(t){var i,e=this.$el.children(),o=this;this.animating||t<0||t>this.$el.children().length-1||(i="translateY(-"+100*t+"%)",this.animating=!0,n(e[0]).on("transitionend",function t(){this.removeEventListener("transitionend",t),o.animating=!1}),e.css({transform:i,"-webkit-transform":i}),this.currIndex=t)}},t}();n.fn.fullpage=function(t){return this.each(function(){new i(n(this),t)}),this}}(0,this.jQuery);`;
http.createServer((req, res) =>{
    switch (req.url) {
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'});
            let myFileHtml = fs.readFileSync('main.html');
            res.end(myFileHtml);

        case '/app.css':
            res.writeHead(200,{'Content-Type':'text/css'});
            let myFileCss = fs.readFileSync('style.css');
            res.end(myFileCss);
        case '/app.cssSign':
            res.writeHead(200,{'Content-Type':'text/css'});
            let myFileCssSign = fs.readFileSync('sign.css');
            res.end(myFileCssSign);
        case '/app.js1':
            res.writeHead(200,{'Content-Type':'text/js'});
            let myFileJs1 = fs.readFileSync('script1.js');
            res.end(myFileJs1);
        case '/app.js2':
            res.writeHead(200,{'Content-Type':'text/js'});
            let myFileJs2 = fs.readFileSync('script2.js');
            res.end(myFileJs2);
        case '/app.js3':
            res.writeHead(200,{'Content-Type':'text/js'});
            let myFileJs3 = fs.readFileSync('script3.js');
            res.end(myFileJs3);
        case '/app.jsSign':
            res.writeHead(200,{'Content-Type':'text/js'});
            let myFileJsSign = fs.readFileSync('sign.js');
            res.end(myFileJsSign);

        case '/app.fullpage':
            res.writeHead(200,{'Content-Type':'text/js'});
            res.end(fullpage);

        case '/app.lab1':
            res.writeHead(200,{'Content-Type':'text/html'});
            let myFile1 = fs.readFileSync('lab1.html');
            res.end(myFile1);
        case '/app.lab2':
            res.writeHead(200,{'Content-Type':'text/html'});
            let myFile2 = fs.readFileSync('lab2.html');
            res.end(myFile2);
        case '/app.lab3':
            res.writeHead(200,{'Content-Type':'text/html'});
            let myFile3 = fs.readFileSync('lab3.html');
            res.end(myFile3);
        case '/app.lab4':
            res.writeHead(200,{'Content-Type':'text/html'});
            let myFile4 = fs.readFileSync('lab4.html');
            res.end(myFile4);
        case '/app.bg':
            res.writeHead(200,{'Content-Type':'photo/png'});
            let bg = fs.readFileSync('bg.png');
            res.end(bg);
        default:
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('404 Не знайдено');
    }
}).listen(3000,() =>{console.log('Server has been started....')});