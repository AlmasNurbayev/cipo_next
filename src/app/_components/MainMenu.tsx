'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainMenu() {
  const pathname = usePathname();
  console.log(pathname);
  

  return (
    <div className="menu">
    <Link href="/catalog" className={pathname?.includes("/catalog") ? "menu_catalog active" : "menu_catalog"}>
      Каталог
    </Link>
    <Link href="/" className={pathname == "/" ? "menu_item active" : "menu_item"}>
      Главная
    </Link>

    <Link href="/#about" className="menu_item">
      О нас
    </Link>
    <Link href="/#news" className="menu_item">
      Новости
    </Link>
    <Link href="/#stores" className="menu_item">
      Магазины
    </Link>
  </div>
)
}

