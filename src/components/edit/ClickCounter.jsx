function ClickCounter(props) {
  const { setClickCounter } = props;
  const onClickHander = () => {
    setClickCounter(previousValue => previousValue + 1);
  }
  return (
    <button onClick={onClickHander}>ClickMe</button>
  );
}

export default ClickCounter;