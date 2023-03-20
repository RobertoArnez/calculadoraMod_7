import { useState } from "react";


const Calculadora = () => {
    const [firstInput, setFirstInput ] = useState(null)
    const [secondInput, setSecondInput ] = useState(null)
    const [operator, setOperator ] = useState(false)
    const [operatorSymbol, setOperatorSymbol ] = useState(null)

    const handleInput = (number) => {
        if (firstInput === null) {
            setFirstInput(number)
        } else {
            setFirstInput(firstInput + number)
        }
    }

    const handleSecondInput = (number) => {
        if (secondInput === null) {
            setSecondInput(number)
        } else {
            setSecondInput(secondInput + number)
        }
    }

    const handleOperator = (symbol) => {
        setOperator(true)
        setOperatorSymbol(symbol)
    }

    const handleSubmit = () => {
        if (operatorSymbol === '+') {
            setFirstInput(parseInt(firstInput) + parseInt(secondInput))
            setSecondInput(null)
            setOperator(false)
            setOperatorSymbol(null)
        } else if (operatorSymbol === '-') {
            setFirstInput(parseInt(firstInput) - parseInt(secondInput))
            setSecondInput(null)
            setOperator(false)
            setOperatorSymbol(null)
        } else if (operatorSymbol === 'x') {
            setFirstInput(parseInt(firstInput) * parseInt(secondInput))
            setSecondInput(null)
            setOperator(false)
            setOperatorSymbol(null)
        } else if (operatorSymbol === '/') {
            setFirstInput(parseInt(firstInput) / parseInt(secondInput))
            setSecondInput(null)
            setOperator(false)
            setOperatorSymbol(null)
        }
    }

    const handleClear = () => {
        setFirstInput(null)
        setSecondInput(null)
        setOperator(false)
        setOperatorSymbol(null)
    }

    return (
        <div className="contenedor-calculadora">
            <input type="text" className="calculadora-input" placeholder={operator ? secondInput : firstInput}/>
            <div className="botones-calculadora">
                <button onClick={()=> operator ? handleSecondInput('1'): handleInput('1')} type="button" className="boton-calculadora">1</button>
                <button onClick={()=> operator ? handleSecondInput('2'): handleInput('2')} type="button" className="boton-calculadora">2</button>
                <button onClick={()=> operator ? handleSecondInput('3'): handleInput('3')} type="button" className="boton-calculadora">3</button>
                <br/>
                <button onClick={()=> operator ? handleSecondInput('4'): handleInput('4')} type="button" className="boton-calculadora">4</button>
                <button onClick={()=> operator ? handleSecondInput('5'): handleInput('5')} type="button" className="boton-calculadora">5</button>
                <button onClick={()=> operator ? handleSecondInput('6'): handleInput('6')} type="button" className="boton-calculadora">6</button>
                <br/>
                <button onClick={()=> operator ? handleSecondInput('7'): handleInput('7')} type="button" className="boton-calculadora">7</button>
                <button onClick={()=> operator ? handleSecondInput('8'): handleInput('8')} type="button" className="boton-calculadora">8</button>
                <button onClick={()=> operator ? handleSecondInput('9'): handleInput('9')} type="button" className="boton-calculadora">9</button>
                <br/>
                <button onClick={()=> handleOperator('-')} type="button" className="boton-calculadora">-</button>
                <button onClick={()=> operator ? handleSecondInput('0'): handleInput('0')} type="button" className="boton-calculadora">0</button>
                <button onClick={()=> handleOperator('+')} type="button" className="boton-calculadora">+</button>
                <br/>
                <button onClick={()=> handleOperator('/')} type="button" className="boton-calculadora">/</button>
                <button onClick={()=> handleOperator('x')} type="button" className="boton-calculadora">x</button>
                <button onClick={handleSubmit} type="button" className="boton-calculadora">=</button>
                <br/>
                <button onClick ={handleClear} type="button" className="boton-calculadora">CA</button>
            </div>
        </div>
    )
}

export default Calculadora;