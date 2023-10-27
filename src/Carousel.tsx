const carousel = ({ children: services }) => {
  return (
    <div>
      <div className=" flex overflow-hidden"> {services}</div>
    </div>
  );
};
export default carousel;
