const SectionHeader = ({ children, classes }: any) => {
  return (
    <h4
      className={
        "text-background text-center text-3xl font-bold capitalize lg:mb-5 " +
        classes
      }
    >
      {children}
    </h4>
  );
};
export default SectionHeader;
