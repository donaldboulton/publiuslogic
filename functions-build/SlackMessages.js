"use strict";

var _querystring = _interopRequireDefault(require("querystring"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  const params = _querystring.default.parse(event.body);

  const name = params.name || "World";
  return (0, _nodeFetch.default)(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      text: `${name} says hello!`
    })
  }).then(() => ({
    statusCode: 200,
    body: `Hello, ${name}! Your greeting has been sent to Slack`
  })).catch(error => ({
    statusCode: 422,
    body: `Oops! Something went wrong. ${error}`
  }));
};