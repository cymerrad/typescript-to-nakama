declare namespace Hooks {
  export interface Context {
    client_ip: string,
    env: any,
    execution_mode: "before" | "after",
    query_params: any,
  }

  export type Req
    = "AddFriends" /*Add friends by ID or username to a user's account.*/
    | "AddGroupUsers" /*Add users to a group.*/
    | "AuthenticateCustom" /*Authenticate a user with a custom id against the server.*/
    | "AuthenticateDevice" /*Authenticate a user with a device id against the server.*/
    | "AuthenticateEmail" /*Authenticate a user with an email+password against the server.*/
    | "AuthenticateFacebook" /*Authenticate a user with a Facebook OAuth token against the server.*/
    | "AuthenticateGameCenter" /*Authenticate a user with Apple's GameCenter against the server.*/
    | "AuthenticateGoogle" /*Authenticate a user with Google against the server.*/
    | "AuthenticateSteam" /*Authenticate a user with Steam against the server.*/
    | "BlockFriends" /*Block one or more users by ID or username.*/
    | "CreateGroup" /*Create a new group with the current user as the owner.*/
    | "DeleteFriends" /*Delete one or more users by ID or username.*/
    | "DeleteGroup" /*Delete one or more groups by ID.*/
    | "DeleteLeaderboardRecord" /*Delete a leaderboard record.*/
    | "DeleteNotifications" /*Delete one or more notifications for the current user.*/
    | "DeleteStorageObjects" /*Delete one or more objects by ID or username.*/
    | "GetAccount" /*Fetch the current user's account.*/
    | "GetUsers" /*Fetch zero or more users by ID and/or username.*/
    | "Healthcheck" /*A healthcheck which load balancers can use to check the service.*/
    | "ImportFacebookFriends" /*Import Facebook friends and add them to a user's account.*/
    | "JoinGroup" /*Immediately join an open group, or request to join a closed one.*/
    | "KickGroupUsers" /*Kick a set of users from a group.*/
    | "LeaveGroup" /*Leave a group the user is a member of.*/
    | "LinkCustom" /*Add a custom ID to the social profiles on the current user's account.*/
    | "LinkDevice" /*Add a device ID to the social profiles on the current user's account.*/
    | "LinkEmail" /*Add an email+password to the social profiles on the current user's account.*/
    | "LinkFacebook" /*Add Facebook to the social profiles on the current user's account.*/
    | "LinkGameCenter" /*Add Apple's GameCenter to the social profiles on the current user's account.*/
    | "LinkGoogle" /*Add Google to the social profiles on the current user's account.*/
    | "LinkSteam" /*Add Steam to the social profiles on the current user's account.*/
    | "ListChannelMessages" /*List a channel's message history.*/
    | "ListFriends" /*List all friends for the current user.*/
    | "ListGroups" /*List groups based on given filters.*/
    | "ListGroupUsers" /*List all users that are part of a group.*/
    | "ListLeaderboardRecords" /*List leaderboard records*/
    | "ListMatches" /*Fetch list of running matches.*/
    | "ListNotifications" /*Fetch list of notifications.*/
    | "ListStorageObjects" /*List publicly readable storage objects in a given collection.*/
    | "ListUserGroups" /*List groups the current user belongs to.*/
    | "PromoteGroupUsers" /*Promote a set of users in a group to the next role up.*/
    | "ReadStorageObjects" /*Get storage objects.*/
    | "UnlinkCustom" /*Remove the custom ID from the social profiles on the current user's account.*/
    | "UnlinkDevice" /*Remove the device ID from the social profiles on the current user's account.*/
    | "UnlinkEmail" /*Remove the email+password from the social profiles on the current user's account.*/
    | "UnlinkFacebook" /*Remove Facebook from the social profiles on the current user's account.*/
    | "UnlinkGameCenter" /*Remove Apple's GameCenter from the social profiles on the current user's account.*/
    | "UnlinkGoogle" /*Remove Google from the social profiles on the current user's account.*/
    | "UnlinkSteam" /*Remove Steam from the social profiles on the current user's account.*/
    | "UpdateAccount" /*Update fields in the current user's account.*/
    | "UpdateGroup" /*Update fields in a given group.*/
    | "WriteLeaderboardRecord" /*Write a record to a leaderboard.*/
    | "WriteStorageObjects" /*Write objects into the storage engine.*/

  export type RT
    = "ChannelJoin" /*Join a realtime chat channel.*/
    | "ChannelLeave" /*Leave a realtime chat channel.*/
    | "ChannelMessageSend" /*Send a message to a realtime chat channel.*/
    | "ChannelMessageUpdate" /*Update a message previously sent to a realtime chat channel.*/
    | "ChannelMessageRemove" /*Remove a message previously sent to a realtime chat channel.*/
    | "MatchCreate" /*A client to server request to create a realtime match.*/
    | "MatchDataSend" /*A client to server request to send data to a realtime match.*/
    | "MatchJoin" /*A client to server request to join a realtime match.*/
    | "MatchLeave" /*A client to server request to leave a realtime match.*/
    | "MatchmakerAdd" /*Submit a new matchmaking process request.*/
    | "MatchmakerRemove" /*Cancel a matchmaking process using a ticket.*/
    | "StatusFollow" /*Start following some set of users to receive their status updates.*/
    | "StatusUnfollow" /*Stop following some set of users to no longer receive their status updates.*/
    | "StatusUpdate" /*Set the user's own status.*/

  export type RPC
    = "ping"

    | "get_inventory"
    | "set_inventory"
    | "update_inventory"
    | "get_inventories"

    | "admin_get_inventory"
    | "admin_set_inventory"
    | "admin_update_inventory"

    | "admin_create_gear"
    | "admin_update_gear"
    | "admin_delete_gear"

    | "get_all_gear_names"
    | "get_gears"
    | "get_weapons"
    | "get_shields"
    | "get_specials"

    | "admin_get_players"
    | "admin_delete_player"

    | "admin_get_game_setups"
    | "admin_update_game_setup"
    | "admin_delete_game_setup"
    | "admin_set_default_game_setup"

    | "get_logs"
}