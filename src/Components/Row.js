const Row = (props) => {
  const classes = "row " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Row;
