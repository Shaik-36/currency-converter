import React, {useId} from 'react'

function InputBox(
  {
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,  
    
    className = "",
  }
  ) {
 

  const amountInputId = useId()

  return (
   

          <div className={`bg-white p-3 rounded-lg text-xl flex ${className}`}>


          {/* Label and Input  */}
          <div className="w-1/2">

              {/* label */}
              <label htmlFor={amountInputId} className=" text-xl text-grey-400 font-bold mb-2 inline-block">
                  {label}
              </label>

              {/* Input */}
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  min={0}
                  max={1000000}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>

          {/* Currency Option */}
          <div className="w-1/2 flex flex-wrap justify-end text-right">

              {/* Currency Type Label   */}
              <p className="text-grey-400 font-bold mb-2 w-full text-xl">Currency Type</p>

              {/* Select Option */}
              <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
              >
                {/* Map into the currency Options   */}
                {currencyOptions.map((currency) => (

                <option 
                key={currency} 
                value={currency}
                >
                {currency}
                </option>

                ))}
              
              </select>

              
          </div>


      </div>

    
  );
}

export default InputBox;