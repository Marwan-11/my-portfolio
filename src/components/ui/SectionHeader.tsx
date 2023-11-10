const SectionHeader = ({
  children,
  classes,
}: React.PropsWithChildren & { classes?: string }) => {
  return (
    <h4
      className={
        "text-center text-3xl font-bold capitalize text-background lg:mb-5 " +
        classes
      }
    >
      {children}
    </h4>
  );
};
export default SectionHeader;
