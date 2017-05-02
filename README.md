# Statsd Daemon

This repository contains a simple statsd UDP server. When you run it on your local machine any other  application emitting StatsD metrics to localhost will end up on the console output of this statsd-deamon.

Handy if you want to verify if your metrics are what you expect them to be.

NOTE: this is by no means a full-fledged statsd aggregator.

# run
npm start