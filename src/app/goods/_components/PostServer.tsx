import { config } from '@/config/constants';
import Image from 'next/image';

export default function PostServer({ item }: { item: any }) {
  return (
    <div
      id="item_container"
      style={{
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      <div id="image_title_container" style={{ display: 'flex' }}>
        <div
          id="image_container"
          style={{
            width: '100px',
            height: '100px',
            paddingRight: '10px',
          }}
        >
          <Image
            src={config.backendUrl + '/' + item.image_active_path}
            alt={item.name}
            width={'100'}
            height={'100'}
            style={{
              objectFit: 'cover',
              padding: '10px'
            }}
          ></Image>
        </div>
        <div>
          <h3>{item.name}</h3>
          <br/>
          <b>artikul:</b> {item.artikul}
          <br/>
          <b>vid_modeli_name: </b> {item.vid_modeli_name}
        </div>
      </div>
    </div>
  );
}
