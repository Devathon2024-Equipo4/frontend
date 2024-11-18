const ThunderStormRain = () => (
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
        x1="22.53"
        x2="25.47"
        y1="42.95"
        y2="48.05"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4286ee" />
        <stop offset=".45" stopColor="#4286ee" />
        <stop offset="1" stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="29.53"
        x2="32.47"
        y1="42.95"
        y2="48.05"
        xlinkHref="#a"
      />
      <linearGradient
        id="d"
        x1="36.53"
        x2="39.47"
        y1="42.95"
        y2="48.05"
        xlinkHref="#a"
      />
      <linearGradient
        id="e"
        x1="26.74"
        x2="35.76"
        y1="37.88"
        y2="53.52"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f7b23b" />
        <stop offset=".45" stopColor="#f7b23b" />
        <stop offset="1" stopColor="#f59e0b" />
      </linearGradient>
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
      strokeWidth="2"
      d="M24.39 43.03l-.78 4.94"
    >
      <animateTransform
        attributeName="transform"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#c)"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M31.39 43.03l-.78 4.94"
    >
      <animateTransform
        attributeName="transform"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#d)"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M38.39 43.03l-.78 4.94"
    >
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
    <path
      fill="url(#e)"
      stroke="#f6a823"
      strokeMiterlimit="10"
      strokeWidth=".5"
      d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"
    >
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"
      />
    </path>
  </svg>
);

export default ThunderStormRain;
