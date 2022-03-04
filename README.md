# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

EJ note: I first created this site by running

    npx create-docusaurus@latest my-website classic

### Installation

```
$ yarn
```

EJ note: `npm install .` (only needed in new clone)

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

EJ note: `npm start`

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

EJ note: `npm run build`

Test the build with: `npm run serve`

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
