import WKCDynamicSection from "./WKCDynamicSection"
import WKCInput from "./WKCInput"

export default function WKCMembers() {

    return (
        <WKCDynamicSection header="Member">
            <WKCInput input_class="name" label="Full Name"/>
            <WKCInput input_class="relation" label="Relation"/>
            <WKCInput input_class="occupation" label="Occupation" />
            <WKCInput input_class="age" label="Age" />
            <WKCInput input_class="income" label="Income" />
        </WKCDynamicSection>
    )
}