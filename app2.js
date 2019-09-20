const express = require("express");
const app = express();
require("./utils/routeStartup")(app);

const port = process.env.PORT || 3222;
app.listen(port, () => {
  console.log(`Weather application is listening on port ${port}!`);
});
