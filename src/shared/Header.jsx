import { Button, Dropdown, Avatar, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const usePath = useLocation().pathname;
  return (
    <div>
      <Navbar className="border-b-2">
{/* update */}
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
        </div>

{/* update */}
tnn.sdfn.gdf
        <Link
          to={"/"}
          className=" self-center whitespace-nowrap  text-sm sm:text-xl font-semibold dark:text-white"
        >
          <img src="/logoipsum.svg" alt="" />
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
              Sing in
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
