/**
 * In case you missed it in readme:
 * https://heroiclabs.com/docs/gameplay-multiplayer-server-multiplayer/#host-node
 * This file for the first time introduces '!TupleReturn' directive.
 * It's used for telling the transpiler that the function returns multiple values,
 * and not a tuple as the name suggests (which in TS is a constant width array
 * (e.g. [number, string]) and in Lua is... whatever).
 */

/** !Phantom */
namespace x {
  let nk = require("nakama");
}

/** !TupleReturn */
function match_init(context: Match.Context, params: Match.Setup) {
  const ping_rate = 30; // this is a maximum
  const label = "label";

  let state: Match.State = { presences: [] };

  return [state, ping_rate, label]
}

/** !TupleReturn */
function match_join_attempt(context: Match.Context, dispatcher: Match.Dispatcher, tick: number, state: Match.State, presence: Match.Presence): [Match.State, boolean] {
  let acceptuser = true

  return [state, acceptuser]
}

function match_join(context: Match.Context, dispatcher: Match.Dispatcher, tick: number, state: Match.State, presences: Match.Presences): Match.State {
  presences.forEach(presence => {
    state.presences.push(presence);
  })

  return state
}

function match_leave(context: Match.Context, dispatcher: Match.Dispatcher, tick: number, state: Match.State, presences: Match.Presences): Match.State {
  presences.forEach(leaving => {
    let index = state.presences.indexOf(leaving);
    state.presences.splice(index, 1);
  });

  return state;
}

function match_loop(context: Match.Context, dispatcher: Match.Dispatcher, tick: number, state: Match.State, messages: Match.Message[]) {

  return state
}

function match_terminate(context: Match.Context, dispatcher: Match.Dispatcher, tick: number, state: Match.State, grace_seconds: number) {

  return state;
}

export class M {
  match_init = match_init
  match_join_attempt = match_join_attempt
  match_join = match_join
  match_leave = match_leave
  match_loop = match_loop
  match_terminate = match_terminate
}
