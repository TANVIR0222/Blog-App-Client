import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const usePath = useLocation().pathname;
  return (
    <div>
      <Navbar className="border-b-2">
        <Link
          to={"/"}
          className=" self-center whitespace-nowrap  text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className=" px-2 py-1 rounded text-white bg-gradient-to-r from-cyan-500 to-blue-500">
            Tanvir
          </span>
          <span>Blogs</span>
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className=" hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden">
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 hidden lg:inline" color={"gray"} pill>
            <FaMoon />
          </Button>
          <Link to={'/singin'}>
            <Button>
              Singin
            </Button>
          </Link>
        </div>
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Navbar.Link active={usePath === '/'} as={'div'}>
          <Link to={'/'} >Home</Link>
        </Navbar.Link>
        <Navbar.Link active={usePath === '/about'} as={'div'} >
          <Link to={'/about'}>About</Link>
        </Navbar.Link >
        <Navbar.Link active={usePath === '/project'} as={'div'}>
        <Link to={'/project'}>Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
