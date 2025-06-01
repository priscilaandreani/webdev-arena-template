'use client';

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

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
  IoQrCodeOutline,
  IoPeopleOutline,
  IoMapOutline,
  IoArrowBack,
  IoMenu,
  IoLocation,
} from 'react-icons/io5';
import { FaMicrophone } from 'react-icons/fa';

import Autoplay from 'embla-carousel-autoplay';
import { Home, Map, QrCode, Settings, Ticket } from 'lucide-react';

function Header() {
  return (
    <header className='hidden md:flex w-full h-14 border-b border-gray-100 items-center px-4'>
      <a href='./' className='font-bold text-lg text-indigo-500 mx-1'>
        TravelApp
      </a>
      <ul className='flex items-center justify-start ml-8 list-none gap-3 text-sm text-gray-800'>
        <li className='font-semibold'>
          <a href='#'>Dashboard</a>
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
      <div className='flex items-center justify-end ml-auto gap-4 mx-2 text-gray-800'>
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

function Menu() {
  return (
    <aside className='hidden md:flex flex-col bg-gray-50 border-r border-gray-100 col-span-1 row-span-full h-full px-4 py-4 text-gray-800'>
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
    </aside>
  );
}

const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return (
    `${String(h).padStart(2, '0')}:` +
    `${String(m).padStart(2, '0')}:` +
    `${String(s).padStart(2, '0')}`
  );
};

function CurrentAdventure() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex container col-span-2 flex-col w-full p-4'>
      <div className='flex gap-2 text-indigo-500 items-center justify-start py-2'>
        <IoLocationOutline />
        <p className='text-xs'>Bitar, East</p>
      </div>
      <div className='flex gap-2 items-center justify-between'>
        <h1 className='text-xl font-extrabold sm:font-semibold text-gray-800'>
          Lets begin your adventure journey easily
        </h1>
        <div className='hidden md:flex size-8 rounded-full text-indigo-400 bg-gray-100 p-2 mt-2 items-center justify-between'>
          <IoQrCodeOutline />
        </div>
      </div>
      <div>
        <div className='hidden md:flex flex-col gap-2 bg-gray-50 p-4 rounded-lg mt-2'>
          <p className='font-bold text-indigo-500'>Current Adventure</p>
          <div className='flex '>
            <div className='flex items-center gap-4'>
              <img
                alt='Adventure Thumbnail'
                className='size-16 rounded-sm'
                src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
              />
              <div>
                <p className='font-bold text-sm text-gray-800'>
                  Ijen Crater Adventure
                </p>
                <p className='text-sm text-gray-500 font-medium'>
                  📅 Saturday, 10 May 2025
                </p>
                <p className='text-sm text-gray-500'>Ticket Code: BRM1072025</p>
              </div>
            </div>
            <div className='justify-end ml-auto flex flex-col items-end'>
              <p className='font-bold text-indigo-500'>
                {formatTime(timeLeft)}
              </p>
              <p className='rounded-lg bg-indigo-100 px-2 py-1 font-semibold text-xs  text-indigo-800'>
                Booked
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CurrentAdventureMobile() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='md:hidden'>
      <div className='mx-4 rounded-2xl shadow-lg bg-gray-50 overflow-hidden'>
        {/* Header */}
        <div className='flex justify-between items-center bg-indigo-100 px-4 py-2 rounded-t-2xl'>
          <span className='text-sm text-indigo-500'>Ticket valid before</span>
          <span className='text-sm font-semibold text-indigo-600'>
            {formatTime(timeLeft)}
          </span>
        </div>

        {/* Main Content */}
        <div className='flex items-center px-4 py-3 gap-3'>
          {/* Image */}
          <img
            src='https://images.unsplash.com/photo-1656577865296-67f388c6ed0f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Adventure'
            className='w-12 h-12 rounded-xl object-cover'
          />

          <div className='flex-1'>
            <h2 className='text-sm font-semibold text-gray-800'>
              Ijen Crater Adventure
            </h2>
            <div className='flex items-center gap-1 mt-1'>
              <svg
                className='w-4 h-4 text-gray-400'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
              <span className='text-xs text-gray-500'>
                Saturday, 10 May 2025
              </span>
            </div>
          </div>

          {/* QR Icon */}
          <div className='p-2 rounded-full bg-white shadow-md text-indigo-500'>
            <IoQrCodeOutline className='text-indigo-500' />
          </div>
        </div>

        {/* Dashed Line */}
        <div className='border-t border-dashed border-gray-300 mx-4' />

        {/* Footer */}
        <div className='flex justify-between items-center px-4 py-3'>
          <span className='text-xs text-gray-400'>Ticket Code :</span>
          <span className='text-sm font-semibold text-gray-800'>
            BRM1072025
          </span>
        </div>
      </div>
    </section>
  );
}

