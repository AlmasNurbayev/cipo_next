import './StoreCard.css';
import { Istore } from '@/types/store';
import Image from 'next/image';
import { config } from '@/config/constants';
import Button from '../Button';
import Link from 'next/link';

export default function StoreCard({ item }: { item: Istore }) {
  const workingDays = [];
  if (item.working_hours) {
    for (let indexDay = 1; indexDay <= 7; indexDay++) {
      const dayString = item.working_hours['d0' + indexDay];
      if (!dayString) continue;
      if (dayString.split('-').length !== 2) continue;

      let dayName = '';
      switch (indexDay) {
        case 1:
          dayName = 'Понедельник';
          break;
        case 2:
          dayName = 'Вторник';
          break;
        case 3:
          dayName = 'Среда';
          break;
        case 4:
          dayName = 'Четверг';
          break;
        case 5:
          dayName = 'Пятница';
          break;
        case 6:
          dayName = 'Суббота';
          break;
        case 7:
          dayName = 'Воскресенье';
          break;
      }
      workingDays.push({
        dayName,
        hours: dayString.split('-')[0] + ':00-' + dayString.split('-')[1] + ':00',
      });
    }
  }

  return (
    <div className="StoreCard">
            <div className="address">
          Адрес: {item.city}, {item.address}
        </div>
      <div className="left">
        <Image
          src={config.NEXT_PUBLIC_backendUrl + '/' + item.image_path}
          alt={item.name_1c}
          width={300}
          height={300}
        ></Image>
        <div >
          {item.yandex_widget_url && (
          <iframe className="map"
          //style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box"
          src={item.yandex_widget_url}
        ></iframe>
          
          )}

        </div>
      </div>
      <div className="right">

        <div className="days">
          <div className='title'>Режим работы:</div>
          <div>
            {workingDays.map((day) => (
              <div className="day" key={'day' + item.id_1c + day.dayName}>
                <div>{day.dayName}</div>
                <div>{day.hours}</div>
              </div>
            ))}
          </div>
        </div>
        {item.link_2gis && (
          <div className="button_container">
            <Link href={item.link_2gis}>
              <Button width={200} height={50}>
                <span className="button_title">Открыть в 2gis</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
