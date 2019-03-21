# front-end-test

Technical test using pure javascript and CSS.
The goal of this project is to render three donut charts, using D3 library.
The architecture uses MVC pattern, having one single view consuming three different models.
Data is consumed from the endpoints:

- https://5c90720d8447f30014cb8425.mockapi.io/api/v1/revenue
- https://5c90720d8447f30014cb8425.mockapi.io/api/v1/impresions
- https://5c90720d8447f30014cb8425.mockapi.io/api/v1/visions

## Get started

- Clone the repository.
- Run `npm install` to install all dependencies.
- Run `gulp default` to generate the bunddle (prerequisite install gulp).
- Open index.html in a browser to see the charts working.

## Build

- Open a terminal in the main folder.
- Run `gulp default`
- Open index.html in a browser to see the changes.

## Watch mode

No need to rebuild after code changes

- Open a terminal in the main folder.
- Run `gulp watch`
- Refresh index.html in the browser to see the changes.

## Run tests

- TBD

## Improvements to be done

- Use of SCSS.
- Styled components instead of global.
- Use of webpack / webpack-dev-server.
- Automatically open the browser when running the application.
