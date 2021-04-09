module.exports = {
  client: {
    include: ["./src/**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "nuber-eats-backend",
      url: "https://nuber-eats-backend-yjs.herokuapp.com/graphql",
    },
  },
};
