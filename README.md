# RemoteAssistance website
The website for the RemoteAssistance app

## CI build and deployment
This project is automatically built and deployed by CircleCI upon commit to github

## Manual build and deploy
- `npm install`
- test locally with `npm run start`
- build for production with `npm run build`
- hosted on firebase hosting
- run `npm run deploy` to deploy

## Firebase (dependency)
[docs](https://firebase.google.com/docs/hosting/quickstart)

- `npm install -g firebase-tools`
- in root of project `firebase login`
- to show all projects you have access to `firebase list`
- `firebase use <project_id>`
