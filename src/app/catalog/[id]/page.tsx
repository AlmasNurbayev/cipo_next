import { cipoGetProduct, cipoListStores } from '@/api/cipo.api';
import ImageSlider from '@/app/_components/ImageSlider/ImageSlider';
import { Metadata } from 'next';
import 'server-only';
import './page.css';
import Script from 'next/script';

type Props = {
  params: { id: string };
  // searchParams: { [key: string]: string | string[] | undefined }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = (await cipoGetProduct(params.id)).data;
  return {
    title: product.name,
  };
}

export default async function GoodPage({ params }: { params: { id: string } }) {
  
  const product = (await cipoGetProduct(params.id)).data;
  const stores = (await cipoListStores()).data;
        // @refresh reset

  return (
    <main className="good _container">
      <div className="title">
        <h1>{product.name}</h1>
      </div>
      <div className="wrapper">
        <div className="left">
          <ImageSlider
            data={product.image_registry}
            thumbsWidth={70}
            thumbsHeight={70}
            mainWidth={500}
            mainHeight={500}
          />
        </div>
        <div className="right">
          <div className="grid">
            <div className="right__item">
              <b>сезон:</b>
            </div>
            <div className="right__item">{product.product_group.name_1c}</div>

            <div className="right__item">
              <b>вид:</b>
            </div>
            <div className="right__item">{product.vid_modeli.name_1c}</div>

            <div className="right__item">
              <b>артикул:</b>
            </div>
            <div className="right__item">{product.artikul}</div>

            <div className="right__item">
              <b>материал подошвы:</b>
            </div>
            <div className="right__item">{product.material_podoshva}</div>

            <div className="right__item">
              <b>материал вверха:</b>
            </div>
            <div className="right__item">{product.material_up}</div>

            <div className="right__item">
              <b>материал внутри:</b>
            </div>
            <div className="right__item">{product.material_inside}</div>
          </div>

          <div className="nalichie">Наличие и цена в магазинах:</div>

          <div className="tab-nav">
            <>
              {product.qnt_price_registry_group.map((e, index) => (
                <a
                  className="tab-link"
                  href={'#size' + e.size_name_1c}
                  key={'a' + e.size_name_1c}
                >
                  {e.size_name_1c}
                </a>
              ))}
            </>
          </div>
          {product.qnt_price_registry_group.map((e, index) => (
            <div
              id={'size' + e.size_name_1c}
              className="right__title tab-on tab-none"
              key={'size' + e.size_name_1c}
              title={e.size_name_1c}
            >
              <div className="right__price">
                <h2>{e.sum.toLocaleString('ru-RU') + ' ₸'}</h2>
              </div>
              <div className="right__store">
                {/* <div key={'p' + e.size_name_1c}>
                    
                  </div> */}
                <ul key={'store' + e.size_name_1c}>Магазин:</ul>
                {e.store_id.map((store_id) => (
                  <li key={'store_id' + store_id}>
                    {stores.find((store) => store.id === store_id)?.address}
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Script id="links" strategy='beforeInteractive'>
        {`const links = document.querySelectorAll('a');
          console.log(links.length);
          for (let i = 0; i < links.length; i++) {
            if (links[i].href.includes('#size') === false) {
              continue;
            }
            links[i].addEventListener('click', (e) => {
                for (let j = 0; j < links.length; j++) {
                  links[j].classList.remove('active_size');
                }
               links[i].classList.add('active_size');

            })
          }
        `}
      </Script>
    </main>
  );
}
