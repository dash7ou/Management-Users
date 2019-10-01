// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    // const { id, data, app, params } = context;

    // const userData = params.user;
    // const { userType } = userData;
    // if (userType === "user") {
    //   app.userType = userData;
    // } else if (userType === "admin") {
    //   app.userType = "admin";
    // }
    return context;
  };
};
