const Scroll = (props) => {
  return (
    <div
      style={{ overflow: 'scroll', border: '1px solid #000', height: '800px' }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
