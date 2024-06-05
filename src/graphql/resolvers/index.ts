import { postQueries } from "./queries/post-queries";
import { postMutations } from "./mutations/post-mutations";

export const resolvers = {
  Query: {
    ...postQueries,
  },
  Mutation: {
    ...postMutations,
  },
};
