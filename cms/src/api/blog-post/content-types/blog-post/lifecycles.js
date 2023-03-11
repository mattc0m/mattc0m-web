"use strict";
const readingTime = require("reading-time");
module.exports = {
    async beforeCreate(event) {
      const { data } = event.params;
      if (event.params.data.content && event.params.data.content?.length > 0) {
        event.params.data.readingTime = readingTime(event.params.data.content)?.text || null;
      }
    },
    async beforeUpdate(event) {
      const { data } = event.params;
      if (event.params.data.content && event.params.data.content?.length > 0) {
        event.params.data.readingTime = readingTime(event.params.data.content)?.text || null;
      }
    },
};