import Link from 'next/link';

function Header() {
    const logoutOfApp = () => {

    };
  
    return (
        <div className="md:text-adainblack hover:text-adainwhite  bg-adainyellow hover:bg-adainblack md:bg:hover-adainblack rounded-xl lg:m-8 p-1  w-42 shadow-md">
        <Link href="/SignIn" className="sm:px-10 text-sm pr-2 mr-4 text-lg  lg:my-20" onClick={() => handleClick('checkout')}>
        <button onClick={logoutOfApp}>Logout</button> 
        </Link>
      </div>

      
    );
  }

export default Header;