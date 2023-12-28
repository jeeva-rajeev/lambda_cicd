const moment = require("moment");

exports.handler = async (event) => {
  let currentDateTime = moment().format("YYYY-MM-DD");
  const response = {
    statusCode: 200,
    body: JSON.stringify(`The current date : ${currentDateTime}`),
  };
  return response;
};
