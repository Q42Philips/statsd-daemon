# Statsd Daemon

This is a simple statsd UDP server which can receive the telemetry emitted by your local statsd clients. When you run it on your machine any other application emitting StatsD metrics to localhost will end up on the console output of this statsd-deamon:

![Awesome console output](https://cloud.githubusercontent.com/assets/570645/26489437/a80df072-4207-11e7-9c20-b1cfaa7e60d0.png)

This is especially usefull if you want to verify your applications behaviour locally before shipping and having to rely on the roundtrip with your time series database accumulating your metrics. There is no aggregation being done; the metrics are piped to the console with some color coding enhancement.

## Usage

### Install
You can install globally for convenience, which will add a `statsd-daemon` executable to your path:
```
$ npm install -g @q42philips/statsd-daemon
```

### Run
If installed globally:
```
$ statsd-daemon
```

Otherwise in this directory:
```
$ npm start
```

## Contributing


### Local development

You can also create a symlink in your global node modules, making the `statsd-daemon` binary globally accessible. Note that this only works if you first uninstall the NPM version
``` bash
$ npm uninstall -g @q42philips/statsd-daemon
$ npm link
$ statsd-daemon
```

And then after testing, just run
``` bash
$ npm unlink
$ npm install -g @q42philips/statsd-daemon
```

### Creating a new release
After PRs are merged to master, you can create a new version using NPM. Please carefully check the changes made since the last release and [choose your update type accordingly](http://semver.org/), then create a new version using the command below. This will succeed only if the tests pass, to avoid versioning broken code. It will also push the newly created tag to this repository.
``` bash
$ npm version <major|minor|patch>
```

After creating a new version, you may publish it to the npm registry using the following command, which will automatically compile it using babel before publishing:
``` bash
$ npm publish
```

Finally, please take the time to add a changelog to the newly created release on Github, noting the new features, fixes or other notable stuff.


### LICENSE

MIT License