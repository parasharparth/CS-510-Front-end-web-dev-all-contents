export default function NoResult(props) {
  return (
    <div className="alert alert-danger" role="alert">
      <p>The entered name is not a charecter from Game of Thrones</p>
      <hr />
      <p>Please enter correct and complete name.</p>
    </div>
  );
}
