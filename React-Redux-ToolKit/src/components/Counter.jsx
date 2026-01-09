import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  incrementBy10,
  incrementBy100,
  decrement,
  decrementBy10,
  decrementBy100,
  reset,
} from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Redux Counter</h1>

        <p className="text-5xl font-semibold mb-6 text-blue-600">{count}</p>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => dispatch(decrementBy100())}
            className="flex-1 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Dec 100
          </button>
          <button
            onClick={() => dispatch(decrementBy10())}
            className="flex-1 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Dec 10
          </button>{" "}
          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Dec
          </button>
          <button
            className="mt-4 text-sm text-gray-500 hover:underline"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="flex-1 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition"
          >
            Inc
          </button>
          <button
            onClick={() => dispatch(incrementBy10())}
            className="flex-1 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition"
          >
            Inc 10
          </button>
          <button
            onClick={() => dispatch(incrementBy100())}
            className="flex-1 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition"
          >
            Inc 100
          </button>
        </div>
      </div>
    </div>
  );
}
