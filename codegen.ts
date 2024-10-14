import { CodegenConfig } from "@graphql-codegen/cli";

module.exports = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: ["src/lib/gql/**/*.gql"],
  generates: {
    "src/lib/gql/generated.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-apollo-client-helpers",
      ],
    },
  },
} as CodegenConfig;
