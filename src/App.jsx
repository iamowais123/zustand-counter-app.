import { useCounterStore } from "./store/useCounterStore";



const App = () => {

  // ✅ Store se data aur functions nikal liye
  const {count,increase,decreaseBy5,increaseBy5,decrease,reset} = useCounterStore();
  console.log(count);
  return (
    <>
     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">🧮 Zustand Counter App</h1>

      <div className="bg-white shadow-lg p-8 rounded-2xl text-center">
        <h2 className="text-4xl font-bold mb-4">{count}</h2>

        <div className="space-x-4">
          <button onClick={increase} className="px-4 py-2 bg-green-500 text-white rounded-lg">+1</button>
          <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white rounded-lg">-1</button>
          <button onClick={increaseBy5} className="px-4 py-2 bg-green-700 text-white rounded-lg">+5</button>
          <button onClick={decreaseBy5} className="px-4 py-2 bg-red-700 text-white rounded-lg">-5</button>
          <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Reset</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App