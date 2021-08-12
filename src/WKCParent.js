import WKCSubSectionHeader from './WKCSubSectionHeader'
import WKCInput from './WKCInput'

export default function WKCParent(props) {
    return (
        <>
            <WKCSubSectionHeader header={props.parent_label + " Details"} />
            <WKCInput
                input_class={props.parent_label.toLowerCase() + "_name"}
                label="Name"/>
            <WKCInput
                input_class={props.parent_label.toLowerCase() + "_occupation"}
                label="Occupation"/>
            <WKCInput
                input_class={props.parent_label.toLowerCase() + "_occupation_city"}
                label="Occupation City"/>
            <WKCInput
                input_class={props.parent_label.toLowerCase() + "_income"}
                label="Income"/>
        </>
    )
}