declare namespace Match {
  export type UUID = string;

  export interface Context {
    env: Env;
    execution_mode: string;
    match_id: string;
    match_label: string;
    match_node: string;
    match_tick_rate: number;
  }

  export interface Message {
    // data: Netcode.UserInteraction | Netcode.PingIn | Netcode.PingOut | Game.State;
    data: any;
    op_code: number;
    receive_time_ms: number;
    sender: Presence;
  }

  export interface Setup {
    /* anything */
  }

  export interface State {
    presences: Presences
  }

  export interface Env { }

  export interface Dispatcher {
    /**
     *  numeric message op code
        a data payload string, or nil
        list of presences (a subset of match participants) to use as message targets, or nil to send to the whole match
        a presence to tag on the message as the 'sender', or nil
    */
    broadcast_message: (op_code: number, data: string, presences: Presences | null) => void;
    /**
     * a list of presences to remove from the match
     */
    match_kick: (presences: Presences) => void;
    /**
     * a new label to set for the match
     */
    match_label_update: (label: string) => void;
  }

  export type Presences = (Presence | undefined)[]

  export interface Presence {
    node: string;
    session_id: string;
    user_id: string;
    username: string;
  }


  export namespace Maker { // Match.Maker... Get it? Matchmaker!
    export interface Context {
      env: object
      execution_mode: "matchmaker"
      query_params: object
    }


    export interface MatchedUser {
      presence: {
        node: string;
        session_id: UUID;
        user_id: UUID;
        username: string;
      }
      properties: StringProperties & NumericProperties
    }

    export interface QueueTicket {
      matchmaker_ticket: {
        ticket: string
      }
    }

    export interface Query {
      min_count: 2
      max_count: 2
      query: string
      string_properties: StringProperties
      numeric_properties: NumericProperties
    }

    // this is the matchamaker's potential I suppose?
    export interface StringProperties {
      setup: string
      region: "europe" | "non-europe"
    }
    // and that
    export interface NumericProperties {
      rank: number
    }

    export interface JoinResponse {
      cid: string
      match: {
        authoritative: boolean
        label: string
        match_id: string
        presences: Array<Match.Presence>
        self: Match.Presence
        size: number
      }
    }
  }
}