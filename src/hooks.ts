/**
 * This thing below you'll see often.
 * Those are directives for the transpiler.
 * '!Phantom' moves contents of the namespace into the global scope, 
 * so Lua generated code will have this calls as global imports.
 * It's a nice solution for having imports and having global namespace declarations at the same time.
 */

/** !Phantom */
namespace x {
  let nk = require("nakama");
  require("vendor.utils");
}

/**
 * Base of the filename, from where the match object will be returned: spacecraft.lua
 * This is the moment to also >choose< which game we'd like our players to play.
 */
const GAME_MODULE_NAME = "game";

/**
 * THIS IS PRACTICALLY THE ENTRY POINT FOR EVERYTHING
 * Everything starts here. This function will be executed when some players get eventually matched.
 * After this is done, we teleport to match_structure.ts, that is describing, well... The structure of the match.
 * @param context 
 * @param matched_users 
 */
function matched(context: Match.Maker.Context, matched_users: Match.Maker.MatchedUser[]) {
  matched_users.forEach((user: Match.Maker.MatchedUser) => {
    let presence = user.presence;
    printf("Matched user '%s' named '%s'", presence.user_id, presence.username);
    printf("Matched on '%s'", nk.json_encode(user.properties));
  })

  let setupState = {} as Match.Setup;

  let matchId = nk.match_create(GAME_MODULE_NAME, setupState);

  printf("matchId | string %s ", matchId, matchId);

  return matchId;
}
// IMPORTANT
nk.register_matchmaker_matched(matched)

