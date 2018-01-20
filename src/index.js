// Avoid `console` errors in environments that lack a console.
let method;
const noop = function() {};
const methods = [
  "assert",
  "clear",
  "count",
  "debug",
  "dir",
  "dirxml",
  "error",
  "exception",
  "group",
  "groupCollapsed",
  "groupEnd",
  "info",
  "log",
  "markTimeline",
  "profile",
  "profileEnd",
  "table",
  "time",
  "timeEnd",
  "timeStamp",
  "trace",
  "warn"
];
let length = methods.length;

while (length--) {
  method = methods[length];

  // Only stub undefined methods.
  if (!console[method]) {
    console[method] = noop;
  }
}

export default console;
