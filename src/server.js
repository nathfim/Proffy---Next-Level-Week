const express = require('express');
const app = express();

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: app,
    noCache: true,
});


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", pageLanding);
app.get("/study", pageStudy);
app.get("/give-classes", pageGiveClasses);
app.post("/save-classes", saveClasses);
app.listen(1234);
