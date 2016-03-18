// npm is not an acronym 
var app = require('koa')();
var indexRouter = require('./routes/index');
var path = require('path');
var static = require('koa-static');
var mongoose = require('mongoose');
var mongoconf = require('./confs/mongoose');
var render = require('./libs/render');

mongoose.connect(mongoconf.host);

app.use(function* pageNotFound(next) {
    yield next;

    if (404 != this.status) return;

    // we need to explicitly set 404 here
    // so that koa doesn't assign 200 on body=
    this.status = 404;

    switch (this.accepts('html', 'json')) {
        case 'html':
            this.type = 'html';
            this.body = '<p>页面未找到[未匹配任何Koa Router]</p>';
            break;
        case 'json':
            this.body = {
                message: 'Page Not Found[未匹配任何Koa Router]'
            };
            break;
        default:
            this.type = 'text';
            this.body = 'Page Not Found[未匹配任何Koa Router]';
    }
});

app.context.render = render;

app.use(static(path.join(__dirname, 'public')));
app.use(indexRouter.routes());

app.listen(4000);
