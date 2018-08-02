# listen-up

> Stupid Simple Webhook Listeners

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

It's a very rudimentary webhook listening platform that will display your `POST` requests to endpoints in realtime.

You can run it locally and tunnel your requests to port 3030 to see them come through. Or you can deploy it to a platform like hosting platform (I recommend [Zeit Now](https://zeit.co/now)).

## TODO:

There are many things I'd like to do yet with this work in progress. 

- Data persistence
  - Right now data does persist up to 8 hours but it lives in a filesystem db called NEDB. This works for a prototype, but is not good long term (maybe switch to a free/tinker tier of a hosted db would be ideal)
  - When data is stale, the client isn't notified
- UI Improvements
  - Build an actual front end? ;)
  - Add ability to see status of endpoint's lifespan
  

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/listen-up; 
    
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Pull Requests

Sure. If you want to make it better. But really this is just for helping me test and deal with webhooks with work projects.

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
