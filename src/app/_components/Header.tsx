import Link from 'next/link';
import Image from 'next/image';
import Input from './Input';
import { config } from '@/config/constants';
import { permanentRedirect } from 'next/navigation';
import MainMenu from './MainMenu';

export default function Header() {
  async function onSubmit(formData: FormData) {
    'use server';
    const searchText = formData.get('search_text');
    permanentRedirect(encodeURI(`/catalog/?search_name=${searchText}`));
  }

  // const headersList = headers();
  // const host = headersList.get('host');
  // const url = headersList.get('url');
  // console.log(host, url);

  return (
    <header className="header">
      <div className="first_line">
        <div></div>
        <Link href="/">
          <div className="logo">
            <Image src="/main/cipo200-122.png" alt="logo" fill />
          </div>
        </Link>
        <form className="search_form" action={onSubmit}>
          <Input
            name="search_text"
            style={{
              borderColor: config.defaultStyle.borderColor,
              borderRadius: 5,
              borderStyle: 'solid',
              borderWidth: 1,
            }}
            type="text"
            placeholder="поиск..."
            height={30}
          ></Input>
          <button type="submit" className="image_right" />
        </form>
      </div>
      <div className="second_line">
        <MainMenu />
        <Link href="https://wa.me/77788121260">
          <div className="whatsapp">
            <Image
              className="whatsapp_icon"
              src="/main/ico_whatsapp.png"
              alt="whatsapp"
              width={40}
              height={40}
            ></Image>
            <div className="whatsapp_text">Задать вопрос</div>
          </div>
        </Link>
      </div>
    </header>
  );
}
