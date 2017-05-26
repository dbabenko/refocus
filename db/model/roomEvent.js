/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * db/model/roomEvent.js
 *
 * Room Events track all the actions of all the room tables.
 * This will be used to replay actions.
 */

const assoc = {};

module.exports = function user(seq, dataTypes) {
  const RoomEvent = seq.define('RoomEvent', {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    log: {
      type: dataTypes.STRING,
      allowNull: false,
      comment: 'Readable log line',
    },
    payload: {
      type: dataTypes.JSON,
      allowNull: false,
      comment:
        'Everytime a table is update the actions will recorded here',
    }
  }, {
    classMethods: {
      getRoomEventAssociations() {
        return assoc;
      },

      postImport(models) {
        assoc.room = RoomEvent.belongsTo(models.Room, {
          foreignKey: 'roomId',
        });
        assoc.pendingaction = RoomEvent.belongsTo(models.RoomRule, {
          foreignKey: 'roomRuleId',
        });
        assoc.pendingaction = RoomEvent.belongsTo(models.RoomSetting, {
          foreignKey: 'roomSettingId',
        });
        assoc.bot = RoomEvent.belongsTo(models.Bot, {
          foreignKey: 'botId',
        });
        assoc.user = RoomEvent.belongsTo(models.User, {
          foreignKey: 'userId',
        });
        assoc.botaction = RoomEvent.belongsTo(models.BotAction, {
          foreignKey: 'actionId',
        });
        assoc.botaction = RoomEvent.belongsTo(models.BotDotat, {
          foreignKey: 'botDataId',
        });
        assoc.currentbotdata = RoomEvent.belongsTo(models.CurrentBotData, {
          foreignKey: 'currentBotDataId',
        });
        assoc.pendingaction = RoomEvent.belongsTo(models.PendingBotAction, {
          foreignKey: 'pendingId',
        });
      },
    },
  });
  return RoomEvent;
};

