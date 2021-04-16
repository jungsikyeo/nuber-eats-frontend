module.exports = {
  client: {
    include: ["./src/**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "nuber-eats-backend",
      url:
        process.env.NODE_ENV === "production"
          ? "https://nuber-eats-backend-yjs.herokuapp.com/graphql"
          : "http://localhost:4000/graphql",
    },
  },
};
