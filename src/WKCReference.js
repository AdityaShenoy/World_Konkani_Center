import WKCAddress from "./WKCAddress"
import WKCInput from "./WKCInput"

export default function WKCReference(props) {
    return (
        <>
            <WKCInput
                input_class={props.id + "_name"}
                label="Name"/>
            <WKCInput
                input_class={props.id + "_email"}
                label="Email"/>
            <WKCInput
                input_class={props.id + "_phone"}
                label="Phone"/>
            <WKCAddress class_prefix={props.id + "_"} />
        </>
    )
}