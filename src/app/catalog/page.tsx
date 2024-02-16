import PostServer from './_components/PostServer';
import FilterClient from './_components/FilterClient';
import { cipoListGoods } from '../../api/cipo.api';
import { IproductList } from '@/types/product_list';
import './page.css';
import PageSortHeader from './_components/PageSortHeader';
import CardProductHorizontal from '../_components/CardProductHorizontal/CardProductHorizontal';
import CardProductVertical from './_components/CardProductVertical';
import Link from 'next/link';

export default async function Page({ searchParams }) {
  let goods: IproductList['data'] = [];
  const res = await cipoListGoods(searchParams);

  if (res.data) goods = res.data.data;

  return (
    <main className="goods">
      <div className="left">
        <FilterClient />
      </div>
      <div className="right">
        <PageSortHeader count={res.data.full_count} />
        <div className="down">
          {goods.length === 0 ? (
            <div className="title_section">Нет товаров с заданными условиями</div>
          ) : (
            ''
          )}
          {goods.map((item, index) => (
            // <CardProductHorizontal key={item.product_id + item.product_name} item={item}/>
            // <PostServer key={item.product_id + item.product_name} item={item} />
            <Link
              href={'/catalog/' + item.product_id}
              key={'link' + item.product_id + item.product_name + index}
            >
              <CardProductVertical
                key={'card' + item.product_id + item.product_name + index}
                item={item}
              />
            </Link>
          ))}
        </div>
        <PageSortHeader count={res.data.full_count} />
      </div>
      {/* <div className="top">
        <div className="pagination">
          pagination
        </div>
        <div className="down">
          <div className="left">
            <h2>Список на сервере:</h2>
            <div>{new Date().toLocaleString()}</div>
            <div>{posts.length}</div>
            {posts.map((item) => (
              <PostServer key={item.product_id + item.product_name} item={item} />
            ))}
          </div>
          <div className="rigth">
            <h2>Фильтры на клиенте</h2>
            <FilterClient />
          </div>
        </div>
      </div> */}
    </main>
  );
}
