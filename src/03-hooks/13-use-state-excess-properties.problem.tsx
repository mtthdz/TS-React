import { useState } from "react";


/**
 * TS doesn't care about excess properties passed. For example,
 * we can pass "tagselected" which isn't technically an option in the interface
 * 
 * 
 * 
 * this is a deeper concept. Basically when comparing objects, TS will catch the mismatch.
 * however this illustration below, TS is checking if the function matches the function:
 * 
 * type GetTagState = () => TagState;
 * 
 * const getTagState: GetTagState = () => ({
 *  tagSelected: 1,
 *  tags: [],
 *  awaeweaea: '' // not caught
 * });
 * 
 * This is called covariance/contravariance, and it is purposefully set this way for flexibility.
 * To get around this, we can specify the return type like so:
 * 
 * const getTagState: GetTagState = (): TagState => ({});
 * 
 * Extending the solution to below, we can set the return type on the setState. Not a pretty solution
 * but there's no real solution here.
 * This is why we typically want to compare objects rather than functions
 */
interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

const objCheckTest: TagState = {
  tagSelected: 0,
  tags: [],
  asdafawfw: '' // caught bc comparing obj with obj
}

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState((currentState): TagState => ({
                ...currentState,
                tagselected: tag.id,
              }));
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState((currentState): TagState => ({
            ...currentState,
            tags: [
              ...currentState.tags,
              {
                id: new Date().getTime(),
                value: "New",
                otherValue: "something",
              },
            ],
          }));
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
