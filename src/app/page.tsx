import Link from 'next/link';
import { cipoListNews, cipoListStores, cipoProductNews } from '@/api/cipo.api';
import { Istore } from '@/types/store';
import { Inews } from '@/types/news';
import { IproductNew } from '@/types/productsNews';
import Image from 'next/image';
import CardProductHorizontal from './_components/CardProductHorizontal/CardProductHorizontal';
import Button from './_components/Button';
import NewsCard from './_components/NewsCard/NewsCard';
import StoreCard from './_components/StoreCard/StoreCard';
import './page.css'

export default async function Home() {
  const news = (await cipoListNews()).data;
  const stores = (await cipoListStores()).data;
  const newProducts = (await cipoProductNews()).data;

  return (
    <main className="main">
      <div className="banner">
        <div className="left">
          <Image
            className="image"
            src="/main/main_2_central.webp"
            alt="banner"
            width={350}
            height={300}
            
          ></Image>
        </div>
        <div className="right">
          <div className="row">
            <div>
              <Image
                src="/main/ico_podbor_color.png"
                width={100}
                height={100}
                alt="подбор"
              ></Image>
            </div>
            <div className="text_column">Правильно подберем обувь в наших магазинах</div>
          </div>
          <div className="row">
            <div>
              <Image
                src="/main/ico_wheather-color.png"
                width={100}
                height={100}
                alt="подбор"
              ></Image>
            </div>
            <div className="text_column">
              Обувь под нашим брендом Cipo разработана с учетом нашего опыта и климата
            </div>
          </div>

          <div className="row">
            <div>
              <Image
                src="/main/ico_anatomy_color.png"
                width={100}
                height={100}
                alt="подбор"
              ></Image>
            </div>
            <div className="text_column">
              Мы используем анатомические стельки и натуральные материалы
            </div>
          </div>
        </div>
      </div>
      <div className="new_products">
        <div className="title_section">Новинки</div>
        <div className="wrapper">
          {newProducts.map((item: IproductNew, index) => (
            <Link
              key={'new_products link' + index + item.product_id}
              href={'/catalog/' + item.product_id}
            >
              <CardProductHorizontal key={'new_products ' + index + item.product_id} item={item} />
            </Link>
          ))}
        </div>
        <div className="button_wrapper">
          <Link href="/catalog">
            <Button width={200} height={50}>
              <span className="button_title">Перейти в каталог</span>
            </Button>
          </Link>
        </div>
      </div>

      <div id="news" className="news">
        <div className="title_section">Новости и события</div>
        <div className="wrapper">
          {news.map((item: Inews) => (
            <NewsCard key={'news' + item.id} item={item} />
          ))}
        </div>
      </div>

      <div id="stores" className="stores">
        <div className="title_section">Наши магазины</div>
        <div className="wrapper">
          {stores.map((item: Istore) => (
            <StoreCard key={'stores' + item.id_1c} item={item} />
          ))}
        </div>
      </div>

      <div id="about" className="about">
        <div className="title_section">О нас</div>
        <div className="wrapper">
          <div className="left">
            <Image src="/main/anelya.webp" alt="Анэля" fill className='image'></Image>
          </div>
          <div className="right">
            <span>
              <p>
                Для своих детей всегда было сложно найти качественную обувь и каждый сезон
                такой поиск был стрессом. Моя миссия - помочь родителям с этим.
              </p>
              <p>
                Многие модели от известных производителей
                не устраивали качеством, многие - не подходили под нашу погоду
                материалами. А с дизайном обуви вообще беда (если мы не говорим про
                премиальные бренды, не доступные основному населению). Поэтому мы разрабатываем свои модели - адаптированные под наши условия. 
              </p>
              <p>
                Мы - социально ориентированный бренд, предоставляем скидки многодетным родителям и особенным детям. 
              </p>
            </span>
          </div>
        </div>
      </div>
      <h2>
        <Link href="/posts_server/">Posts_server</Link>
      </h2>
      <h2>
        <Link href="/posts_mix/">Posts_mix</Link>
      </h2>
    </main>
  );
}
