'use strict'

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `THE ENV VARIABLE IS ${process.env.MESSAGE}, wow this is cool`,
        input: event
      },
      null,
      2
    )
  }
}
