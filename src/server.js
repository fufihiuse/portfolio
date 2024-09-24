const http = require('http');
const htmlHandler = require('./htmlHandler.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': htmlHandler.getIndex,
  '/style.css': htmlHandler.getCSS,
  index: htmlHandler.getIndex,
  default: htmlHandler.getIndex,
};

const onRequest = (request, response) => {
  const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);

  const handler = urlStruct[parsedUrl.pathname];
  if (handler) {
    handler(request, response);
  } else {
    htmlHandler.getIndex(request, response); // 404?
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
