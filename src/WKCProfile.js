import WKCProfileSection from "./WKCProfileSection"
import WKCSelect from "./WKCSelect"
import WKCInput from "./WKCInput"
import WKCSubSectionHeader from "./WKCSubSectionHeader"
import WKCParent from "./WKCParent"
import WKCSiblings from "./WKCSiblings"
import WKCMembers from "./WKCMembers"
import WKCScholarship from "./WKCScholarship"
import WKCUpload from "./WKCUpload"
import WKCReference from "./WKCReference"
import WKCAddress from "./WKCAddress"
import WKCCheck from "./WKCCheck"

export default function WKCProfile() {
    return (
        <div className="container-fluid" style={{backgroundColor: "#EEEFF3"}}>
            <WKCProfileSection>
                <WKCSelect
                    select_class="scholarship_type"
                    label="Scholarship Type">
                        <option value="eng">Engineering</option>
                        <option value="med">Medicine</option>
                </WKCSelect>
            </WKCProfileSection>

            <WKCProfileSection header="Personal Details">
                <WKCInput input_class="first_name" label="First Name"/>
                <WKCInput input_class="middle_name" label="Middle Name"/>
                <WKCInput input_class="last_name" label="Last Name"/>
                <WKCInput input_class="dob" label="Date of Birth" type="date"/>
                <WKCSelect
                    select_class="gender"
                    label="Gender">
                        <option value="f">Female</option>
                        <option value="m">Male</option>
                </WKCSelect>
            </WKCProfileSection>

            <WKCProfileSection header="Contact Details">
                <WKCAddress class_prefix="" />
                <WKCInput input_class="stud_phone" label="Student Phone Number"/>
                <WKCInput input_class="parent_phone" label="Parent Phone Number"/>
            </WKCProfileSection>

            <WKCProfileSection header="Parent Details">
                <WKCParent parent_label="Father" />
                <hr className="my-4" />
                <WKCParent parent_label="Mother" />
            </WKCProfileSection>

            <WKCProfileSection header="Sibling Details">
                <WKCSiblings />
            </WKCProfileSection>

            <WKCProfileSection header="Other Member Details">
                <WKCMembers />
            </WKCProfileSection>

            <WKCProfileSection header="Other Scholarships">
                <WKCScholarship
                    scholarship_id="state_govt_scholarship"
                    scholarship_name="State Government Scholarship for Religious Minorities"
                />
                <hr className="my-4" />
                <WKCScholarship
                    scholarship_id="ammembal_subbarao_pai_foundation_scholarship"
                    scholarship_name="Ammembal Subbarao Pai Foundation Scholarship"
                />
                <hr className="my-4" />
                <WKCScholarship
                    scholarship_id="codp_educare_scholarship"
                    scholarship_name="CODP Educare"
                />
                <hr className="my-4" />
                <WKCScholarship
                    scholarship_id="veera_venkatesh_chairtable_trust_scholarship"
                    scholarship_name="Veera Venkatesh Chairtable Trust"
                />
                <hr className="my-4" />
                <WKCScholarship
                    scholarship_id="karnataka_state_obc_scholarship"
                    scholarship_name="Karnataka State OBC Scholarship"
                />
                <hr className="my-4" />
                <WKCScholarship
                    scholarship_id="vidya_poshak_scholarship"
                    scholarship_name="Vidya Poshak Scholarship, Dharwad"
                />
                <hr className="my-4" />
                <WKCScholarship
                    scholarship_id="national_post_metric_scholarship_for_religious_minorities_scholarship"
                    scholarship_name="National Post Metric Scholarship for Religious Minorities"
                />
                <hr className="my-4" />
                <WKCScholarship
                    scholarship_id="national_post_metric_scholarship_for_obc_scholarship"
                    scholarship_name="National Post Metric Scholarship for OBC"
                />
                <hr className="my-4" />
                <WKCScholarship
                    scholarship_id="other_scholarship"
                    scholarship_name="Others"
                />
            </WKCProfileSection>

            <WKCProfileSection header="College">
                <WKCInput input_class="college_name" label="Name" />
                <WKCAddress class_prefix="college_" />
            </WKCProfileSection>

            <WKCProfileSection header="Fees Documents">
                <WKCUpload
                    label="Fees Paid to CET"
                    id="cet_fee"
                    input_label="Amount" />
                <hr className="my-4" />
                <WKCUpload
                    label="Fees Paid to Hostel Accomodation"
                    id="hostel_fee"
                    input_label="Amount" />
                <hr className="my-4" />
                <WKCUpload
                    label="Monthly Mess Expenditure"
                    id="mess_fee"
                    input_label="Amount" />
                <hr className="my-4" />
                <WKCUpload
                    label="Monthly Transport Expenditure"
                    id="transport_fee"
                    input_label="Amount" />
            </WKCProfileSection>

            <WKCProfileSection header="References">
                <WKCSubSectionHeader header="Doctor" />
                <WKCReference id="doctor" />
                <hr className="my-4" />
                <WKCSubSectionHeader header="Chartered Accountant" />
                <WKCReference id="ca" />
            </WKCProfileSection>

            <WKCProfileSection header="Exceptional Info">
                <WKCCheck
                    id="studied_konkani"
                    label="I studied Konkani language as a subject in school curriculum."/>
                <WKCCheck
                    id="orphan"
                    label="I have no parents / I am an orphan."/>
                <WKCCheck
                    id="one_parent"
                    label="I have only one parent."/>
                <WKCCheck
                    id="disabled_parent"
                    label="I have a disabled parent."/>
            </WKCProfileSection>

            <WKCProfileSection header="Marksheets">
                <WKCUpload
                    label="PUC Marksheet"
                    id="puc_marksheet"
                    input_label="Percent" />
                <hr className="my-4" />
                <WKCUpload
                    label="CET Marksheet"
                    id="cet_marksheet"
                    input_label="Rank" />
            </WKCProfileSection>

            <WKCProfileSection header="Mother Tongue Certificate">
                <WKCUpload
                    label="Mother Tongue Certificate"
                    id="mother_tongue_certificate"
                    no_input={true} />
            </WKCProfileSection>
        </div>
    )
}