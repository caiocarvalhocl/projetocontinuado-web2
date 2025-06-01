class Middlewares {
  logRegister(req, res, next) {
    console.log(req.url + req.method + new Date());
    next();
  }
  sessionControl(req, res, next) {
    console.log(req.session);
    if (req.session.user != undefined) next();
    else if (req.url == "/ " && req.method == " GET ") next();
    else if (req.url == "/ login " && req.method == " POST ") next();
    else res.redirect("/home");
  }
}

export const middlewares = new Middlewares();
