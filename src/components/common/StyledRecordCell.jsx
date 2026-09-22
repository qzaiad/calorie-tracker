/**
 * Generic wrapper that applies the shared "styled record cell" CSS module
 * class to whatever is passed as `children` (text, elements, etc.).
 */
import styles from "./StyledRecordCell.module.css";

function StyledRecordCell(props) {
  return (
    // CSS Modules: `styles["styled-record-cell"]` is the hashed class name,
    // so the raw class is never referenced directly in JSX.
    <div className={styles["styled-record-cell"]}>{props.children}</div>
  );
}

export default StyledRecordCell