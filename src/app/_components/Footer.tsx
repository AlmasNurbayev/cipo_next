import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="left">
        <p>2024 г. - ИП Incore</p>
        <p>Нурбаев Алмас Муратович</p>
        <p>БИН/ИИН: 800727301256</p>
        <p>Cipo ® - зарегистрированная торговая марка </p>
      </div>
      <div className="center">
        <b>Контакты</b>
        <div className="social">
          <Link href="https://www.instagram.com/cipo.kz/">
            <Image
              src="/components/footer_instagram_ico.png"
              width={30}
              height={30}
              alt="Instagram"
            />
          </Link>

          <Link href="https://wa.me/77788121260">
            <Image
              src="/components/footer_whatsapp_ico.png"
              width={30}
              height={30}
              alt="Instagram"
            />
          </Link>
          <Link href="mailto:info@cipo.kz">
            <Image
              src="/components/footer_email_ico.png"
              width={30}
              height={30}
              alt="Instagram"
            />
          </Link>
        </div>
        <Link href="tel:+77788121260">+7 778 8121260</Link>
      </div>
      <div className="right">
        {/* TODO */}
        <div>
          <Link href="/faq">Вопросы и ответы</Link>
        </div>
        <div>
          <Link href="/sitemap.xml">Карта сайта - sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
