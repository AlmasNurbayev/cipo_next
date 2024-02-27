import { IproductNew } from '@/types/productsNews';
import './CardProductHorizontal.css';
import { config } from '@/config/constants';
import Image from 'next/image';

export default function CardProductHorizontal({ item }: { item: IproductNew }) {
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
        <div className='sizes'>
          {item.qnt_price.map((qnt) => (
            <div className='size' key={item.product_id + qnt.size}>{qnt.size}</div>
          ))}
        </div>

        </div>
        <div className='price'>{item.sum.toLocaleString('ru-RU') + ' ₸'}</div>
      </div>
    </div>
  );
}
