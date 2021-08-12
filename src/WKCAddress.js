import WKCInput from './WKCInput'

export default function WKCAddress(props) {
    return (
        <>
            <WKCInput
                input_class={props.class_prefix + "state"}
                label="State"/>
            <WKCInput
                input_class={props.class_prefix + "city"}
                label="City"/>
            <WKCInput
                input_class={props.class_prefix + "addr_1"}
                label="Address Line 1"/>
            <WKCInput
                input_class={props.class_prefix + "addr_2"}
                label="Address Line 2"/>
        </>
    )
}