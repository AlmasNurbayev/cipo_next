import { cipoGetProduct, cipoListStores } from '@/api/cipo.api';
import ImageSlider from '@/app/_components/ImageSlider/ImageSlider';
import { Metadata } from 'next';
import 'server-only';
import './page.css';
import Script from 'next/script';
import { config } from '@/config/constants';

type Props = {
  params: { id: string };
  // searchParams: { [key: string]: string | string[] | undefined }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = (await cipoGetProduct(params.id)).data;

  const images = [];
  for (const image of product.image_registry) {
    if (image.main) {
      images.push({
        url: config.staticPathPublic + '/' + image.full_name,
        width: 700,
        height: 700,
      });
    }
  }

  return {
    title: product.name,
    openGraph: {
      title: product.name,
      //description: 'The React Framework for the Web',
      url: config.frontUrl + '/catalog/' + params.id,
      siteName: 'Cipo.kz',
      images,
      locale: 'ru_RU',
      type: 'website',
    },
  };
}

export default async function GoodPage({ params }: { params: { id: string } }) {
  const product = (await cipoGetProduct(params.id)).data;
  const stores = (await cipoListStores()).data;
  let active;

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
            {product.qnt_price_registry_group.map((e, index) => (
              <>
                <input
                  type="radio"
                  id={'accordion-' + index}
                  className="accordion-checkbox"
                  name="size_accordition"
                />
                <label
                  id={'accordion-' + index + '-header'}
                  className="accordion-header"
                  htmlFor={'accordion-' + index}
                >
                  <h4>{'размер: ' + e.size_name_1c + ', цена: ' + e.sum.toLocaleString('ru-RU') + ' ₸'}</h4> 
                </label>
                <div className="accordion-content">
                  <div
                    id={'size' + e.size_name_1c}
                    className="right__title"
                    key={'size' + e.size_name_1c}
                    title={e.size_name_1c}
                  >
                    <div className="right__store">
                      <ul key={'store' + e.size_name_1c}>Магазин:</ul>
                      {e.store_id.map((store_id) => (
                        <li key={'store_id' + store_id}>
                          {stores.find((store) => store.id === store_id)?.address}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <Script id="links" strategy="beforeInteractive">
        {`
          // скрипт работает только при первом открытии страницы
          // при навигации между товарами он уже НЕ РАБОТАЕТ
          const inputs = document.querySelectorAll('label');
          console.log(inputs.length);
          for (let i = 0; i < inputs.length; i++) {

            inputs[i].addEventListener('click', (e) => {
                for (let j = 0; j < inputs.length; j++) {
                  inputs[j].classList.remove('accordition-header-active');
                }
                inputs[i].classList.add('accordition-header-active');

            })
          }

          window.addEventListener('load', function () {
            const firstInput = document.querySelector(".accordion-checkbox");
            // Установим его checked в true
            if (firstInput) {
              firstInput.checked = true;
            }
          })
        `}
      </Script>
    </main>
  );
}
