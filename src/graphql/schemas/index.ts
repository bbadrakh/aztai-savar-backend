import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { postTypeDefs } from "./post-schema";

export const typeDefs = mergeTypeDefs([postTypeDefs]);
