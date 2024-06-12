export default function Error({ error, reset }) {
  return (
    <>
      <h1>{error}</h1>
      <button
        onClick={() => {
          reset();
        }}
      ></button>
    </>
  );
}