const popularDestinations = ['Mount Bromo', 'Bali', 'Komodo Island', 'Jakarta'];

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    const filtered = popularDestinations.filter((destination) =>
      destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };

  const handleSelect = (destination: string) => {
    navigate(`/destination/${encodeURIComponent(destination)}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = popularDestinations.filter((destination) =>
      destination.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <section className='container col-span-2 flex flex-col w-full p-4 text-gray-800'>
      <div className='flex items-center gap-2'>
        <input
          type='text'
          placeholder='Search destination here'
          value={searchTerm}
          onChange={handleInputChange}
          className='w-full p-3 rounded-lg outline-indigo-500 focus:border-indigo-500 bg-gray-50 text-sm text-gray-700 placeholder:text-gray-400'
        />
        <button
          onClick={handleSearch}
          className='bg-indigo-500 text-white md:rounded-lg rounded-full md:px-4 px-2 py-2 flex items-center gap-2'>
          <IoSearch className='hidden md:flex' />
          <FaMicrophone className='md:hidden' />
          <p className='hidden md:block'>Search</p>
        </button>
        <button className='hidden md:flex border border-indigo-500 rounded-lg px-4 py-2 items-center gap-2 text-indigo-500 '>
          <IoFilter />
          <p>Filters</p>
        </button>
      </div>

      {searchTerm && (
        <div className='bg-white mt-3 rounded-lg shadow-md p-4'>
          {results.length > 0 ? (
            <ul className='space-y-2'>
              {results.map((item) => (
                <li
                  key={item}
                  onClick={() => handleSelect(item)}
                  className='hover:bg-indigo-50 px-3 py-2 rounded-lg cursor-pointer'>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-sm text-gray-500'>No destinations found.</p>
          )}
        </div>
      )}
    </section>
  );
}

function Category({ name, uri }: { name: string; uri: string }) {
  return (
    <button className='flex flex-col items-center rounded-lg md:border border-gray-100 size-28 justify-center hover:bg-indigo-100 transition-colors'>
      <img src={uri} alt={name} className='size-12 rounded-full mb-2' />
      <h3 className='md:text-sm text-xs text-gray-800'>{name}</h3>
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
    <div className='px-4 flex justify-around gap-2'>
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
    <div className='flex flex-col border border-gray-200 rounded-lg gap-2 min-w-[45%] md:min-w-0 text-gray-800'>
      <img
        src={uri}
        alt={name}
        className='rounded-lg w-full h-36 object-cover'
      />
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
    <div className='flex container col-span-2 p-4 flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-bold text-gray-800'>
          Most Popular Destinations
        </h3>
        <a href='#' className='text-xs text-indigo-400 md:hidden'>
          See All
        </a>
      </div>

      <div className='flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible'>
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
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

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
              <Card className='border-white'>
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
    <div className='flex flex-col gap-1 border border-gray-200 rounded-lg '>
      <div>
        <CarouselHighlight />
      </div>
      <div className='p-4'>
        <p className='font-bold text-base text-gray-800'>Mount Bromo</p>
        <div className='flex items-center gap-2'>
          <p className='text-xs font-bold text-yellow-300'>★ </p>
          <p className='text-xs text-gray-500'> 4.8 (1.5k reviews)</p>
        </div>

        <p className='font-semibold py-2 mt-2 text-gray-800'>About</p>
        <p className='text-sm text-gray-600'>
          Mount Bromo is an active volcano and part of the Tengger massif in
          East Java, Indonesia. It is one of the most iconic and photographed
          mountains in the country, known for its stunning sunrise views and
          unique landscape.
        </p>
        <div className='grid grid-cols-3 gap-4 text-gray-800 '>
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
          <p className='text-sm font-bold text-gray-800'>$20 - 40</p>
        </div>
        <button className='bg-indigo-500 font-semibold text-white flex rounded-lg w-full py-2 items-center justify-center gap-2 px-4 my-2'>
          Lets Book Now
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
}

function LocationMap() {
  return (
    <div className='mt-4 flex flex-col gap-2 border border-gray-200 rounded-lg p-4'>
      <p className='text-gray-800 font-bold'>Location</p>
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

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className='fixed bottom-5 left-1/2 -translate-x-1/2 z-50 block md:hidden'>
      <div className='bg-[#0f172a] flex items-center justify-between px-6 py-3 rounded-full shadow-lg gap-6 relative'>
        <button className='text-white' onClick={() => navigate('/dashboard')}>
          <Home size={24} />
        </button>

        <button className='text-slate-400'>
          <Map size={24} />
        </button>

        <div className='absolute -top-6 left-1/2 -translate-x-1/2'>
          <button className='bg-indigo-500 p-3 rounded-full border-4 border-white shadow-lg'>
            <QrCode color='white' />
          </button>
        </div>
        <div className='w-8'></div>

        <button className='text-slate-400'>
          <Ticket size={24} />
        </button>

        <button className='text-slate-400'>
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};

// The Dashboard page
function Dashboard() {
  return (
    <div className='bg-white w-screen'>
      <Header />
      <main className='md:grid md:grid-cols-[1fr_2.5fr_1fr]'>
        <Menu />
        <div className='flex flex-col overflow-y-auto'>
          <CurrentAdventure />
          <CurrentAdventureMobile />
          <SearchBar />
          <Categories />
          <MostPopular />
        </div>

        <div className='p-4 mr-2 hidden md:flex md:flex-col'>
          <HighlightedCategory />
          <LocationMap />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

function DestinationDetail() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const decodedName = decodeURIComponent(name || '');

  const places = [
    {
      place: 'Komodo Island',
      category: 'Camping',
      city: 'Komodo, West Manggarai Regency',
      photos: [
        'https://images.unsplash.com/photo-1565369729210-012211942251?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661876927993-bedb3ab87208?q=80&w=3055&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1607427225127-a4ae1d4b050c?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      place: 'Bali',
      category: 'Beach',
      city: 'Bali, Indonesia',
      photos: [
        'https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1555400038-63f5b517a47?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      place: 'Mount Bromo',
      category: 'Mountain',
      city: 'Gunung Bromo, East Java',
      photos: [
        'https://images.unsplash.com/photo-1587651687979-77cf05d1b841?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1697729935951-420138024919?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1609757574846-9ab99fc39a03?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      place: 'Jakarta',
      category: 'Urban',
      city: 'Jakarta, Indonesia',
      photos: [
        'https://images.unsplash.com/photo-1575864716793-49a09717eb03?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1567756396406-f529ebb5583d?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1733317372362-d34c198096bd?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      place: 'Yogyakarta',
      category: 'Cultural',
      city: 'Yogyakarta, Indonesia',
      photos: [
        'https://images.unsplash.com/photo-1593642532973-d31b2c4f5d6f?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1630214801769-24784bfd2b9c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1552035191-f10bd9fbf35e?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
  ];

  const place = places.find(
    (img) => img.place.toLowerCase() === decodedName.toLowerCase()
  );

  const images = place?.photos || [''];

  const handleClick = () => {
    navigate(`/location/${encodeURIComponent(decodedName)}`);
  };

  return (
    <div className='w-full h-screen bg-white'>
      <img
        src={images[currentIndex]}
        alt={place?.place}
        className='w-full h-80 object-cover transition-all duration-700 ease-in-out'
      />
      <div className='absolute top-8 flex justify-between items-center z-10 px-1 w-full'>
        <button
          onClick={() => navigate('/dashboard')}
          className='text-white p-2 size-8 rounded-full bg-white bg-opacity-20 hover:bg-gray-700 transition-colors'>
          <IoArrowBack />
        </button>
        <h3 className='flex align-items justify-center p-2 text-xs text-white font-bold ml-3  bg-white bg-opacity-20 rounded-full text-center'>
          {place?.city}
        </h3>
        <button className='text-white p-2 size-8 rounded-full bg-white bg-opacity-20 hover:bg-gray-700 transition-colors'>
          <IoMenu />
        </button>
      </div>
      <div className='absolute top-64 right-3 transform -translate-x-1/2 flex space-x-2 z-10'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? 'bg-white'
                : 'bg-gray-400 opacity-75 hover:opacity-100'
            } transition-all`}
            aria-label={`Ir para o slide ${index + 1}`}></button>
        ))}
      </div>
      <div className=' absolute top-64 left-3 flex bg-white text-gray-800 rounded-full px-2 py-1 text-xs z-10'>
        <img
          src={images[0]}
          alt={place?.place}
          className='size-4 rounded-full mr-2'
        />
        {place?.category}
      </div>
      <div className='absolute px-4 py-4 bg-white rounded-lg -mt-8 z-10 w-full'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl font-bold mb-2 text-gray-800'>{name}</h1>
          <div className='flex gap-1'>
            <p className='text-sm text-yellow-300 mb-4'>★</p>
            <p className='text-sm text-gray-500 mb-4'>4.8 (13k Reviews)</p>
          </div>
        </div>

        <ul className='flex gap-4 mb-4 text-sm justify-between'>
          <li className='text-indigo-500'>
            <button>Information</button>
          </li>
          <li className='text-gray-300'>
            <button onClick={handleClick}>Location</button>
          </li>
          <li className='text-gray-300'>
            <button>Reviews</button>
          </li>
        </ul>

        <div>
          <h2 className='text-lg font-semibold mb-2 text-gray-800'>About</h2>
          <p className='text-gray-600'>
            {name} is one of the most popular tourist destinations. It offers
            breathtaking views and unique experiences.
          </p>
        </div>

        <div className='mt-6 p-2 bg-gray-50 rounded-xl'>
          <div className='flex justify-between mb-2'>
            <div className='flex'>
              <div className='bg-indigo-500 rounded-lg p-2 size-8 text-white flex items-center justify-center mr-2'>
                <IoTimeOutline />
              </div>
              <div>
                <p className='text-xs text-gray-800'>Hours</p>
                <p className='text-xs text-gray-400'>24 Hours</p>
              </div>
            </div>
            <div className='flex'>
              <div className='bg-indigo-500 rounded-lg p-2 size-8 text-white flex items-center justify-center mr-2'>
                <IoPeopleOutline />
              </div>
              <div>
                <p className='text-xs text-gray-800'>50K+</p>
                <p className='text-xs text-gray-400'>Visitors</p>
              </div>
            </div>
            <div className='flex'>
              <div className='bg-indigo-500 rounded-lg p-2 size-8 text-white flex items-center justify-center mr-2'>
                <IoMapOutline />
              </div>
              <div>
                <p className='text-xs text-gray-800'>69,5KM</p>
                <p className='text-xs text-gray-400'>From You</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex py-4 justify-between items-center'>
          <div className='flex flex-col'>
            <p className='text-gray-400 text-sm'>Ticket Price</p>
            <p className='text-gray-800 font-bold'>$20-40</p>
          </div>
          <button className='bg-indigo-500 text-white rounded-full py-2 px-4 flex items-center justify-center gap-2'>
            Lets Book Now
            <IoArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

