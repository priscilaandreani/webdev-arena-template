'use client';
import {
  IoPersonOutline,
  IoNotificationsOutline,
  IoHomeOutline,
  IoCompassOutline,
  IoCalendarClearOutline,
  IoLocationOutline,
  IoSettingsOutline,
  IoSearch,
  IoFilter,
  IoTimeOutline,
  IoTrailSignOutline,
  IoArrowForward,
} from 'react-icons/io5';

import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

// header
function Header() {
  return (
    <header className='w-full h-14 bg-white border-b flex items-center px-4'>
      <a href='./' className='font-black text-lg text-gray-800 mx-1'>
        TravelApp
      </a>
      <ul className='flex items-center justify-start ml-8 list-none gap-3 text-sm'>
        <li>
          <a href='#' className='font-bold'>
            Dashboard
          </a>
        </li>
        <li>
          <a href='#'>Destinations</a>
        </li>
        <li>
          <a href='#'>Bookings</a>
        </li>
        <li>
          <a href='#'>Map</a>
        </li>
      </ul>
      <div className='flex items-center justify-end ml-auto gap-4 mx-2'>
        <div>
          <IoNotificationsOutline />
        </div>
        <div>
          <IoPersonOutline />
        </div>
      </div>
    </header>
  );
}

// Menu
function Menu() {
  return (
    <section className='flex flex-col bg-gray-50 border-r col-span-1 row-span-full h-screen px-4 py-4'>
      <ul className='min-w-full'>
        <li className='flex items-center gap-4 mb-4'>
          <IoHomeOutline className='font-semibold' />
          <span className='font-semibold'>Dashboard</span>
        </li>
        <li className='flex items-center gap-4 mb-4'>
          <IoCompassOutline className='font-semibold' />
          <span className='font-semibold'>Explore</span>
        </li>
        <li className='flex items-center gap-4 mb-4'>
          <IoCalendarClearOutline className='font-semibold' />
          <span className='font-semibold'>My Bookings</span>
        </li>
        <li className='flex items-center gap-4 mb-4'>
          <IoLocationOutline className='font-semibold' />
          <span className='font-semibold'>Map View</span>
        </li>
        <li className='flex items-center gap-4 mb-4'>
          <IoSettingsOutline className='font-semibold' />
          <span className='font-semibold'>Settings</span>
        </li>
      </ul>
    </section>
  );
}

