/**
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * api/v1/helpers/nouns/roomtypes.js
 */

const Rooms = require('../../../../db/index').Rooms;

const m = 'Rooms';

module.exports = {
  apiLinks: {
    DELETE: `Delete ${m}`,
    GET: `Retrieve ${m}`,
    PATCH: `Update selected attributes of ${m}`,
    POST: `Create a new ${m}`,
  },
  baseUrl: '/v1/rooms',
  model: Rooms,
  modelName: 'Rooms',
}; // exports