function Location() {
  const { name } = useParams<{ name: string }>();

  const places = [
    {
      name: 'Mount Bromo',
      uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.332021115162!2d112.95353597086884!3d-7.942484439169426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aa5905c03f%3A0x77c2514106549c48!2sMount%20Bromo!5e0!3m2!1sen!2sid!4v1717192138933!5m2!1sen!2sid',
    },
    {
      name: 'Bali',
      uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25277.838575027476!2d115.15060851897457!3d-8.40951786580556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409f06114811%3A0xa022718e388100!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1717192233621!5m2!1sen!2sid',
    },
    {
      name: 'Komodo Island',
      uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15705.510656086895!2d119.49755146033486!3d-8.583333333333332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da47f7d389a0397%3A0x1c8b3684a0d99c43!2sKomodo%20Island!5e0!3m2!1sen!2sid!4v1717192271603!5m2!1sen!2sid',
    },
    {
      name: 'Jakarta',
      uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.657538902575!2d106.8290278147683!3d-6.175110995521958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d341904d1d%3A0x8673a5a7b1b5e5a9!2sJakarta!5e0!3m2!1sen!2sid!4v1717192305593!5m2!1sen!2sid',
    },
  ];

  const decodedName = decodeURIComponent(name || '');

  const place = places.find(
    (img) => img.name.toLowerCase() === decodedName.toLowerCase()
  );

  const placeUrl =
    place?.uri ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000000!2d-70!3d40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzQ2LjMiTiA3MMKwMDMnMzkuNCJX!5e0!3m2!1sen!2sus!4v1642055627616!5m2!1sen!2sus';

  return (
    <div>
      <div className='flex justify-between w-full absolute mt-20 px-4 z-10 gap-2'>
        <input
          type='text'
          placeholder='Search destination here'
          className='w-full px-2 bg-white rounded-2xl z-10'></input>
        <button className='size-10 bg-indigo-500 px-2 py-2 rounded-full z-10 flex align-center items-center justify-center'>
          <FaMicrophone />
        </button>
      </div>
      <div className='absolute top-1/2 left-1/2 bg-indigo-500 rounded-full size-14 z-10 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2'>
        <IoLocation />
      </div>

      <iframe
        className='w-screen h-screen'
        src={placeUrl}
        width='100%'
        height='100%'
        style={{ border: 0 }}
        loading='lazy'
        title={`${name} location`}></iframe>

      <div className='relative mx-6 -mt-40 bg-white px-2 py-2 rounded-2xl shadow-lg z-10 flex justify-between items-center gap-1'>
        <img
          src='https://images.unsplash.com/photo-1528214968864-8dd00782fa9e?q=80&w=1219&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt={name}
          className='size-8 rounded-lg'
        />
        <div>
          <p className='text-sm font-semibold text-gray-800'>{name}</p>
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
      <BottomNav />
    </div>
  );
}

function OnBoardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const images = [
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1587651687979-77cf05d1b841?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1587651687979-77cf05d1b841?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className='h-full w-full bg-cover bg-center transition-all duration-700 ease-in-out'></div>

      <div className='absolute inset-0 flex flex-col p-4'>
        <h1 className='text-4xl md:text-6xl font-normal text-white leading-tight'>
          Plan Your <br />
          Trip with Ease
        </h1>
        <p className='absolute bottom-32'>
          Discover destinations, compare options, and organize your journey in
          one simple app.
        </p>
        <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? 'bg-white'
                  : 'bg-gray-400 opacity-75 hover:opacity-100'
              } transition-all`}
              aria-label={`Ir para o slide ${index + 1}`}></button>
          ))}
        </div>

        <div className='flex h-full justify-end'>
          <div className='flex w-full align-center'>
            <button
              onClick={() => navigate('/dashboard')}
              className='bg-white text-indigo-500 rounded-full w-24 px-4 py-2 mt-auto'>
              Skip
            </button>

            <div className='flex gap-2 mt-auto ml-auto'>
              <button
                onClick={goToPrevious}
                className='size-10 flex items-center justify-center bg-white text-indigo-500 rounded-full hover:bg-opacity-75 transition-opacity focus:outline-none z-10'
                aria-label='Slide anterior'>
                <IoArrowBack />
              </button>
              <button
                onClick={goToNext}
                className='size-10 flex items-center justify-center bg-indigo-500  text-white rounded-full hover:bg-opacity-75 transition-opacity focus:outline-none z-10'
                aria-label='Next photo'>
                <IoArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AppWithRouter = dynamic(
  () =>
    import('react-router-dom').then((mod) => {
      const { BrowserRouter, Route, Routes } = mod;
      return () => (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<OnBoardingScreen />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/destination/:name' element={<DestinationDetail />} />
            <Route path='/location/:name' element={<Location />} />
          </Routes>
        </BrowserRouter>
      );
    }),
  { ssr: false }
);

export default function App() {
  return <AppWithRouter />;
}
