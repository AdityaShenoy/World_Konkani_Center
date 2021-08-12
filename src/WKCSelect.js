export default function WKCSelect(props) {
    return (
        <>
            <label>{props.label}</label>
            <select
                className={"form-select mt-2 mb-4 " + props.select_class}>
                    {props.children}
            </select>
        </>
    )
}