import { useCount } from "./useCount";
const maxCount = 5;
const minCount = 0;
export const Counter = () => {
  const { count, increment, decrement } = useCount(maxCount, minCount);
  return (
    <div className="counter">
      <button disabled={count === minCount} onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button disabled={count === maxCount} onClick={increment}>
        +
      </button>
    </div>
  );
};
