'use client';

import Button from '@/app/_components/Button';
import Input from '@/app/_components/Input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { cipoFilterList } from './api';

export default function FilterClient() {
  //const searchParams = useSearchParams();
  const searchParams = new URLSearchParams(useSearchParams());
  const [search_name, setSearch_name] = useState(
    searchParams.get('search_name') || ''
  );
  const [lists, setLists] = useState<any>();
  const [take, setTake] = useState(searchParams.get('take') || '10');
  const [pg, setPg] = useState(
    searchParams.get('product_group')
      ? String(searchParams.get('product_group')).split('-')
      : []
  );
  const [size, setSize] = useState(
    searchParams.get('size') ? String(searchParams.get('size')).split('-') : []
  );
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    async function loadLists() {
      const res = await cipoFilterList();
      if (res.data) setLists(res.data);
    }
    loadLists();
  }, []);

  useEffect(() => {
    searchParams.set('product_group', pg.join('-'));
    searchParams.set('size', size.join('-'));
    searchParams.set('take', take);
    router.push(`${pathname}?${searchParams.toString()}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pg, take, size]);

  function handleQ(event: React.ChangeEvent<HTMLInputElement>) {
    //event.preventDefault();
    setSearch_name(event.target.value);
    searchParams.set('search_name', event.target.value);
    router.push(`${pathname}?${searchParams.toString()}`);
  }

  function handleProductGroup(event: React.MouseEvent<HTMLButtonElement>) {
    const value = event.currentTarget.value;
    if (pg.includes(value)) {
      setPg(pg.filter((item) => item !== value));
    } else {
      setPg((prev) => [...prev, value]);
    }
  }

  function handleSize(event: React.MouseEvent<HTMLButtonElement>) {
    const value = event.currentTarget.value;
    if (size.includes(value)) {
      setSize((prev) => prev.filter((item) => item !== value));
    } else {
      setSize((prev) => [...prev, value]);
    }
  }

  return (
    <div className="filter_container">
      {/* <form> */}
      <div>
        <Input
          onTyped={handleQ}
          name="q"
          value={search_name}
          type="search"
          width={150}
          height={30}
          padding={5}
          placeholder="Search..."
        ></Input>

        <fieldset>
          Сезоны{pg.length === 0 ? ': все' : ''}
          {lists &&
            lists.product_group.map((item: any) => (
              <Button
                key={item.id}
                active={pg.includes(String(item.id))}
                width={200}
                height={30}
                margin={5}
                value={String(item.id)}
                onPress={(e) => handleProductGroup(e)}
              >
                {item.name_1c}
              </Button>
            ))}
        </fieldset>

        <fieldset>
          Кол-во на страницу
          <select
            style={{ width: 100 }}
            value={take}
            onChange={(e) => setTake(e.target.value)}
          >
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            {/* <option value="50"><div><input type='checkbox'>50</input></div></option> */}
          </select>
        </fieldset>
      </div>
      <div>
      Размеры{size.length === 0 ? ': все' : ''}
        <div className="filter_size">
          {lists &&
            lists.size.map((item: any) => (
              <Button
                key={item.id}
                active={size.includes(String(item.id))}
                width={50}
                height={30}
                value={String(item.id)}
                style={{borderStyle: 'none'}}
                onPress={(e) => handleSize(e)}
              >
                {item.name_1c}
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
}
