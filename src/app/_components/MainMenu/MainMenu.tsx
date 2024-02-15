'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import './MainMenu.css';

export default function MainMenu() {
  const pathname = usePathname();
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <nav className="menu">
      <Image
        src={
          openBurger
            ? '/components/menu/menu-close-svgrepo-com.svg'
            : '/components/menu/menu-burger-svgrepo-com.svg'
        }
        width={50}
        height={50}
        alt="burger"
        className="burger"
        onClick={() => {
          setOpenBurger(!openBurger);
        }}
      ></Image>
      <div className={openBurger ? 'menu_wrapper active' : 'menu_wrapper'}>
        <Link
          href="/"
          className={pathname == '/' ? 'menu_item active' : 'menu_item'}
          onClick={() => {
            setOpenBurger(!openBurger);
          }}
        >
          Главная
        </Link>

        <Link
          href="/catalog"
          onClick={() => {
            setOpenBurger(!openBurger);
          }}
          className={
            pathname?.includes('/catalog') ? 'menu_catalog active' : 'menu_catalog'
          }
        >
          Каталог
        </Link>

        <Link
          href="/#about"
          className="menu_item"
          onClick={() => {
            setOpenBurger(!openBurger);
          }}
        >
          О нас
        </Link>
        <Link
          href="/#news"
          className="menu_item"
          onClick={() => {
            setOpenBurger(!openBurger);
          }}
        >
          Новости
        </Link>
        <Link
          href="/#stores"
          className="menu_item"
          onClick={() => {
            setOpenBurger(!openBurger);
          }}
        >
          Магазины
        </Link>
      </div>
    </nav>
  );
}
