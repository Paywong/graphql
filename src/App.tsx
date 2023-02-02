import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";

import "graphiql/graphiql.css";

const fetcher = createGraphiQLFetcher({
  url:
    process.env.REACT_APP_GRAPHQL_API_URL || "http://localhost:8080/v1/graphql",
});

function App() {
  return <GraphiQL fetcher={fetcher} />;
}

export default App;
