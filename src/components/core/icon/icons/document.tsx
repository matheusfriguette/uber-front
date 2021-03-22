const People = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Document</title>
      <g
        transform="matrix(
          1 0
          0 1
          3 1
        )"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M 0 0 L 0 22 L 18 22 L 18 0 L 0 0 Z M 15 19 L 3 19 L 3 3 L 15 3 L 15 19 Z M 13 5 L 5 5 L 5 8 L 13 8 L 13 5 Z M 5 10 L 11 10 L 11 13 L 5 13 L 5 10 Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default People;
