export default function WKCProfileSection(props) {
    return (
        <div className="row justify-content-center m-2">
            <div className="col-lg-3 bg-white p-4 rounded-start-3">
                {props.header ?
                    <h4 className="text-center">{props.header}</h4> :
                    <></>}
            </div>
            <div className="col-lg-6 bg-white p-4 rounded-end-3">
                {props.children}
            </div>
        </div>
    )
}