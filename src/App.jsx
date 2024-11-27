import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(0)

  // -------------   Hooks   -----------------

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }


  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>


      

      {/* Conversion Section */}
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >

            


            <div className="w-full">

               
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    

                    {/* Heading Section*/}
                    <div >

                        <h1 

                        className='mt-4 text-center text-sm font-semibold tracking-tight text-green-500 sm:text-4xl mb-4 bg-blue-900 rounded-lg py-2'
                        > 💱 Currency Conveter</h1>

                    </div>

                    {/* Submit Form */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        {/* From Input Box */}
                        <div className="w-full mb-1 text-zinc-600">

                            <InputBox

                                label="From"
                                amount={amount}
                                onAmountChange={(amount) => setAmount(amount)}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                currencyOptions={options}
                                selectCurrency={from}
   
                            />

                        </div>

                        {/* Swap Button*/}
                        <div className="relative w-full h-0.5">
                            <button
                                
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5  hover:bg-blue-700 active:bg-blue-400"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>

                        {/* To Input Box */}
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                
                                label="To"
                                amount={convertedAmount}
                                onAmountChange={(convertedAmount) => setconvertedAmount(convertedAmount)}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>


                        {/* Convert Button */}
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg  hover:bg-blue-800 active:bg-blue-500">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>

                    </form>

                    {/* Currency Exchange Display */}
                    {/* <div className="relative w-full h-4 mt-6 mb-4" >
                        <h4 
                         className=' text-center border-2 border-white rounded-md bg-green-600 text-white ml-16 mr-16 py-0.5 mb-4'
                        >
                        {amount.toFixed(2)} {from.toUpperCase()} = {convertedAmount.toFixed(2)} {to.toUpperCase()}</h4>
                    </div> */}



                </div>
            </div>
      </div>


    </>
  )
}

export default App
