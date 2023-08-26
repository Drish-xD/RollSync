'use client';

import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { Link } from '@nextui-org/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { useAuth } from 'contexts/auth';
import NextLink from 'next/link';
import { Zap } from 'react-feather';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link className="text-xl italic font-black" color="foreground" href="/" as={NextLink}>
          <Zap color="yellow" /> RollSync
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        {!isLoggedIn ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link color="foreground" href="/auth/login" as={NextLink}>
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={NextLink} color="primary" href="/auth/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        ) : (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="test"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">ab1234@srmist.edu.in</p>
              </DropdownItem>
              <DropdownItem key="settings">
                <Link as={NextLink} href="/profile">
                  My Profile
                </Link>
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                <Button onClick={logout}>Log Out</Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
