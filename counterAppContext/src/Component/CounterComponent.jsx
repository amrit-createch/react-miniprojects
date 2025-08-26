import React from 'react'
import useCounter from '../Context/CounterContext'

export default function CounterComponent (){
    const { Counter, incrementBtn, decrementBtn, resetBtn } = useCounter()
    
    return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-4 bg-gray-100 p-6 rounded-xl shadow-lg w-80 mx-auto">
            <h2 className="text-2xl font-bold text-gray-700">Count: <span className="text-blue-500">{Counter}</span></h2>
            
            <div className="flex space-x-4">
                <button 
                    onClick={incrementBtn} 
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded transition duration-200"
                >
                    +
                </button>
                
                <button 
                    onClick={decrementBtn} 
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition duration-200"
                >
                    -
                </button>
                
                <button 
                    onClick={resetBtn} 
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded transition duration-200"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}
