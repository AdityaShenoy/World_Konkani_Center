import { useState } from "react"
import WKCInput from "./WKCInput"

export default function WKCUpload(props) {

    const [errorMessage, setErrorMessage] = useState("")
    const [fileUploaded, setFileUploaded] = useState(false)

    function handleClick(e) {
        e.preventDefault()
        e.target.previousElementSibling.children[0].value = ""
        setFileUploaded(false)
        setErrorMessage("")
    }

    function handleChange(e) {
        e.preventDefault()
        setFileUploaded(false)
        if (!e.target.files.length) {
            setErrorMessage("")
        } else if (e.target.files[0].size > 1024*1024) {
            setErrorMessage("File should be less than 1MB")
        } else if (!["application/pdf", "image/jpeg", "image/png"].includes(
                e.target.files[0].type
            )) {
                setErrorMessage("Allowed file types are: PDF/JPG/PNG")
        } else {
            setFileUploaded(true)
            setErrorMessage("")
        }
    }

    return (
        <div id={props.id}>
            <label>
                {props.label}
                <div className="text-danger">{errorMessage}</div>
            </label>
            <div className="container-fluid p-0">
                <div className="row align-items-center justify-content-center m-0">
                    <div className={"p-0 col-" + (fileUploaded ? 11 : 12)}>
                        <input
                            type="file"
                            className={"form-control my-2 " + props.id + "_doc"}
                            onChange={e => handleChange(e)} />
                    </div>
                    {
                        fileUploaded ?
                        <button
                            className="btn bg-danger text-white p-2 col-1"
                            onClick={e => handleClick(e)}>
                                X
                        </button>:
                        <></>
                    }
                </div>
            </div>
            {
                !props.no_input & fileUploaded ?
                <WKCInput
                    input_class={props.id + "_" + props.input_label.toLowerCase()}
                    label={props.input_label}/> :
                <></>
            }
        </div>
    )
}