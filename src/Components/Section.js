// this is a wrapper component

const Section = (props) => {
  return (
    <>
      <section id={props.className}>{props.children}</section>
    </>
  );
};

export default Section;
