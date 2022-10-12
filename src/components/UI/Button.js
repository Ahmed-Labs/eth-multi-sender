function Button(props) {
  return (
    <button onClick={props.buttonFunction} class="w-full bg-pink text-blurple font-bold py-4 px-4 rounded hover:bg-white transition ease-in-out delay-50">
      {props.buttonName}
    </button>
  );
}

export default Button;
