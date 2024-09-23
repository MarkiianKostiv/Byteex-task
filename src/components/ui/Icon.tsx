interface IconProps {
  name:
    | "sunMoon"
    | "wave"
    | "cart"
    | "arrow"
    | "leaf"
    | "arrowLeft"
    | "arrowRight"
    | "star";
  width?: number;
  height?: number;
  strokeColor?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  width = 23,
  height = 23,
  strokeColor = "#15005B",
  className = "",
}) => {
  const icons = {
    sunMoon: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 23 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`transition-colors duration-300 ${className}`}
      >
        <path
          d='M11.5 1.5V22'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.4999 17.2694C8.4486 17.2694 5.98071 14.8015 5.98071 11.7502C5.98071 8.69884 8.4486 6.23096 11.4999 6.23096'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.25391 4.50439L5.92545 6.17593'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1.25 11.75H3.61538'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.25391 18.9962L5.92545 17.3247'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.5 9.03C12.4462 7.35846 14.2438 6.23096 16.3017 6.23096C16.4279 6.23096 16.5462 6.23884 16.6723 6.24673C15.3556 6.94057 14.4646 8.32038 14.4646 9.90519C14.4646 12.1917 16.3175 14.0446 18.604 14.0446C19.8656 14.0446 20.9931 13.4769 21.75 12.586C21.34 15.2431 19.0613 17.2694 16.3017 17.2694C14.2438 17.2694 12.4462 16.1419 11.5 14.4704'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    wave: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 14 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`transition-colors duration-300 ${className}`}
      >
        <path
          d='M1.27847 3.30024C2.63721 1.98269 3.71052 0.940956 6.62322 2.79957C8.02241 3.69199 9.15093 4.02928 10.0897 4.02752C11.7346 4.02752 12.801 2.99457 13.7226 2.10127C13.8808 1.94585 13.9792 1.72696 13.9969 1.49101C14.0146 1.25506 13.9502 1.02059 13.8175 0.837309C13.7527 0.747372 13.6726 0.673016 13.582 0.618641C13.4913 0.564266 13.3919 0.530976 13.2897 0.520739C13.1875 0.510502 13.0844 0.523527 12.9867 0.559043C12.889 0.59456 12.7986 0.651846 12.7208 0.727513C11.3629 2.04681 10.2888 3.08855 7.37609 1.22818C3.52775 -1.22509 1.7249 0.522855 0.276718 1.92824C0.118639 2.08378 0.0204057 2.30273 0.00283814 2.53868C-0.0147295 2.77463 0.0497497 3.00903 0.182609 3.1922C0.247414 3.28198 0.327508 3.35617 0.418151 3.41038C0.508794 3.46458 0.608144 3.4977 0.710322 3.50778C0.812499 3.51785 0.915428 3.50467 1.01302 3.46902C1.11061 3.43338 1.20087 3.37598 1.27847 3.30024ZM12.7208 5.21331C11.3629 6.53086 10.2888 7.57435 7.37609 5.71398C3.52775 3.25895 1.7249 5.00778 0.276718 6.41228C0.118639 6.56782 0.0204057 6.78677 0.00283814 7.02272C-0.0147295 7.25867 0.0497497 7.49307 0.182609 7.67624C0.247302 7.76615 0.32731 7.84049 0.417897 7.89485C0.508484 7.94922 0.607808 7.98251 0.709989 7.99274C0.812171 8.00298 0.915132 7.98996 1.01278 7.95446C1.11043 7.91895 1.20077 7.86168 1.27847 7.78604C2.63721 6.46761 3.71052 5.42588 6.62322 7.28361C8.02241 8.17779 9.15093 8.51332 10.0897 8.51332C11.7346 8.51332 12.801 7.48037 13.7226 6.58532C13.8809 6.43017 13.9794 6.2114 13.9971 5.97553C14.0148 5.73966 13.9504 5.50528 13.8175 5.32223C13.7527 5.23225 13.6726 5.15788 13.5819 5.10351C13.4913 5.04915 13.3918 5.0159 13.2896 5.00574C13.1873 4.99558 13.0843 5.00872 12.9866 5.04438C12.8889 5.08003 12.7985 5.13748 12.7208 5.21331ZM12.7208 9.69823C11.3629 11.0175 10.2888 12.0593 7.37609 10.2007C3.52775 7.74563 1.7249 9.49358 0.276718 10.899C0.118639 11.0545 0.0204057 11.2734 0.00283814 11.5094C-0.0147295 11.7453 0.0497497 11.9797 0.182609 12.1629C0.24735 12.2528 0.327419 12.3271 0.418064 12.3814C0.508709 12.4356 0.608084 12.4688 0.710292 12.4789C0.812501 12.489 0.91546 12.4757 1.01306 12.44C1.11066 12.4043 1.20092 12.3468 1.27847 12.271C2.63721 10.9534 3.71052 9.91255 6.62322 11.7703C8.02241 12.6627 9.15093 13 10.0897 13C11.7346 13 12.801 11.9653 13.7226 11.072C13.8808 10.9166 13.9792 10.6977 13.9969 10.4617C14.0146 10.2258 13.9502 9.99131 13.8175 9.80803C13.7527 9.71819 13.6726 9.64393 13.5819 9.58963C13.4913 9.53532 13.3919 9.50207 13.2897 9.49184C13.1875 9.4816 13.0845 9.4946 12.9868 9.53004C12.8891 9.56549 12.7987 9.62268 12.7208 9.69823Z'
          fill={strokeColor}
        />
      </svg>
    ),
    cart: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 21 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`transition-colors duration-300 ${className}`}
      >
        <path
          d='M6.34717 3.24034C6.34717 3.00909 6.54012 2.82167 6.7782 2.82167H16.855C16.9806 2.82167 17.1 2.87498 17.1819 2.9675C17.2638 3.06008 17.3 3.1828 17.2811 3.30347L16.8506 6.04613C16.818 6.25333 16.6343 6.40177 16.425 6.40177C16.4034 6.40177 16.3815 6.40024 16.3595 6.39694C16.1241 6.36209 15.9624 6.14852 15.9983 5.91992L16.3532 3.65902H6.7782C6.54012 3.65902 6.34717 3.47155 6.34717 3.24034ZM9.61959 10.3779H5.79966L4.20705 1.34797C4.17161 1.14696 3.99221 1 3.7822 1H1.43103C1.19296 1 1 1.18743 1 1.41868C1 1.64993 1.19296 1.83735 1.43103 1.83735H3.41875L5.01136 10.8673C5.04732 11.0713 5.22955 11.2154 5.43568 11.2154C5.45982 11.2153 5.48439 11.2134 5.50896 11.2093C5.51068 11.2089 5.51236 11.2087 5.51408 11.2083C5.53946 11.2129 5.56566 11.2152 5.59238 11.2152H9.61959C9.85767 11.2152 10.0506 11.0278 10.0506 10.7965C10.0506 10.5653 9.85767 10.3779 9.61959 10.3779ZM8.78646 13.3407V14.0837C8.78646 14.782 8.20155 15.3502 7.48259 15.3502C6.76364 15.3502 6.17873 14.782 6.17873 14.0837V13.3407C6.17873 12.6423 6.76359 12.0742 7.4825 12.0742C8.2015 12.0742 8.78646 12.6423 8.78646 13.3407ZM7.9244 13.3407C7.9244 13.1041 7.72622 12.9116 7.48259 12.9116H7.4825C7.23897 12.9116 7.04079 13.1041 7.04079 13.3407V14.0837C7.04079 14.3203 7.23897 14.5128 7.4825 14.5128C7.72617 14.5128 7.9244 14.3203 7.9244 14.0837V13.3407ZM19.9404 9.43574C19.6861 11.4206 18.6512 13.1904 17.0264 14.4192C15.659 15.4533 14.0115 16 12.3059 16C11.9848 16 11.6617 15.9806 11.3379 15.9414C11.0671 15.9086 10.7941 15.8611 10.5263 15.8003C10.3465 15.7595 10.2135 15.6121 10.1954 15.4336C10.1395 14.8812 10.147 14.3206 10.2179 13.7677C10.7431 9.6703 14.6023 6.75156 18.8205 7.26188C19.0916 7.29472 19.3646 7.34222 19.6321 7.40297C19.8118 7.44382 19.9448 7.59119 19.9629 7.76955C20.019 8.32174 20.0114 8.88234 19.9404 9.43574ZM19.1286 8.15571C18.9906 8.13063 18.8519 8.10961 18.7138 8.09286C14.9677 7.63994 11.5398 10.232 11.0733 13.8712C11.0467 14.0788 11.0302 14.2875 11.0236 14.4963L14.9669 11.1406C15.1458 10.9882 15.4182 11.0056 15.5751 11.1796C15.7319 11.3535 15.714 11.6181 15.5349 11.7704L11.5909 15.1267C13.3556 15.3036 15.0924 14.8204 16.4967 13.7584C17.9398 12.667 18.859 11.0951 19.0849 9.33224C19.1351 8.94161 19.1497 8.54712 19.1286 8.15571Z'
          fill={strokeColor}
          stroke={strokeColor}
          strokeWidth='0.3'
        />
      </svg>
    ),
    arrow: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 23 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781L0 3.93781V6.06226L19.0205 6.06226L16.6372 8.4978L18.1072 10Z'
          fill={strokeColor}
        />
      </svg>
    ),
    leaf: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 23 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.6772 19.8173C22.2798 19.4699 21.6744 19.5075 21.3243 19.9018C19.7161 21.7091 17.928 21.0519 17.0955 20.5778C18.8126 9.75761 14.9291 7.74379 9.58868 4.9742C7.34183 3.81003 4.79697 2.48626 2.22374 0.237728C1.97303 0.0170998 1.62773 -0.0533136 1.3108 0.0405708C0.993881 0.134455 0.74791 0.387943 0.662766 0.70715C-0.732647 5.97406 0.0904102 11.0955 2.99003 15.1231C5.83762 19.0803 10.3455 21.4979 15.6954 21.9532C16.4569 22.4836 17.6348 23 18.9403 23C20.1843 23 21.5419 22.5306 22.7623 21.1599C23.1076 20.7656 23.0745 20.1647 22.6772 19.8173ZM4.551 14.0153C2.25685 10.8326 1.43852 6.85658 2.18589 2.67872C4.48951 4.47661 6.70798 5.62669 8.6994 6.65942C13.5715 9.18491 16.4096 10.6589 15.3974 18.8738L12.9235 15.8789L13.4438 12.8088C13.5289 12.2925 13.1789 11.7996 12.6539 11.7151C12.1335 11.6306 11.6369 11.978 11.5517 12.4943L11.3105 13.9261L7.9804 9.89374L6.1167 7.0866C5.82816 6.64534 5.23215 6.52329 4.78751 6.81433C4.3476 7.10068 4.22462 7.69215 4.51316 8.12871L6.40051 10.9781C6.41943 11.0063 6.43835 11.0344 6.46201 11.0579L7.42697 12.2268L6.73163 12.2362C6.20184 12.2455 5.78086 12.6774 5.78559 13.1985C5.79505 13.7195 6.22077 14.1373 6.74582 14.1373C6.75055 14.1373 6.75528 14.1373 6.76001 14.1373L8.98321 14.1045L13.6283 19.7328C9.83465 18.9348 6.6654 16.9538 4.551 14.0153Z'
          fill={strokeColor}
        />
      </svg>
    ),
    arrowRight: (
      <svg
        fill={strokeColor}
        width={width}
        height={height}
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 330 330'
      >
        <path
          id='XMLID_222_'
          d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z'
        />
      </svg>
    ),
    arrowLeft: (
      <svg
        fill={strokeColor}
        width={width}
        height={height}
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 330 330'
        transform='rotate(180)'
      >
        <g
          id='SVGRepo_bgCarrier'
          strokeWidth='0'
        />
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <g id='SVGRepo_iconCarrier'>
          <path
            id='XMLID_222_'
            d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z'
          />
        </g>
      </svg>
    ),
    star: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 14 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.6069 4.9397C13.584 4.86877 13.5416 4.80571 13.4846 4.75765C13.4276 4.70958 13.3583 4.67846 13.2846 4.66779L9.06058 4.05402L7.17107 0.222795C7.13804 0.156049 7.087 0.0998647 7.02374 0.0605837C6.96046 0.0213028 6.88748 0.000488281 6.81301 0.000488281C6.73854 0.000488281 6.66555 0.0213028 6.60228 0.0605837C6.53901 0.0998647 6.48798 0.156049 6.45494 0.222795L4.56543 4.05113L0.34145 4.66491C0.267816 4.67573 0.198669 4.7069 0.141801 4.75491C0.0849324 4.80293 0.0426044 4.86587 0.0195874 4.93665C-0.00342967 5.00743 -0.00622073 5.08324 0.0115288 5.15552C0.0292782 5.2278 0.0668627 5.29369 0.120046 5.34575L3.17643 8.32519L2.45524 12.5329C2.44317 12.606 2.45163 12.6809 2.47968 12.7495C2.50774 12.818 2.55428 12.8774 2.61412 12.921C2.67396 12.9646 2.74474 12.9907 2.81857 12.9964C2.89239 13.0022 2.96635 12.9873 3.03219 12.9534L6.81337 10.9693L10.5917 12.9555C10.6576 12.9895 10.7316 13.0044 10.8055 12.9987C10.8794 12.9929 10.9503 12.9667 11.0101 12.923C11.07 12.8793 11.1165 12.8198 11.1445 12.7512C11.1725 12.6825 11.1808 12.6075 11.1686 12.5343L10.4474 8.32664L13.5045 5.3472C13.5578 5.29553 13.5956 5.23002 13.6137 5.15803C13.6318 5.08604 13.6295 5.01042 13.6069 4.9397Z'
          fill={strokeColor}
        />
      </svg>
    ),
  };

  return icons[name] || null;
};
