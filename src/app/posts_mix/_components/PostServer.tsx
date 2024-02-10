import Image from "next/image";

export default function PostServer({item}: {item: any}) {
  return (
    <div
      id="item_container"
      key={item.id}
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
            padding: '10px',
          }}
        >
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={'100'}
            height={'100'}
            style={{
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          ></Image>
        </div>
        <h2>{item.title}</h2>
      </div>
      <div>
        <b>description:</b> {item.description}
      </div>
      <div>
        <b>rating: </b> {item.rating}
      </div>
    </div>
  );
}
