/** !Phantom */
namespace x {
  let nk = require("nakama");
  require("vendor.utils")
}

nk.run_once((context: any) => {
  printf("RUN ONCE CONTEXT: %s", nk.json_encode(context));
})
