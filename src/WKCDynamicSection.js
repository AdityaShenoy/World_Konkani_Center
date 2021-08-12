import {useState} from "react"

export default function WKCDynamicSection(props) {

    function handleChange(e) {
        e.preventDefault()
        setNumInputs(e.target.value)
    }

    const [numInputs, setNumInputs] = useState(0)
    const inputList = []
    for (let i = 0; i < numInputs; i++) {
        inputList.push(
            <div
                className={props.header.toLowerCase()}
                id={props.header.toLowerCase() + "_" + (i + 1)}>
                    <hr className="my-4" />
                    <div className="text-center mb-3">
                        <b>{props.header + " " + (i + 1) + " Details"}</b>
                    </div>
                    {props.children}
            </div>
        )
    }

    return (
        <>
            <label>Number of {props.header}s</label>
            <input
                className={"form-control mt-2 mb-4 num_" + props.header.toLowerCase()}
                value={numInputs}
                onChange={(e) => handleChange(e)} />
            {inputList}
        </>
    )
}