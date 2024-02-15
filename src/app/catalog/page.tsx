import PostServer from './_components/PostServer';
import FilterClient from './_components/FilterClient';
import { cipoListGoods } from '../../api/cipo.api';
import { IproductList } from '@/types/product_list';
import './page.css'

export default async function Page({
  searchParams,
}: {
  searchParams: {
    search_name?: string;
    take?: string;
    skip?: string;
    product_group?: string;
    size?: string;
  };
}) {
  if (!searchParams.take) searchParams.take = '10'; // default

  let posts: IproductList["data"] = [];
  const res = await cipoListGoods(searchParams);
  if (res.data) posts = res.data.data;
  
  return (
    <main className="goods">
      <div className="left">
        <FilterClient/>
      </div>
      <div className="right">

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
