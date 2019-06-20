# NY Times Most Popular Articles

Sample application for fetching and displaying NY Times articles using React Native (Expo)

Sample app is published to expo host: [https://expo.io/@martin.bielik/ny-times-news](https://expo.io/@martin.bielik/ny-times-news).
You can try it by scaning QR code with Expo app on Android.


## Configuration

App can be configured via environment variables (see `./src/app/config.js`)

## Available Scripts

In the project directory, you can run:

### `API_KEY=sample-key yarn start`

Runs the app in the development.
Key for nytimes API needs to be set here as environment variable.

Note: to apply new configuration it is sometimes needed to clear expo's cache (run command with `--clear` flag)

### `yarn test`

Runs the tests.

### `yarn test --coverage`

Runs the tests and creates coverage report.
Open `./coverage/lcov-report/index.html` to view it in the browser.

## Learn more

You can learn more in [Expo documentation](https://docs.expo.io/versions/v33.0.0/workflow/up-and-running/)
