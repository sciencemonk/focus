"use strict";

module.exports = Object.freeze({

    appId : 'amzn1.ask.skill.98a6362c-67e1-422d-9362-74e1a7fa0341',

    //  DynamoDB Table name
    dynamoDBTableName : 'LongFormAudioSample',

    /*
     *  States:
     *  START_MODE : Welcome state when the audio list has not begun.
     *  PLAY_MODE :  When a playlist is being played. Does not imply only active play.
     *               It remains in the state as long as the playlist is not finished.
     *  RESUME_DECISION_MODE : When a user invokes the skill in PLAY_MODE with a LaunchRequest,
     *                         the skill provides an option to resume from last position, or to start over the playlist.
     */
    states : {
        START_MODE : '',
        PLAY_MODE : '_PLAY_MODE',
        RESUME_DECISION_MODE : '_RESUME_DECISION_MODE'
    },

    // when true, the skill logs additional detail, including the full request received from Alexa
    debug : true
});
