import Image from "next/image";
import { Button } from "./ui/button";
import { Link, MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <div className="relative h-[30px] w-[100px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={30}
            className="object-cover"
          />
        </Link>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
