'use client';

import Button from '@/app/_components/Button';
import Input from '@/app/_components/Input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { cipoFilterList } from '../../../api/cipo.api';
import Checkbox from '@/app/_components/Checkbox/Checkbox';
import { IproductsFilter } from '@/types/productsFilter';
import { config } from '@/config/constants';
import Slider from 'rc-slider';
import './rs-slider.css';
import './FilterClient.css';

export default function FilterClient() {
  //const searchParams = useSearchParams();
  const searchParams = new URLSearchParams(useSearchParams());
  const [search_name, setSearch_name] = useState(searchParams.get('search_name') || '');
  const [lists, setLists] = useState<any>();
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice'));
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice'));
  const [sort, setSort] = useState(searchParams.get('sort') || '');
  const [pg, setPg] = useState(
    searchParams.get('product_group')
      ? String(searchParams.get('product_group')).split(',')
      : [],
  );
  const [size, setSize] = useState(
    searchParams.get('size') ? String(searchParams.get('size')).split(',') : [],
  );
  const [vm, setVm] = useState(
    searchParams.get('vid_modeli')
      ? String(searchParams.get('vid_modeli')).split(',')
      : [],
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
    if (pg.length > 0) {
      searchParams.set('product_group', pg.join(','));
    } else {
      searchParams.delete('product_group');
    }
    if (size.length > 0) {
      searchParams.set('size', size.join(','));
    } else {
      searchParams.delete('size');
    }
    if (vm.length > 0) {
      searchParams.set('vid_modeli', vm.join(','));
    } else {
      searchParams.delete('vid_modeli');
    }
    if (minPrice) searchParams.set('minPrice', minPrice);
    else searchParams.delete('minPrice');
    if (maxPrice) searchParams.set('maxPrice', maxPrice);
    else searchParams.delete('maxPrice');

    if (search_name !== '') {
      searchParams.set('search_name', search_name);
    } else {
      searchParams.delete('search_name');
    }

    if (sort !== '') {
      searchParams.set('sort', sort);
    } else {
      searchParams.delete('sort');
    }
    
    // если изменилось что-то в фильтрах - нужно сбрасывать пагинацию
    searchParams.set('page', '1');
    searchParams.set('skip', '0');

  }, [pg, size, vm, search_name, minPrice, maxPrice, sort]);

  function apply() {
    router.push(`${pathname}?${searchParams}`);
  }

  function reset() {

    router.push(`${pathname}?page=1&skip=0&take=20`);
    location.reload();
  }

  function handleQ(event: React.ChangeEvent<HTMLInputElement>) {
    //event.preventDefault();
    setSearch_name(event.target.value);
  }

  function changePrice(value: number | number[]) {
    if (Array.isArray(value)) {
      setMinPrice(String(value[0]));
      setMaxPrice(String(value[1]));
    }
  }

  // function handleProductGroup(event: ChangeEvent<HTMLInputElement>) {
  //   event.preventDefault();
  //   const value = event.target.value;
  //   console.log('handleProductGroup', event);

  //   if (pg.includes(value)) {
  //     setPg(pg.filter((item) => item !== value));
  //   } else {
  //     setPg((prev) => [...prev, value]);
  //   }
  // }

  // function handleSize(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  //   event.preventDefault();
  //   const value = event.currentTarget.attributes.getNamedItem('data-size-id')?.value;
  //   if (!value) {
  //     return;
  //   }

  //   if (size.includes(value)) {
  //     setSize((prev) => prev.filter((item) => item !== value));
  //   } else {
  //     setSize((prev) => [...prev, value]);
  //   }
  // }

  function handleArrayOfString(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLDivElement | HTMLLabelElement>,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>,
  ) {
    //event.preventDefault();
    let value: string | undefined;
    if (event.target instanceof HTMLInputElement) {
      // если событие на input или checkbox
      value = event.target.value;
    } else if (
      event.target instanceof HTMLDivElement ||
      event.target instanceof HTMLLabelElement
    ) {
      // если событие на div или label
      value = event.currentTarget.attributes.getNamedItem('data-value')?.value;
    }
    if (!value) {
      return;
    } else value = String(value);

    if (state.includes(value)) {
      setState((prev) => prev.filter((item: string) => item !== value));
    } else {
      setState((prev) => [...prev, String(value)]);
    }
  }

  return (
    <div className="filter_container">
      <form className="filter_form">
        <Button height={40} type="button" onPress={apply}>
          <span className="button_title">Применить</span>
        </Button>
        <Button height={40} type="button" onPress={reset}>
          <span className="clear-button-title">Сбросить</span>
        </Button>

        <div className='sort'>
            <div className='title'>Сортировка</div>
            <select
              className='select'
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option className='option' value="">не задано</option>
              <option className='option' value="sum-desc">Сначала дешевле</option>
              <option className='option' value="sum-asc">Сначала дороже</option>
              <option className='option' value="product_create_date-desc">Сначала новые</option>
              <option className='option' value="product_create_date-asc">Сначала старые</option>

            </select>
          </div>

        <fieldset className="sezons">
          <div className="title">Сезоны{pg.length === 0 ? ': все' : ''}</div>
          {lists &&
            lists.product_group.map((item: IproductsFilter['product_group'][0]) => (
              <Checkbox
                key={'checkbox sezons' + item.id}
                label={item.name_1c}
                checked={pg.includes(String(item.id))}
                onPress={(e) => handleArrayOfString(e, pg, setPg)}
                value={String(item.id)}
              ></Checkbox>
            ))}
        </fieldset>

        <fieldset className="sizes">
          <div className="title">Размеры{size.length === 0 ? ': все' : ''}</div>

          <div className="grid">
            {lists &&
              lists.size.map((item: IproductsFilter['size'][0]) => (
                <div
                  key={'grid_item' + item.id}
                  className={
                    size.includes(String(item.id)) ? 'grid-item active' : 'grid-item'
                  }
                  data-value={String(item.id)}
                  onClick={(e) => handleArrayOfString(e, size, setSize)}
                >
                  {item.name_1c}
                </div>
              ))}
          </div>
        </fieldset>

        <fieldset className="vid_modeli">
          <div className="title">Вид модели{vm.length === 0 ? ': все' : ''}</div>
          {lists &&
            lists.vid_modeli.map((item: IproductsFilter['vid_modeli'][0]) => (
              <Checkbox
                key={'checkbox vid_modeli' + item.id}
                label={item.name_1c}
                checked={vm.includes(String(item.id))}
                onPress={(e) => handleArrayOfString(e, vm, setVm)}
                value={String(item.id)}
              ></Checkbox>
            ))}
        </fieldset>

        <div className="search-name">
          <div className="title">Название</div>
          <Input
            onTyped={handleQ}
            name="q"
            value={search_name}
            type="search"
            width={'100%'}
            height={30}
            padding={5}
            style={{
              borderColor: config.defaultStyle.borderColor,
              borderRadius: 5,
              borderStyle: 'solid',
              borderWidth: 1,
            }}
            placeholder="поиск..."
          ></Input>
        </div>

        <div className="price">
          <div className="title">Цена</div>
          <Slider
            range
            allowCross={false}
            min={1000}
            max={50000}
            // defaultValue={[1000, 80000]}
            onChange={changePrice}
            style={{ width: '100%' }}
          ></Slider>
          <div className="tooltip">
            {minPrice ? 'от ' + Number(minPrice).toLocaleString('ru') : ''}
            {maxPrice ? ' до ' + Number(maxPrice).toLocaleString('ru') : ''}
          </div>
        </div>
        <Button height={40} type="button" onPress={apply}>
          <span className="button_title">Применить</span>
        </Button>
        <Button height={40} type="button" onPress={reset}>
          <span className="clear-button-title">Сбросить</span>
        </Button>
      </form>
    </div>
  );
}
