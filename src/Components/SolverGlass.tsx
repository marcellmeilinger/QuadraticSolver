import React, { useState } from 'react'
import "./SolverGlass.css"

export const SolverGlass = () => {
    document.body.classList.add('bodyglass');

    const [A, setA] = useState("");
    const [B, setB] = useState("");
    const [C, setC] = useState("");
    const [x1, setx1] = useState("");
    const [x2, setx2] = useState("");


    function handleSzamolas() {
        let a = parseFloat(A);
        let b = parseFloat(B);
        let c = parseFloat(C);

        var vd = (b * b) - (4 * a * c);
        if (vd >= 0) {
            if (vd > 0) {
                let x1 = (-b + Math.sqrt(vd)) / (2 * a);
                let x2 = (-b - Math.sqrt(vd)) / (2 * a);
                setx1(x1.toString());
                setx2(x2.toString());
            }
            else {
                setx1(((-b + Math.sqrt(vd)) / (2 * a)).toString());
                setx2("nincs");
            }
        }
        else {
            setx1("*komplex");
            setx2("*komplex");
        }
    }

    function handleUjra() {
        setA("");
        setB("");
        setC("");
        setx1("");
        setx2("");
    }

    return (
        <div className='main'>
            <form id='interface' className='interface'>
                <h2>Másodfokú egyenlet gyökeit kiszámoló program</h2>
                <p className='kerem'>Ax<sup>2</sup> + Bx + C = 0</p>
                <div className='egyutthatok'>
                    <p className='title'>Kérem a három együtthatót:</p>
                    <div>
                        <label htmlFor="A">A = </label>
                        <input onChange={(event) => setA(event.target.value)} id='C' className='egyutthatok' type="number" value={A} />
                    </div>
                    <div>
                        <label htmlFor="B">B = </label>
                        <input onChange={(event) => setB(event.target.value)} id='B' className='egyutthatok' type="number" value={B} />
                    </div>
                    <div>
                        <label htmlFor="C">C = </label>
                        <input onChange={(event) => setC(event.target.value)} id='C' className='egyutthatok' type="number" value={C} />
                    </div>
                    <div className='buttons'>
                        <button onClick={handleSzamolas} type='button' className='btnszamolas'>Számolás</button>
                        <button onClick={handleUjra} type='button' className='btnujra'>Újra</button>
                    </div>
                    <div>
                        <label htmlFor="X1">X<sub>1</sub> = </label>
                        <input readOnly id='x1' className='egyutthatok' type="text" value={x1} />
                    </div>
                    <div>
                        <label htmlFor="X2">X<sub>2</sub>  = </label>
                        <input readOnly id='x2' className='egyutthatok' type="text" value={x2} />
                    </div>

                </div>
            </form>
        </div>
    )
}
