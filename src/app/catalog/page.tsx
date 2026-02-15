
import FilterClient from './_components/FilterClient';
import { cipoListGoods } from '../../api/cipo.api';
import { IproductList } from '@/types/product_list';
import './page.css';
import PageSortHeader from './_components/PageSortHeader';
import CardProductVertical from './_components/CardProductVertical';
import Link from 'next/link';


// TODO - searchParams - типзировать 
export default async function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  let goods: IproductList['data'] = [];
  // Logger.info('searchParams on page', searchParams)

  let fullCount = 0;
  let errorMessage = '';

  try {
    const res = await cipoListGoods(searchParams);
    if (res.data) {
      goods = res.data.data;
      fullCount = res.data.full_count;
    }
  } catch (error) {
    // console.error(error);
    errorMessage = 'Какая-то ошибка), длина запроса должна быть не менее 3 символов';
  }

  return (
    <main className="goods _container">
      <div className="left">
        <FilterClient />
      </div>
      <div className="right">
        <PageSortHeader count={fullCount} />
        <div className="down">
          {errorMessage && (
            <div className='error_message' style={{ color: 'red' }}>
              {errorMessage}
            </div>
          )}
          {!errorMessage && goods.length === 0 ? (
            <div>
              <div className="title_section">Нет товаров с заданными условиями</div>
              <Link href="/catalog/">Сбросить условия отбора</Link>
            </div>
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
        <PageSortHeader count={fullCount} />
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
