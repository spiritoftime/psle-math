import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { NavComboBox } from "./navComboBox";
import dynamic from "next/dynamic";
import { getUser } from "@/app/login/actions";
import { useGetUser } from "@/app/application/queries/useGetUser";
const DynamicAuthNav = dynamic(() => import("@/components/ui/authNav"), {
  ssr: false,
});
const NavDropdownMenu = () => {
  const { data: user } = useGetUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Topic Navigator</DropdownMenuLabel>
        <div className="flex justify-center">
          <NavComboBox />
        </div>
        <DropdownMenuSeparator />
        {user && (
          <>
            <DropdownMenuLabel>User services</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem></DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuLabel>Authentication</DropdownMenuLabel>
            <DynamicAuthNav />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdownMenu;
