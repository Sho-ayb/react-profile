// this is a wrapper component

const Section = (props) => {
  return (
    <div>
      <section id={props.className}>{props.children}</section>
    </div>
  );
};

export default Section;
