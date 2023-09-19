import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { closeMblMenu } from '../../redux/counterSlice';
import { useRouter } from 'next/router';

const LoginRegister = ({ user, navText }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (navItemValue) => {
    dispatch(closeMblMenu());
    localStorage.setItem("navItemValue", navItemValue);
  };

  if (user && user.name === undefined) {
    return (
      <>
        <Link href="/prisijungimas">
          <a onClick={() => handleClick(60)}>
            <button className="dropdown-toggle text-jacarta-700 font-display hover:text-brand focus:text-brand flex items-center justify-between py-3.5 text-base  lg:px-5 w-full">
              <span className={navText === "prisijungimas" ? "text-brand" : ""}>
                Prisijungti
              </span>
            </button>
          </a>
        </Link>
        <Link href="/registracija">
          <a onClick={() => handleClick(61)}>
            <button
              style={{ backgroundColor: "#00E573", borderRadius: "20px" }}
              className={
                router.asPath === "/home/home_3"
                  ? "font-display hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700  lg:px-5"
                  : "text-jacarta-700 font-display hover:text-accent focus:text-accent   flex items-center justify-between py-3.5 text-base  lg:px-5"
              }
            >
              <span
                style={{ color: "white" }}
                className={navText === "create" ? "text-white" : ""}
              >
                Registruotis
              </span>
            </button>
          </a>
        </Link>
      </>
    );
  }

  return null;
};

export default LoginRegister;