// Current Adventure
function CurrentAdventure() {
  return (
    <section className='container col-span-2 flex flex-col  w-full h-full p-4'>
      <div className='flex gap-2 text-indigo-500 items-center justify-start py-2'>
        <IoLocationOutline />
        <p className='text-xs'>Bitar, East</p>
      </div>
      <h1 className='text-lg font-extrabold md:font-semibold'>
        Let's begin your adventure journey easily
      </h1>
      <div>
        <div className='flex flex-col  gap-2 border p-4 rounded-lg mt-2'>
          <p className='font-bold'>Current Adventure</p>
          <div className='flex '>
            <div className='flex items-center gap-4'>
              <img
                alt='Adventure Thumbnail'
                className='size-16 rounded-sm'
                src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
              />
              <div>
                <p className='font-bold text-sm'>Ijen Crater Adventure</p>
                <p className='text-sm text-gray-500 font-medium'>
                  📅 Saturday, 10 May 2025
                </p>
                <p className='text-sm text-gray-500'>Ticket Code: BRM1072025</p>
              </div>
            </div>
            <div className='justify-end ml-auto flex flex-col items-end'>
              <p className='font-bold'>23:45:46</p>
              <p className='rounded-lg bg-gray-100 px-2 py-1 font-semibold text-xs'>
                Booked
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchBar() {
  return (
    <section className='container col-span-2 flex flex-col w-full h-full p-4'>
      <div className='flex items-center gap-2'>
        <input
          type='text'
          placeholder='Search destination here'
          className='w-full p-2 border rounded-lg outline-indigo-500 focus:border-indigo-500'
        />
        <button className='bg-indigo-500 text-white rounded-lg px-4 py-2 flex items-center gap-2'>
          <IoSearch />
          <p>Search</p>
        </button>
        <button className='border rounded-lg px-4 py-2 flex items-center gap-2'>
          <IoFilter />
          <p>Filters</p>
        </button>
      </div>
    </section>
  );
}

function Category({ name, uri }: { name: string; uri: string }) {
  return (
    <button className='flex flex-col items-center rounded-lg border size-24 p-2'>
      <img src={uri} alt={name} className='size-12 rounded-full mb-2' />
      <h3 className='text-sm'>{name}</h3>
    </button>
  );
}

function Categories() {
  const categories = [
    {
      name: 'Beach',
      uri: 'https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Mountains',
      uri: 'https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Forest',
      uri: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Camping',
      uri: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Zoo',
      uri: 'https://images.unsplash.com/photo-1621357803682-905165698c77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Waterfalls',
      uri: 'https://plus.unsplash.com/premium_photo-1669863283335-9370289707d7?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className='container col-span-2 p-4 flex gap-4 justify-between'>
      {categories.map(({ name, uri }) => (
        <Category key={name} name={name} uri={uri} />
      ))}
    </div>
  );
}

function Destination({
  name,
  uri,
  reviewCount,
  rating,
}: {
  name: string;
  uri: string;
  reviewCount: number;
  rating: number;
}) {
  return (
    <div className='flex flex-col border rounded-lg gap-2'>
      <img src={uri} alt='name' className='rounded-t-lg w-full h-36' />
      <div className='flex flex-col px-3 gap-1 py-2'>
        <p className='text-sm font-bold'>{name}</p>
        <p className='text-xs text-gray-500'>
          ★ {rating} ({reviewCount} reviews)
        </p>
      </div>
    </div>
  );
}

function MostPopular() {
  const destinations = [
    {
      name: 'Coastal Paradise',
      uri: 'https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      reviewCount: 120,
      rating: 4.8,
    },
    {
      name: 'Mountain Retreat',
      uri: 'https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      reviewCount: 95,
      rating: 4.7,
    },
    {
      name: 'Forest Escape',
      uri: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      reviewCount: 80,
      rating: 4.6,
    },
    {
      name: 'Desert Adventure',
      uri: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      reviewCount: 65,
      rating: 4.5,
    },
    {
      name: 'Urban Exploration',
      uri: 'https://images.unsplash.com/photo-1487452066049-a710f7296400?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      reviewCount: 50,
      rating: 4.4,
    },
    {
      name: 'Cultural Journey',
      uri: 'https://images.unsplash.com/photo-1529271230144-e8c648ef570d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      reviewCount: 40,
      rating: 4.3,
    },
  ];

  return (
    <div className='container col-span-2 p-4 flex flex-col gap-4'>
      <h3 className='text-lg font-bold'>Most Popular Destinations</h3>
      <div className='grid grid-cols-3 gap-4'>
        {destinations.map((destination) => (
          <Destination
            key={destination.name}
            name={destination.name}
            uri={destination.uri}
            reviewCount={destination.reviewCount}
            rating={destination.rating}
          />
        ))}
      </div>
    </div>
  );
}

export function CarouselHighlight() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const mountBromoImages = [
    'https://images.unsplash.com/photo-1528214968864-8dd00782fa9e?q=80&w=1219&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1711704406598-a2c93aef0bae?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1556549957-f41c6fcc4210?q=80&w=1002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}>
      <CarouselContent>
        {mountBromoImages.map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <img
                  src={mountBromoImages[index]}
                  alt='Mount Bromo'
                  className='rounded-lg object-fit-cover w-full h-36'
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function HighlightedCategory() {
  return (
    <div className='flex flex-col gap-1 border rounded-lg '>
      <div>
        <CarouselHighlight />
      </div>
      <div className='p-4'>
        <p className='font-bold text-base'>Mount Bromo</p>
        <div className='flex items-center gap-2'>
          <p className='text-xs font-bold'>★ 4.8</p>
          <p className='text-xs'> (1.5k reviews)</p>
        </div>

        <p className='font-semibold py-2 mt-2'>About</p>
        <p className='text-sm text-gray-600'>
          Mount Bromo is an active volcano and part of the Tengger massif in
          East Java, Indonesia. It is one of the most iconic and photographed
          mountains in the country, known for its stunning sunrise views and
          unique landscape.
        </p>
        <div className='grid grid-cols-3 gap-4 '>
          <div className='flex flex-col items-center bg-gray-100 mt-2 rounded-lg p-1 '>
            <p>
              <IoTimeOutline />
            </p>
            <p className='text-xs font-semibold'>24h</p>
            <p className='text-xs text-gray-600'>Hours</p>
          </div>
          <div className='flex flex-col items-center bg-gray-100 mt-2 rounded-lg p-1 '>
            <p>
              <IoLocationOutline />
            </p>
            <p className='text-xs font-semibold'>50+</p>
            <p className='text-xs text-gray-600'>Visitors</p>
          </div>
          <div className='flex flex-col items-center bg-gray-100 mt-2 rounded-lg p-1 '>
            <p>
              <IoTrailSignOutline />
            </p>
            <p className='text-xs font-semibold'>59.5km</p>
            <p className='text-xs text-gray-600'>Distance</p>
          </div>
        </div>
      </div>
      <div className='px-4'>
        <div className='flex items-center justify-between gap-2'>
          <p className='text-sm text-gray-600'>Ticket Price</p>
          <p className='text-sm font-bold '>$20 - 40</p>
        </div>
        <button className='bg-indigo-500 font-semibold text-white flex rounded-lg w-full py-2 items-center justify-center gap-2 px-4 my-2'>
          Let's Book Now
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
}

function LocationMap() {
  return (
    <div className='mt-4 flex flex-col gap-2 border rounded-lg p-4'>
      <p>Location</p>
      <iframe
        className='rounded-lg'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d110.12345678901234!3d-7.1234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a123456789012%3A0x1234567890123456!2sMount%20Bromo%2C%20East%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1612345678901'
        width='100%'
        height='300'
        style={{ border: 0 }}
        loading='lazy'
        title='Mount Bromo Location'></iframe>
      <div className='relative -mt-10 bg-white px-2 py-2 rounded-2xl shadow-lg z-10 flex justify-between items-center gap-1'>
        <img
          src='https://images.unsplash.com/photo-1528214968864-8dd00782fa9e?q=80&w=1219&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Mount Bromo'
          className='size-8 rounded-lg'
        />
        <div>
          <p className='text-sm font-semibold text-gray-800'>Mount Bromo</p>
          <p className='text-xs text-gray-500 flex items-center gap-1'>
            <IoLocationOutline />
            100 Km Away
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <p className='text-yellow-300'>★</p>
          <p className='text-xs text-gray-500'>4.9</p>
        </div>
      </div>
    </div>
  );
}

// The Dashboard page
export default function Dashboard() {
  return (
    <div className='bg-white w-screen'>
      <Header />
      <main className='grid grid-cols-[1fr_2fr_1fr]'>
        <Menu />
        <div className='flex flex-col overflow-y-auto'>
          <CurrentAdventure />
          <SearchBar />
          <Categories />
          <MostPopular />
        </div>

        <div className='p-4 mr-2'>
          <HighlightedCategory />
          <LocationMap />
        </div>
      </main>
    </div>
  );
}
