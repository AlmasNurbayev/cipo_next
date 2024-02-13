import Link from 'next/link';
import { cipoListNews, cipoListStores, cipoProductNews } from '@/api/cipo.api';
import { Istore } from '@/types/store';
import { Inews } from '@/types/news';
import { IproductNew } from '@/types/productsNews';
import Image from 'next/image';
import { config } from '@/config/constants';
import CardProductHorizontal from './_components/CardProductHorizontal/CardProductHorizontal';
import Button from './_components/Button';

export default async function Home() {
  const news = (await cipoListNews()).data;
  const stores = (await cipoListStores()).data;
  const newProducts = (await cipoProductNews()).data;

  return (
    <main className="main">
      <div className="banner">
        <div className="left">
          <Image
            src="/main/main_2_central.webp"
            alt="banner"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className="right">
          <div className="row">
            <div className="right_column">
              <Image
                src="/main/ico_podbor_color.png"
                width={100}
                height={100}
                alt="подбор"
              ></Image>
            </div>
            <div className="right_column">Правильно подберем обувь в наших магазинах</div>
          </div>
          <div className="row">
            <div className="right_column">
              <Image
                src="/main/ico_wheather-color.png"
                width={100}
                height={100}
                alt="подбор"
              ></Image>
            </div>
            <div className="right_column">
              Обувь под нашим брендом Cipo разрабОТАНА с учетом нашего опыта и климата
            </div>
          </div>

          <div className="row">
            <div className="right_column">
              <Image
                src="/main/ico_anatomy_color.png"
                width={100}
                height={100}
                alt="подбор"
              ></Image>
            </div>
            <div className="right_column">
              Мы используем анатомические стельки и натуральные материалы
            </div>
          </div>
        </div>
      </div>
      <div className="new_products">
        <div className="title_section">Новинки</div>
        <div className="wrapper">
          {newProducts.map((item: IproductNew) => (
            <CardProductHorizontal key={'IproductNew' + item.product_id} item={item} />
          ))}
        </div>
        <div className="button_wrapper">
          <Link href="/catalog">
            <Button width={300} height={50}>
              <span className="menu_catalog">Перейти в каталог</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="news">
        <div className="title_section">Новости</div>
        <div className="wrapper"></div>
      </div>

      <div id="news">
        <h3>news</h3>
        <ul>
          {news.map((item: Inews) => (
            <li key={item.id}>
              <Link href={'/news/' + item.id}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div id="stores">
        <h3>stores</h3>
        <ul>
          {stores.map((item: Istore) => (
            <li key={item.id}>
              <div>
                <Link href={'/stores/' + item.id}>{item.name_1c}</Link>
              </div>
              <div>{item.address}</div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>new products</h3>
        <ul>
          {newProducts.map((item: IproductNew) => (
            <li key={item.product_id + JSON.stringify(item.qnt_price)}>
              {item.product_name}
              {item.artikul}
              {item.image_active_path}
              <Image
                src={config.backendUrl + '/' + item.image_active_path}
                width={100}
                height={100}
                alt={item.product_name}
              />
            </li>
          ))}
        </ul>
      </div>

      <h2>
        <Link href="/posts_server/">Posts_server</Link>
      </h2>
      <h2>
        <Link href="/posts_mix/">Posts_mix</Link>
      </h2>
      <div id="about">
        <h2>about</h2>
      </div>
      <h2>
        <Link href="/catalog/">Goods</Link>
      </h2>
    </main>
  );
}
