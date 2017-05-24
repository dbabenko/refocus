/**
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * api/v1/controllers/roomEvents.js
 */
'use strict';

const helper = require('../helpers/nouns/roomEvents');
const doDelete = require('../helpers/verbs/doDelete');
const doFind = require('../helpers/verbs/doFind');
const doGet = require('../helpers/verbs/doGet');
const doPatch = require('../helpers/verbs/doPatch');
const doPost = require('../helpers/verbs/doPost');
const doPut = require('../helpers/verbs/doPut');

module.exports = {

  /**
   * DELETE /roomEvents/{key}
   *
   * Deletes the profile and sends it back in the response.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  deleteRoomEvents(req, res, next) {
    doDelete(req, res, next, helper);
  },

  /**
   * GET /roomEvents
   *
   * Finds zero or more roomEvents and sends them back in the response.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  findRoomEvents(req, res, next) {
    doFind(req, res, next, helper);
  },

  /**
   * GET /roomEvents/{key}
   *
   * Retrieves the profile and sends it back in the response.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  getRoomEvents(req, res, next) {
    doGet(req, res, next, helper);
  },

  /**
   * PATCH /roomEvents/{key}
   *
   * Updates the profile and sends it back in the response. PATCH will only
   * update the attributes of the profile provided in the body of the request.
   * Other attributes will not be updated.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  patchRoomEvents(req, res, next) {
    doPatch(req, res, next, helper);
  },

  /**
   * POST /roomEvents
   *
   * Creates a new profile and sends it back in the response.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  postRoomEvents(req, res, next) {
    doPost(req, res, next, helper);
  },

  /**
   * PUT /roomEvents/{key}
   *
   * Updates a profile and sends it back in the response. If any attributes
   * are missing from the body of the request, those attributes are cleared.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  putRoomEvents(req, res, next) {
    doPut(req, res, next, helper);
  },

}; // exports
