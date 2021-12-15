

export default function Result(props) {
  return (
    <div className="text-center">
      <h2>Result: {props.name}</h2>
      <img
        src={props.img}
        alt="charecter-img"
        className="mb-3 img-thumbnail rounded img-pic"
      ></img>
    </div>
  );
}
