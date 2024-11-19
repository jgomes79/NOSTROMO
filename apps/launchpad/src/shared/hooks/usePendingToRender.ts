import React from "react";

import { QueryObserverResult } from "@tanstack/react-query";

/**
 * Custom hook to determine if any provided react-query instances are still fetching data.
 * This version avoids potential infinite loops by ensuring that the hook does not trigger additional renders unless state changes.
 *
 * @param queries Array of QueryObserverResult from react-query.
 * @returns {boolean} True if any query is in a loading or fetching state.
 */
export const usePendingToRender = (queries: QueryObserverResult<unknown, unknown>[]): boolean => {
  const isAnyQueryPending = queries.some((query) => query.isRefetching || query.isFetching || query.isLoading);
  const [isPending, setIsPending] = React.useState(true);

  React.useEffect(() => {
    setIsPending(isAnyQueryPending);
  }, [isAnyQueryPending]);

  return isPending;
};
