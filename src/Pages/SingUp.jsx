import { Checkbox, Label, TextInput, Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const SingUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 text-current items-center justify-center mx-auto flex-col md:items-center md:flex-row">
        {/* left */}
        <div className="w-1/2">
          <img className="max-h-96  w-fit" src="/singup.png" alt="" />
        </div>
        {/* right */}
        <div className="w-96 card ">
            <h1 className="text-4xl my-4 text-center">Sing up</h1>
          <form className=" p-4 rounded border-solid border-2 border-indigo-600   flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label value="Your userName" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="tanvir_islam"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Sing up</Button>
            <Button className=" hover:text-black" outline gradientDuoTone="greenToBlue"  type="submit"> <FcGoogle className="text-xl mr-3"/> Google</Button>
            <p className="text-sm text-center">Have an account? <Link to={'/singin'}><span className="text-blue-600">sing in</span> </Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
