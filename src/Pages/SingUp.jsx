import { Checkbox, Label, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const SingUp = () => {
  const [fromdata, setFromdata] = useState("");
  const handleChage = (e) => {
    setFromdata({ ...fromdata, [e.target.id]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await fetch("http://localhost:3000/api/auth/singup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fromdata),
      });
    //   const data = await res.json()
    //   console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

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
          <form
            className=" p-4 rounded border-solid border-2 border-indigo-600   flex max-w-md flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label value="Your userName" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="tanvir_islam"
                required
                onChange={handleChage}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@flowbite.com"
                required
                onChange={handleChage}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required
                onChange={handleChage}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Sing up</Button>
            <Button
              className=" hover:text-black"
              outline
              gradientDuoTone="greenToBlue"
              type="submit"
            >
              {" "}
              <FcGoogle className="text-xl mr-3" /> Google
            </Button>
            <p className="text-sm text-center">
              Have an account?{" "}
              <Link to={"/singin"}>
                <span className="text-blue-600">sing in</span>{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
