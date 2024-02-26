import { cipoGetProduct, cipoListStores } from '@/api/cipo.api';
import ImageSlider from '@/app/_components/ImageSlider/ImageSlider';
import { Metadata } from 'next';
import 'server-only';
import './page.css';

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

          <div>
            <b>Наличие:</b>
          </div>
          <div className="tab-nav">
            {product.qnt_price_registry_group.map((e, index) => (
              <>
                <a className="tab-link" href={'#' + e.size_name_1c}>
                  {e.size_name_1c}
                </a>

                <div className="right__title" key={e.size_name_1c} title={e.size_name_1c}>
                  <div>
                    Размер: <b>{e.size_name_1c}</b>
                    {'  Цена:  '}
                    {e.sum.toLocaleString('ru-RU') + ' ₸'}
                  </div>
                  <div className="right__store">
                    {/* <div key={'p' + e.size_name_1c}>
                    
                  </div> */}
                    <div key={'p2' + e.size_name_1c}>Магазин:</div>
                    {e.store_id.map((store_id) => (
                      <div key={'store_id' + store_id}>
                        {stores.find((store) => store.id === store_id)?.address}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* <Image
        src={config.backendUrl + '/' + news.image_path}
        width={300}
        height={300}
        alt={news.title}
      /> */}
    </main>
  );
}
