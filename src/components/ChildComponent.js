export const ChildComponent = (props) => {
  const { greetHandler } = props;
  return (
    <div>
      <button onClick={() => greetHandler("child")}>Greet Parent!</button>
    </div>
  );
};
