const Query = {
  me: (parent, args, ctx, info) => {
    return {
      id: 23423,
      name: "carlitos",
      email: "fede@gmail.com",
      age: 12,
    };
  },
};

module.exports = Query;
