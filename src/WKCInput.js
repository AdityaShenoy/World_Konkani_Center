export default function WKCInput(props) {
    return (
        <>
            <label>{props.label}</label>
            <input
                type={props.type ? props.type : "text"}
                className={"form-control mt-2 mb-4 " + props.input_class}
                placeholder={props.label} />
        </>
    )
}