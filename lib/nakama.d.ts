declare namespace nk {
  // nakama functions

  /**
   * Returns time in milliseconds.
   */
  function time(): number

  /**
   * Returns uuid in v4 format.
   */
  function uuid_v4(): string

  /**
   * Base 64 encode the input.
   * @param input The string which will be base64 encoded.
   */
  function base64_encode(input: string): string

  /**
   * Base 64 decode the input.
   * @param input The string which will be base64 decoded.
   */
  function base64_decode(input: string): string

  /**
   * Write an INFO level message to the server logs
   * @param message 
   */
  function logger_info(message: string): void;

  /**
   * Write an ERROR level message to the server logs
   * @param message 
   */
  function logger_error(message: string): void;

  /**
   * Encode the input as JSON.
   * @param input The input to encode as JSON.
   */
  function json_encode(input: any): string;

  /**
   * Decode the JSON input as a Lua table.
   * @param input The JSON encoded input.
   */
  function json_decode(input: string): any;

  /**
    local user_id = "4ec4f126-3f9d-11e7-84ef-b7c182b36521" -- some user ID.
    local object_ids = {
      {collection = "save", key = "save1", user_id = user_id},
      {collection = "save", key = "save2", user_id = user_id},
      {collection = "save", key = "save3", user_id = user_id}
    }
    local objects = nk.storage_read(object_ids)
    for _, r in ipairs(objects)
    do
      local message = ("read: %q, write: %q, value: %q"):format(r.permission_read, r.permission_write, r.value)
      print(message)
    end
   * @param object_ids A table array of object identifiers to be fetched.
   */
  function storage_read<T>(object_ids: NStorage.objectQuery[]): Array<NStorage.objectOut<T>>;

  /**
    local user_id = "4ec4f126-3f9d-11e7-84ef-b7c182b36521" -- some user ID.
    local records = nk.storage_list(user_id "collection", 10, "")
    for _, r in ipairs(records)
    do
      local message = ("read: %q, write: %q, value: %q"):format(r.permission_read, r.permission_write, r.value)
      print(message)
    end
   * @param user_id User ID or "" (empty string) for public records.
   * @param collection Collection to list data from.
   * @param limit Limit number of records retrieved. Min 10, Max 100.
   * @param cursor Pagination cursor from previous result. If none available set to nil or "" (empty string).
   */
  /** !TupleReturn */
  function storage_list<T>(user_id: string, collection: NStorage.collection, limit: number, cursor: string): [NStorage.objectOut<T>[], string];

  /**
    local user_id = "4ec4f126-3f9d-11e7-84ef-b7c182b36521" -- some user ID.
    local friend_user_id = "8d98ee3f-8c9f-42c5-b6c9-c8f79ad1b820" -- friend ID.
    local object_ids = {
      {collection = "save", key = "save1", user_id = user_id},
      {collection = "save", key = "save2", user_id = user_id},
      {collection = "public", key = "progress", user_id = friend_user_id}
    }
    nk.storage_delete(object_ids)
   * @param object_ids A table array of object identifiers to be removed.
   */
  function storage_delete(object_ids: NStorage.objectQuery[]): void;

  /**
    local user_id = "4ec4f126-3f9d-11e7-84ef-b7c182b36521" -- some user ID.
    local new_objects = {
      {collection = "save", key = "save1", user_id = user_id, value = {}},
      {collection = "save", key = "save2", user_id = user_id, value = {}},
      {collection = "save", key = "save3", user_id = user_id, value = {}, permission_read = 2, permission_write = 1},
      {collection = "save", key = "save3", user_id = user_id, value = {}, version="*", permission_read = 1, permission_write = 1}
    }
    nk.storage_write(new_objects)
   * @param new_objects A table array of new objects to write.
   */
  function storage_write<T>(new_objects: NStorage.objectIn[]): NStorage.writeTicket[];

  function register_req_before(hookFunction: Function, hookMessage: Hooks.Req): void;

  function register_req_after(hookFunction: Function, hookMessage: Hooks.Req): void;

  function register_rt_before(hookFunction: Function, hookMessage: Hooks.RT): void;

  function register_rt_after(hookFunction: Function, hookMessage: Hooks.RT): void;

  function register_rpc(hookFunction: Function, hookRPC_ID: Hooks.RPC): void;

  function register_matchmaker_matched(matched: Function): void;

  function match_create(moduleName: string, setup: Match.Setup): string; // I had to figure this out by trial and error, eh

  function run_once(func: Function): void;

  function sql_query(query: string, parameters?: string[] | Object): Object[];
}

declare namespace NStorage {
  export type collection
    = "gears"
    | "inventory"
    | "assembled"
    | "game_setups"
    | "logs"

  export interface objectOut<T> {
    collection: collection,
    key: string,
    user_id: string,
    create_time: number,
    update_time: number,
    value: T,
    version: string,
    permission_read: number,
    permission_write: number,
  }

  export interface objectIn {
    collection: collection,
    key: string,
    user_id?: string,
    value: Exclude<object, object[]>, // arrays don't work, it has to be an object!
    version?: string,
    permission_read?: number,
    permission_write?: number,
  }

  export interface objectQuery {
    collection: collection,
    key: string,
    user_id?: string,
  }

  // I had to dig down into nakama's source code to find it
  export interface writeTicket {
    collection: collection,
    key: string,
    user_id?: string,
    version: string,
  }
}
