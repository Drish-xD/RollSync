'use client';

import { Avatar, AvatarIcon } from '@nextui-org/avatar';
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
            <NavbarItem>
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
                as="button"
                color="primary"
                className="text-white/50"
                size="sm"
                icon={<AvatarIcon />}
              />
            </DropdownTrigger>
            <DropdownMenu variant="flat" aria-label="Profile Menu" title="ppcmd">
              <DropdownItem key="Dashboard">
                <Link as={NextLink} href="/dashboard" className="block">
                  Dashboard
                </Link>
              </DropdownItem>
              <DropdownItem key="Profile">
                <Link as={NextLink} href="/profile" className="block">
                  My Profile
                </Link>
              </DropdownItem>
              <DropdownItem color="danger" key="Logout">
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
