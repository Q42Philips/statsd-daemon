# Statsd Daemon

This repository contains a simple statsd UDP server. When you run it on your local machine any other  application emitting StatsD metrics to localhost will end up on the console output of this statsd-deamon.

Handy if you want to verify if your metrics are what you expect them to be.

NOTE: this is by no means a full-fledged statsd aggregator.

## Install
You can install globally for convenience, which will add a `statsd-daemon` executable to your path:
```
$ npm install -g @q42philips/statsd-daemon
```

# Run
If installed globally:
```
$ statsd-daemon
```

Otherwise in this directory:
```
$ npm start
```
