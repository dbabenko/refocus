/**
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * /worker/jobProcessor.js
 *
 * The jobProcessor is a worker process which uses the "Kue" module to pull
 * jobs off the redis queue.
 *
 * Add a new jobQueue.process(...) block for each new type of job.
 */
'use strict'; // eslint-disable-line strict
const jobType = require('../jobQueue/setup').jobType;
const jobQueue = require('../jobQueue/jobWrapper').jobQueue;
const helper = require('../api/v1/helpers/nouns/samples');
const workerStarted = 'Worker Process Started';

console.log(workerStarted); // eslint-disable-line no-console

// Process Sample Bulk Upsert Operations
jobQueue.process(jobType.BULKUPSERTSAMPLES, (job, done) => {

  /*
   * The shape of the old jobs objects in redis is different from the shape
   * of the new job objects that will be inserted in redis. The following
   * check is done to get the sample data based on the shape of the object.
   *  The old job objects look like this {data : [sample1, sample2]} and
   * the new ones look like this
   *  {data: {upsertData: [sample1,sample2], userName: 'name'}}
   */
  const samples = job.data.length ? job.data : job.data.upsertData;
  const userName = job.data.userName;
  const msg = `Processing ${jobType.BULKUPSERTSAMPLES} job ${job.id} ` +
    `with ${samples.length} samples`;
  console.log(msg); // eslint-disable-line no-console
  helper.model.bulkUpsertByName(samples, userName)
  .then(() => done());
});

// Process Sample Timeout Operations
jobQueue.process(jobType.SAMPLE_TIMEOUT, (job, done) => {
  const sampleTimeoutJob = require('../clock/scheduledJobs/sampleTimeoutJob');
  const msg = `Processing ${jobType.SAMPLE_TIMEOUT} job ${job.id}`;
  console.log(msg); // eslint-disable-line no-console
  sampleTimeoutJob.execute()
  .then(() => done());
});
