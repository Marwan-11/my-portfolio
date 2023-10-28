const carousel = ({ children: services }) => {
  const [current, setCurrent] = useState(services.length - 1);

  const prev = () =>
    setCurrent((current) =>
      current === 0 ? services.length - 1 : current - 1
    );

  const next = () =>
    setCurrent((current) => (services.length - 1 ? 0 : current + 1));

  return (
    <div className="overflow-hidden">
      <div className="flex flex-row"> {services}</div>
    </div>
  );
};
export default carousel;
