import { useState } from "react"
import './BaiTap1.css'

export default function BaiTap1(){
    var [a, setA] = useState(0)
    var [b, setB] = useState(0)
    var [result, setResult] = useState(0)
    var [op, setOp] = useState('')

    function handleInputA(e){
        setA(e.target.value)
    }

    function handleInputB(e){
        setB(e.target.value)
    }

    function handleRadio(e){
        setOp(e.target.value)
    }

    function click(e){
        if(op == '+')
            setResult(parseInt(a) + parseInt(b))
        else if(op == '-')
            setResult(parseInt(a) - parseInt(b))
        else if(op == '*')
            setResult(parseInt(a) * parseInt(b))
        else if(op == '/')
            setResult(parseInt(a) / parseInt(b))
        else setResult('Click operator')
    }
    return (
        <>
            <div>
                <h3>Caculator</h3>
                <input placeholder="input a" type="text" onChange={handleInputA}/>
                <br />
                <input placeholder="input b" type="text" onChange={handleInputB}/>
                <br />
                <button onClick={click}>=</button>
                <br />
                <input onChange={handleRadio} value='+' type="radio" name="oprator" id="" /> <span>+</span>
                <input onChange={handleRadio} value='-' type="radio" name="oprator" id="" /> <span>-</span>
                <input onChange={handleRadio} value='*' type="radio" name="oprator" id="" /> <span>*</span>
                <input onChange={handleRadio} value='/' type="radio" name="oprator" id="" /> <span>/</span>
                <br />
                <span>Result is : {result}</span>
            </div>
        </>
    )
}