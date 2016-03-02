require('babel-core/register')

const app = require('./server').default

const port = process.env.PORT || 3333

app.listen(port, (error) => {
  if (error) throw error
  console.log(`Listening at localhost:${port}`)
});

// const routes = require('./server/routes');
// const React = require('react');
// const {RoutingContext, match} = require('react-router');
// const ReactRouter = require('react-router');
// const RoutingContext = require('react-router').RoutingContext;
// const hist = require('history');
//
// app.use((req, res, next) => {
//   const location = hist.createLocation(req.path);
//   ReactRouter.match({
//     routes: routes,
//     location: location,
//   }, (err, redirectLocation, renderProps) => {
//     if (redirectLocation) {
//       res.redirect(301, redirectLocation.pathname + redirectLocation.search);
//     } else if (err) {
//       console.log(err);
//       next(err);
//       // res.send(500, error.message);
//     } else if (renderProps === null) {
//       res.status(404)
//         .send('Not found');
//     } else {
//       res.send('<!DOCTYPE html>' + React.renderToString(<routes {...renderProps}/>));
//     }
//   });
// });
