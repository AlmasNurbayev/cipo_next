import { IproductNew } from '@/types/productsNews';
import './CardProductNew.css';
import { config } from '@/config/constants';
import Image from 'next/image';

export default function CardProductNew({ item }: { item: IproductNew }) {
  let minPrice = 0;
  let maxPrice = 0;
  item.qnt_price.forEach((qnt) => {
    if (minPrice === 0 || qnt.sum < minPrice) {
      minPrice = qnt.sum;
    }
    if (maxPrice === 0 || qnt.sum > maxPrice) {
      maxPrice = qnt.sum;
    }
  });

  return (
    <div className="cardProductHorizontal">
      <Image
        src={config.staticPath + '/' + item.image_active_path}
        alt={item.name}
        width={188}
        height={188}
      ></Image>
      <div className="right">
        <div>{item.name}</div>
        <div>
          Pазмеры в наличии:
          <div className="sizes">
            {item.qnt_price.map((qnt) => (
              <div className="size" key={item.product_id + qnt.size}>
                {qnt.size}
              </div>
            ))}
          </div>
        </div>
        <div className="price">
          {minPrice.toLocaleString('ru-RU') +
            ' - ' +
            maxPrice.toLocaleString('ru-RU') +
            ' ₸'}
        </div>
      </div>
    </div>
  );
}
