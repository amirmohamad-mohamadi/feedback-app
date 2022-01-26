import spinner from "../../assets/Iphone-spinner-2.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Loadin..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
