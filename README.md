#Broccoli Trial Run
***

## Objective
I am working on a boiler plate for building Ember apps using [Broccoli](https://github.com/joliss/broccoli). I know that the ember-cli exists but I would like to get a hold of Broccoli and maybe ES6 works before I jump into that. I am in the beginning stages, so I appologize if any of these issues seem overly simple.

In the end I would like it to:
- pull in bower dependencies into `lib`
- compile and concatinate  `/app`, `/app/templates`,and `libs` into `dist/app.js`
- translate SASS to css in the `/scss` and concatinate everything in `/css` into `/dist/app.css`

## Current Issues

- [When I type `broccoli serve` I get the following error:](https://github.com/cullymason/ember-broccoli-starter-kit/issues/1)

    ```bash
    Built with error:
    Error: ENOENT, no such file or directory 'tmp/static_compiler-tmp_dest_dir-JjclDVEm.tmp/undefined'
    at Object.fs.statSync (fs.js:684:18)
    at addLegacyFile (/Users/cully/Sites/ember-todo/node_modules/broccoli-es6-concatenator/index.js:130:44)
    at /Users/cully/Sites/ember-todo/node_modules/broccoli-es6-concatenator/index.js:47:5
    at invokeCallback (/Users/cully/Sites/ember-todo/node_modules/broccoli/node_modules/rsvp/dist/commonjs/rsvp/promise.js:228:21)
    at publish (/Users/cully/Sites/ember-todo/node_modules/broccoli/node_modules/rsvp/dist/commonjs/rsvp/promise.js:176:9)
    at publishFulfillment (/Users/cully/Sites/ember-todo/node_modules/broccoli/node_modules/rsvp/dist/commonjs/rsvp/promise.js:312:5)
    at flush (/Users/cully/Sites/ember-todo/node_modules/broccoli/node_modules/rsvp/dist/commonjs/rsvp/asap.js:41:9)
    at process._tickCallback (node.js:415:13)
    at Function.Module.runMain (module.js:499:11)
    at startup (node.js:119:16)
    ```
## [Todo's](https://github.com/cullymason/ember-broccoli-starter-kit/issues/2)
...so far
- add bower and update dependencies so that they install in the right directory
- add scaffolding for a basic ember app