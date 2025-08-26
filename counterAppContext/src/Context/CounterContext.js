import React from "react";
import { createContext,useContext } from "react";

export const CounterContext = createContext({
    Counter: 0,
    incrementBtn: () => {},
    decrementBtn: () => {},
    resetBtn: () => {}
})

export const CounterProvider = CounterContext.Provider

export default function useCounter (){
    return useContext(CounterContext)
}