import "./StyledRecordCell.css";

function StyledRecordCell(props) {
  const onClickHandler = (event) => {
    console.log("Clicking an element with class list", event.target.classList)
  };

  return (
    <div className="styled-record-cell" onClick={onClickHandler}>{props.children}</div>
  );
}

export default StyledRecordCell