// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { params } = context;
    if (!params.user) {
      //use in find when use find in another place in our code
      return context;
    }
    //get all data for user
    const userData = params.user;
    //get his userType
    const { userType } = userData;
    if (userType === "user") {
      throw new Error("you havent permision to access here"); //if he not admin throw error
    } else if (userType === "admin") {
      return context; // if he admin he can show all users
    }
  };
};
