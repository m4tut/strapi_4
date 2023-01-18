export default ({ env }) => ({
  graphql: {
    config: {
      endpoint: env('PUBLIC_GRAPHQL_URL'),
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});

