export default function WKCCheck(props) {
    return (
        <div className="form-check">
            <input type="checkbox" className={"form-check-input " + props.id} />
            <label className="form-check-label">{props.label}</label>
        </div>
    )
}