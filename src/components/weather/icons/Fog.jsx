const Fog = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
  >
    <defs>
      <linearGradient
        id="b"
        x1="22.56"
        x2="39.2"
        y1="21.96"
        y2="50.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f3f7fe" />
        <stop offset=".45" stopColor="#f3f7fe" />
        <stop offset="1" stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="a"
        x1="27.5"
        x2="36.5"
        y1="50.21"
        y2="65.79"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#d4d7dd" />
        <stop offset=".45" stopColor="#d4d7dd" />
        <stop offset="1" stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient id="c" y1="44.21" y2="59.79" xlinkHref="#a" />
    </defs>
    <path
      fill="url(#b)"
      stroke="#e6effc"
      strokeMiterlimit="10"
      strokeWidth=".5"
      d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
    />
    <path
      fill="none"
      stroke="url(#a)"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M17 58h30"
    >
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#c)"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M17 52h30"
    >
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </path>
  </svg>
);

export default Fog;
