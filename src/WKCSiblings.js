import WKCDynamicSection from "./WKCDynamicSection"
import WKCInput from "./WKCInput"
import WKCSelect from "./WKCSelect"

export default function WKCSiblings() {

    return (
        <WKCDynamicSection header="Sibling">
            <WKCInput input_class="name" label="Full Name"/>
            <WKCSelect
                select_class="married"
                label="Marital Status">
                    <option value="n">Unmarried</option>
                    <option value="y">Married</option>
            </WKCSelect>
            <WKCInput input_class="occupation" label="Occupation" />
            <WKCInput input_class="age" label="Age" />
            <WKCInput input_class="income" label="Income" />
        </WKCDynamicSection>
    )
}