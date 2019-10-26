# <%= appName %>

<%= description %>

## Setup

If you haven't already, sign in to Sencha's NPM registry:

```
npm login --registry=http://npm.sencha.com --scope=@sencha
```

## Running

Run the following build and run this app:

    npm install
    npm start

This will start the app and open it in a browser window.  By default it tries to find
an open port starting with 8080.  You can override the default port by providing `--env.port=(port)` 
as a command line argument.

For example to use port 8081:

    npm start -- --env.port=8081

You can also run and serve a production build using:

    npm run build
    npm run prod




sencha --sdk /usr/local/ext-7.0.0.156/ generate app --template /usr/local/ext-7.0.0.156/templates/admin-dashboard/ Admin ./Admin;

sencha --sdk /usr/local/ext-7.0.0.156/ generate app classic --template /usr/local/ext-7.0.0.156/templates/admin-dashboard/ Admin ./Admin;
