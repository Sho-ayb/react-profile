// this is a wrapper component

const Container = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Container;
