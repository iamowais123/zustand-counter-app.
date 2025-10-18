import {create} from "zustand";


// ✅ Store banaya jisme ek count variable aur functions defined hain
export const useCounterStore = create((set) => ({
    count : 0,
    // increase count by 1
    increase : () => set((state) => ({count : state.count + 1})),
    // decrease count by 1
    decrease : () => set((state) => ({count : state.count - 1})),
    // increase count by 5
    increaseBy5 : () => set((state) => ({count : state.count + 5})),
    // decrease by 5
    decreaseBy5 : () => set((state) => ({count : state.count - 5})),
    // reset
    reset : () => set(({count : 0}))
}))

