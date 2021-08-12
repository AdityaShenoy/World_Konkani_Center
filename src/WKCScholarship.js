import { useState } from "react"
import WKCInput from "./WKCInput"

export default function WKCScholarship(props) {

    const [applied, setApplied] = useState(false)

    function handleChange(e) {
        e.preventDefault()
        setApplied(e.target.value === 'y' ? true : false)
    }

    return (
        <>
            <label>{props.scholarship_name}</label>
            <select
                className={props.scholarship_id + "_applied form-select mt-2 mb-4"}
                onChange={e => handleChange(e)}>
                    <option value="n">Not Applied</option>
                    <option value="y">Applied</option>
            </select>
            {applied ?
                <WKCInput
                    input_class={props.scholarship_id + "_amount"}
                    label="Amount"/> :
                <></>}
        </>
    )
}