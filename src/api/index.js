var axios = null;
import(/* webpackChunkName: "axios" */ "axios").then(ax => {
  console.log("====================================");
  console.log("Axios loaded");
  console.log("====================================");
  axios = ax;
});
