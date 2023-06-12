const CareScale = (props) => {
    const {scaleValue, careType} = props
    const scaleEmoji = careType === "light" ? '☀️' : '💧'

    const range = [1, 2, 3]

    return (
    <div>
        { range.map((rangeElem) =>
            // scaleValue >= rangeElem ? careType === "light" ? <span key={rangeElem.toString()}>☀️</span> : <span key={rangeElem.toString()}>💧</span> : null
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleEmoji}</span> : null
        )}
    </div>
    );
}

export default CareScale;