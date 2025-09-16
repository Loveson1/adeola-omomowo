import { useEffect, useState } from "react";
import Menu from "../assets/icons/nav1.svg";
import Close from "../assets/icons/nav2.svg";
import Resume from "../assets/documents/Omomowo Adeola Resume.pdf";
import { Sun, Moon } from "lucide-react";

export default function Nav() {
  const [toggle, settoggle] = useState(false);

  const Navlinks = [
    { id: "story", title: "My Story" },
    { id: "work", title: "Workflow" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);

  const [darkMode, setDarkMode] = useState(false);

  // toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav id="nav" className="w-full flex py-6  justify-between items-center ">
      <a href="home">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 1683.000000 1469.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1469.000000) scale(0.100000,-0.100000)"
            stroke="none"
            fill="black"
            className="dark:fill-slate-200 dark:hover:fill-darkpurple hover:fill-purple mt-[-50px]"
          >
            <path
              d="M9254 10121 c-43 -4 -83 -15 -105 -28 -19 -11 -56 -23 -84 -27 -27
-3 -61 -14 -75 -25 -14 -10 -46 -27 -71 -38 -26 -12 -49 -26 -53 -32 -4 -6
-26 -19 -49 -29 -42 -19 -207 -175 -260 -245 -16 -20 -37 -57 -48 -81 -10 -24
-25 -49 -33 -55 -8 -7 -20 -29 -27 -49 -6 -20 -22 -60 -35 -88 -15 -31 -29
-93 -39 -165 -8 -63 -20 -132 -25 -154 -6 -25 -10 -553 -10 -1367 0 -1133 2
-1335 15 -1385 8 -32 19 -98 25 -148 7 -54 19 -103 31 -123 10 -18 24 -53 30
-77 6 -24 22 -59 35 -76 13 -18 24 -38 24 -45 0 -7 16 -31 35 -54 19 -23 35
-45 35 -49 0 -8 132 -144 166 -171 62 -50 149 -110 159 -110 7 0 18 -7 25 -15
7 -8 38 -23 69 -32 31 -8 72 -24 93 -35 23 -12 90 -26 185 -38 139 -19 225
-20 1474 -20 825 0 1346 4 1380 10 30 5 94 14 142 19 55 6 108 20 140 34 29
14 66 27 82 31 17 4 46 17 65 29 19 13 42 27 51 32 124 74 294 238 339 325 7
14 24 38 36 53 13 16 24 37 24 46 0 10 9 30 20 44 11 14 28 58 36 99 9 40 26
91 38 113 l21 40 3 1445 c1 863 -2 1480 -7 1532 -6 48 -16 97 -24 110 -8 13
-22 55 -31 93 -10 39 -25 79 -35 90 -10 11 -22 34 -25 50 -4 17 -18 44 -30 60
-13 17 -30 44 -39 60 -8 17 -55 69 -104 117 -123 121 -140 136 -172 152 -15 8
-33 22 -40 30 -8 9 -35 22 -61 30 -27 8 -57 23 -69 35 -11 11 -41 23 -68 27
-26 3 -75 18 -108 33 l-60 26 -1460 1 c-803 1 -1492 -2 -1531 -5z m1618 -931
c57 -6 135 -22 173 -35 39 -13 86 -27 105 -31 19 -3 53 -17 76 -30 22 -13 47
-24 55 -24 8 0 39 -16 69 -35 30 -19 61 -35 67 -35 23 0 235 -164 291 -225 20
-22 52 -54 70 -72 17 -17 32 -35 32 -38 0 -4 12 -21 26 -39 34 -41 94 -133 94
-144 0 -4 16 -32 35 -62 19 -30 35 -63 35 -73 0 -10 11 -37 24 -60 13 -23 27
-62 31 -87 4 -25 19 -72 33 -105 26 -60 26 -60 27 -345 0 -274 -1 -287 -22
-331 -12 -25 -29 -78 -37 -118 -8 -40 -24 -87 -34 -104 -11 -18 -23 -45 -26
-62 -4 -16 -34 -73 -67 -126 -32 -54 -59 -101 -59 -106 0 -5 -12 -20 -27 -35
-16 -14 -50 -52 -78 -84 -61 -72 -193 -194 -221 -204 -11 -4 -26 -15 -34 -25
-7 -9 -32 -26 -54 -37 -23 -11 -50 -28 -61 -38 -11 -9 -33 -21 -50 -24 -16 -4
-43 -18 -60 -30 -16 -12 -52 -29 -80 -36 -27 -8 -64 -22 -81 -32 -18 -10 -68
-23 -113 -28 -44 -5 -100 -15 -123 -22 -58 -17 -411 -18 -453 -1 -16 7 -68 17
-114 23 -50 6 -98 18 -118 30 -19 11 -55 25 -81 32 -26 6 -60 22 -75 35 -16
12 -41 26 -55 30 -15 3 -39 15 -54 27 -14 12 -56 39 -93 61 -74 45 -313 272
-339 323 -9 18 -20 32 -25 32 -4 0 -16 18 -26 39 -10 22 -28 50 -41 62 -13 12
-24 28 -24 34 0 6 -13 31 -29 56 -15 25 -31 61 -35 81 -3 20 -18 57 -32 83
-16 30 -29 77 -35 127 -5 44 -18 98 -27 121 -14 35 -17 76 -17 237 0 130 4
206 12 229 7 18 20 75 29 125 8 50 24 106 35 124 10 19 24 55 30 80 5 26 21
63 33 82 13 19 29 51 35 71 7 20 21 45 31 54 11 10 20 23 20 30 0 12 69 106
115 158 14 15 25 32 25 37 0 5 14 17 30 27 17 9 30 23 30 30 0 7 10 18 23 24
12 7 33 23 47 37 41 40 124 102 136 102 6 0 18 8 27 18 15 15 108 65 227 120
204 95 479 131 772 102z"
            />
            <path
              d="M6955 9811 c-11 -5 -61 -47 -110 -94 -50 -47 -97 -92 -105 -100 -8
-7 -33 -33 -56 -58 -23 -24 -61 -63 -85 -86 -24 -23 -67 -65 -96 -95 -29 -29
-58 -59 -65 -66 -7 -7 -35 -34 -62 -60 -27 -26 -67 -67 -90 -91 -22 -25 -49
-52 -58 -60 -32 -29 -71 -67 -96 -95 -9 -10 -177 -178 -372 -373 -195 -194
-373 -372 -395 -394 -22 -22 -75 -74 -118 -117 -43 -42 -113 -112 -155 -155
-43 -42 -109 -110 -148 -150 -40 -39 -80 -80 -90 -89 -19 -17 -31 -29 -60 -58
-32 -33 -174 -176 -186 -188 -7 -7 -61 -61 -120 -120 -58 -59 -144 -143 -190
-188 -46 -45 -102 -101 -125 -125 -42 -44 -74 -77 -92 -92 -15 -14 -123 -122
-156 -157 -5 -6 -32 -32 -59 -58 -27 -26 -54 -53 -60 -60 -10 -12 -25 -28 -59
-61 -7 -6 -117 -117 -246 -245 -128 -129 -238 -238 -243 -244 -170 -169 -234
-233 -250 -248 -11 -10 -46 -46 -78 -79 -94 -96 -125 -206 -78 -284 22 -37 89
-105 119 -122 11 -5 839 -9 2074 -9 2262 0 2081 -5 2158 62 72 63 67 -86 67
2153 0 2172 1 2107 -52 2147 -13 10 -33 28 -46 40 -19 20 -34 23 -110 25 -48
2 -96 -1 -107 -6z"
            />
          </g>
        </svg>
      </a>

      <div className="flex items-center">
        {Navlinks.map((nav, index) => (
          <ul className="inline-flex">
            <li
              key={nav.id}
              className={`font-normal cursor-pointer ${
                index === Navlinks.length - 1 ? "mr-0" : "mr-5"
              } list-none  justify-end  sm:flex hidden li }
              `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          </ul>
        ))}
        <a href={Resume} download="">
          <input
            type="button"
            value={"Resume"}
            className=" cursor-pointer ml-5 sm:inline-flex hidden res "
          />
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className=" cursor-pointer ml-5  res max-sm:res max-sm:p-2 max-sm:mr-5  "
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          )}
        </button>
      </div>
      <div className="sm:hidden inline-flex items-center justify-items-center text-center ">
        <div
          className=" z-50 relative size-7 dark:text-slate-200 text-black"
          onClick={() => settoggle((prev) => !prev)}
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 mt-[-3px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 mt-[-3px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </div>

        {toggle && (
          <div>
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
              onClick={() => settoggle(false)}
              onWheel={() => settoggle(false)}
              onDoubleClick={() => settoggle(false)}
            />
            <div
              className={` sidebar justify-start py-28 flex-col flex bg-white  dark:bg-black fixed top-0 right-0  min-w-[200px]  h-full ring-2 ring-gray-600 dark:ring-gray-400  m-0 max-w-[500px] z-40 `}
            >
              {Navlinks.map((nav, index) => (
                <ul
                  className={`flex-col `}
                  onClick={() => settoggle((prev) => !prev)}
                >
                  <li
                    key={nav.id}
                    className={`font-normal cursor-pointer dark:hover:text-darkpurple hover:text-purple ${
                      index === Navlinks.length - 1 ? "mb-5" : "mb-5"
                    } list-none  justify-end  sm:flex 
              `}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                </ul>
              ))}
              <a href={Resume} download="">
                <input
                  type="button"
                  value={"Resume"}
                  className="cursor-pointer sm:inline-flex res "
                  onClick={() => settoggle((prev) => !prev)}
                />
              </a>
            </div>{" "}
          </div>
        )}
      </div>
    </nav>
  );
}
