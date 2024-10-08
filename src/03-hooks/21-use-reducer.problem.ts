import { useReducer } from "react";
import { Equal, Expect } from "../helpers/type-utils";

const reducer = (
  state: {
    count: number;
  },
    /**
     * this should work: 
     *  type: 'add' | 'subtract';
     *  add?: number;
     *  subtract?: number;
     * 
     * but because third error, you'll notice we pass 'add' but no subsequent val. 
     * We'll need to rely on unions to handle chained cases like this
     */
  action: {
    type: 'add';
    add: number;
  } | {
    type: 'subtract';
    subtract: number;
  }) => {
  switch (action.type) {
    case "add":
      return { count: state.count + action.add };
    case "subtract":
      return { count: state.count - action.subtract };
    default:
      throw new Error();
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

type tests = [Expect<Equal<typeof state.count, number>>];

dispatch({ type: "add", add: 1 });

// @ts-expect-error
dispatch({ type: "SUBTRACT", subtract: 1 });

// @ts-expect-error
dispatch({ type: "add" });

// @ts-expect-error
dispatch({ type: "subtract", subtract: "123" });
