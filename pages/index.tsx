import React, { useState, useEffect } from 'react';
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Compass,
  X,
} from 'lucide-react';
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import {
  SiAmericanexpress,
  SiGooglepay,
  SiApplepay,
  SiAndroid,
  SiIos,
  SiWindows,
  SiWhatsapp,
} from 'react-icons/si';

// Define types for our data structures
interface Destination {
  id: number;
  name: string;
  category: string;
  rating: number;
  price: number;
  duration: string;
  description: string;
  image: string;
  gallery: string[];
  reviews: number;
}

interface Booking {
  id: string;
  destination: string;
  date: string;
  people: number;
  price: number;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    category: 'Beach',
    rating: 4.9,
    price: 899,
    duration: '7 Days',
    description:
      'Experience the tropical paradise of Bali with pristine beaches, lush jungles, and ancient temples.',
    image:
      'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=600&h=400&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&auto=format',
    ],
    reviews: 124,
  },
  {
    id: 2,
    name: 'Santorini, Greece',
    category: 'Island',
    rating: 4.7,
    price: 1299,
    duration: '5 Days',
    description:
      'Discover the stunning white-washed buildings and crystal-clear waters of Santorini.',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=400&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1519068739054-9f4c0a4a144d?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1570077188670-e1e4d69cb61b?w=600&h=400&auto=format',
    ],
    reviews: 98,
  },
  {
    id: 3,
    name: 'Maldives',
    category: 'Luxury',
    rating: 4.95,
    price: 1899,
    duration: '6 Days',
    description:
      'Escape to the luxurious overwater villas and pristine beaches of the Maldives.',
    image:
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1572002219945-8030dd6d7a09?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&auto=format',
    ],
    reviews: 86,
  },
  {
    id: 4,
    name: 'Rome, Italy',
    category: 'City',
    rating: 4.6,
    price: 799,
    duration: '4 Days',
    description: 'Explore the ancient history and world-class cuisine of Rome.',
    image:
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=600&h=400&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1519068739054-9f4c0a4a144d?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1570077188670-e1e4d69cb61b?w=600&h=400&auto=format',
    ],
    reviews: 112,
  },
  {
    id: 5,
    name: 'Paris, France',
    category: 'City',
    rating: 4.8,
    price: 1199,
    duration: '6 Days',
    description: 'Experience the romance and culture of the City of Light.',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1519068739054-9f4c0a4a144d?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1570077188670-e1e4d69cb61b?w=600&h=400&auto=format',
    ],
    reviews: 156,
  },
  {
    id: 6,
    name: 'New York, USA',
    category: 'City',
    rating: 4.7,
    price: 999,
    duration: '5 Days',
    description:
      'Visit the iconic landmarks and vibrant culture of New York City.',
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1519068739054-9f4c0a4a144d?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1570077188670-e1e4d69cb61b?w=600&h=400&auto=format',
    ],
    reviews: 132,
  },
  {
    id: 7,
    name: 'Queenstown, New Zealand',
    category: 'Adventure',
    rating: 4.85,
    price: 1499,
    duration: '7 Days',
    description:
      'Adventure capital of the world with stunning mountain scenery and outdoor activities.',
    image:
      'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&h=400&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&auto=format',
    ],
    reviews: 94,
  },
  {
    id: 8,
    name: 'Costa Rica',
    category: 'Nature',
    rating: 4.75,
    price: 1099,
    duration: '8 Days',
    description:
      'Immerse yourself in the rainforests, wildlife, and beaches of Costa Rica.',
    image:
      'https://images.unsplash.com/photo-1516946691636-7e33b6b1b4e1?w=600&h=400&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1516946691636-7e33b6b1b4e1?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&auto=format',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&auto=format',
    ],
    reviews: 78,
  },
];

const categories = [
  'All',
  'Beach',
  'Island',
  'City',
  'Luxury',
  'Adventure',
  'Nature',
];

// Modern font imports - System fonts for better performance
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
  
  body {
    font-family: 'Outfit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .font-outfit {
    font-family: 'Outfit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const TravelAdventureApp: React.FC = () => {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [newBooking, setNewBooking] = useState<Booking>({
    id: '',
    destination: '',
    date: '',
    people: 1,
    price: 0,
  });
  const [currentView, setCurrentView] = useState('destinations');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Filter destinations based on search query and selected category
  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || destination.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleImageDragStart = (
    e: React.DragEvent<HTMLImageElement>,
    index: number
  ) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleImageDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleImageDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropIndex: number
  ) => {
    e.preventDefault();
    if (!selectedDestination) return;

    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const newImages = [...selectedDestination.gallery];
    const [draggedImage] = newImages.splice(draggedIndex, 1);
    newImages.splice(dropIndex, 0, draggedImage);

    setSelectedDestination({
      ...selectedDestination,
      gallery: newImages,
    });
  };

  const handleImageDragEnd = () => {
    // Reset dragging state
    setIsDragging(false);
  };

  const handleBookNow = (destination: Destination) => {
    setSelectedDestination(destination);
    setNewBooking({
      id: '',
      destination: destination.name,
      date: '',
      people: 1,
      price: destination.price,
    });
    setShowBookingModal(true);
  };

  const handleConfirmBooking = () => {
    if (newBooking.date && selectedDestination) {
      const confirmedBooking: Booking = {
        ...newBooking,
        id: Date.now().toString(),
        price: selectedDestination.price * newBooking.people,
      };
      setBookings([...bookings, confirmedBooking]);
      setShowBookingModal(false);
      setNewBooking({
        id: '',
        destination: '',
        date: '',
        people: 1,
        price: 0,
      });
    }
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings(bookings.filter((booking) => booking.id !== bookingId));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToPopularDestinations = () => {
    const section = document.getElementById('popular-destinations');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close modals when pressing Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showBookingModal) {
          setShowBookingModal(false);
        }
      }
    };

    if (showBookingModal) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showBookingModal]);

  // Improved accessibility for dropdown menus
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isViewDropdownOpen, setIsViewDropdownOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const toggleViewDropdown = () => {
    setIsViewDropdownOpen(!isViewDropdownOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isCategoryDropdownOpen &&
        !(event.target as Element).closest('.category-dropdown')
      ) {
        setIsCategoryDropdownOpen(false);
      }
      if (
        isViewDropdownOpen &&
        !(event.target as Element).closest('.view-dropdown')
      ) {
        setIsViewDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCategoryDropdownOpen, isViewDropdownOpen]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900'>
      {/* Modern fonts */}
      <style jsx global>
        {fontStyles}
      </style>

      {/* Header */}
      <header className='bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            <div
              className='flex items-center cursor-pointer group'
              onClick={() => window.location.reload()}>
              <Compass className='h-10 w-10 text-teal-600 group-hover:text-teal-700 transition-colors duration-300' />
              <h1 className='ml-2 text-3xl font-bold text-teal-700 font-outfit'>
                Wander<span className='text-teal-600'>Quest</span>
              </h1>
            </div>

            <div className='hidden md:flex space-x-2'>
              <button
                className='py-2 px-4 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm'
                onClick={scrollToPopularDestinations}>
                Popular Destinations
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative h-[60vh] overflow-hidden'>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920&h=1080&auto=format')] bg-cover bg-center">
          <div className='absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-800/60'></div>
        </div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center'>
          <div className='max-w-3xl'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 leading-tight font-outfit drop-shadow-md'>
              Explore the World's Most Amazing Places
            </h2>
            <p className='text-lg md:text-xl text-white mb-8 max-w-2xl'>
              Discover breathtaking destinations, plan your perfect adventure,
              and create memories that will last a lifetime.
            </p>
            <div className='relative max-w-xl'>
              <input
                type='text'
                placeholder='Search destinations...'
                className='w-full py-3 pl-10 pr-4 bg-white/90 backdrop-blur-sm text-slate-800 placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    scrollToTop();
                  }
                }}
              />
              <Search className='absolute left-3 top-3 h-5 w-5 text-slate-400' />
            </div>
            <button
              className='mt-4 py-2 px-4 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm'
              onClick={scrollToTop}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className='py-4 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative'>
            <div className='flex overflow-x-auto pb-2 space-x-2 scrollbar-hide'>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`py-2 px-4 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id='popular-destinations' className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-slate-800 mb-8 font-outfit'>
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : 'Popular Destinations'}
          </h2>
          {filteredDestinations.length === 0 ? (
            <div className='text-center py-12'>
              <p className='text-slate-600 text-lg'>
                No destinations found. Try a different search.
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {filteredDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'
                  onClick={() => setSelectedDestination(destination)}>
                  <div className='relative h-64'>
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className='w-full h-full object-cover'
                      loading='lazy'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 p-4'>
                      <h3 className='text-white text-lg font-semibold font-outfit'>
                        {destination.name}
                      </h3>
                      <div className='flex items-center'>
                        <Star className='h-4 w-4 text-amber-400 fill-current' />
                        <span className='text-white ml-1 text-sm'>
                          {destination.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='p-4'>
                    <div className='flex justify-between items-center'>
                      <span className='text-teal-600 font-medium'>
                        ${destination.price}
                      </span>
                      <span className='text-slate-500 text-sm'>
                        {destination.duration}
                      </span>
                    </div>
                    <p className='text-slate-600 text-sm mt-2 line-clamp-2'>
                      {destination.description}
                    </p>
                    <button
                      className='mt-4 w-full py-2 px-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(destination);
                      }}>
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-slate-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4 flex items-center font-outfit'>
                <Compass className='h-6 w-6 mr-2 text-teal-400' />
                WanderQuest
              </h3>
              <p className='text-slate-400'>
                Discover the world's most amazing places and plan your perfect
                adventure with us.
              </p>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4 font-outfit'>
                Company
              </h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-slate-400 hover:text-white transition-colors duration-200'>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-slate-400 hover:text-white transition-colors duration-200'>
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-slate-400 hover:text-white transition-colors duration-200'>
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-slate-400 hover:text-white transition-colors duration-200'>
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4 font-outfit'>
                Support
              </h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-slate-400 hover:text-white transition-colors duration-200'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-slate-400 hover:text-white transition-colors duration-200'>
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-slate-400 hover:text-white transition-colors duration-200'>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-slate-400 hover:text-white transition-colors duration-200'>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4 font-outfit'>
                Follow Us
              </h4>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='text-slate-400 hover:text-white transition-colors duration-200'>
                  <FaFacebook className='h-6 w-6' />
                </a>
                <a
                  href='#'
                  className='text-slate-400 hover:text-white transition-colors duration-200'>
                  <FaTwitter className='h-6 w-6' />
                </a>
                <a
                  href='#'
                  className='text-slate-400 hover:text-white transition-colors duration-200'>
                  <FaInstagram className='h-6 w-6' />
                </a>
                <a
                  href='#'
                  className='text-slate-400 hover:text-white transition-colors duration-200'>
                  <FaLinkedin className='h-6 w-6' />
                </a>
              </div>
            </div>
          </div>
          <div className='border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm'>
            <p>
              &copy; {new Date().getFullYear()} WanderQuest. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Destination Details Modal */}
      {selectedDestination && (
        <div
          className='fixed inset-0 z-50 overflow-y-auto'
          aria-labelledby='destination-modal-title'
          role='dialog'
          aria-modal='true'>
          <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity'
              aria-hidden='true'
              onClick={() => setSelectedDestination(null)}></div>

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'>
              &#8203;
            </span>

            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full'>
              <div className='absolute top-0 right-0 pt-4 pr-4 z-10'>
                <button
                  type='button'
                  className='bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none'
                  onClick={() => setSelectedDestination(null)}>
                  <span className='sr-only'>Close</span>
                  <X className='h-6 w-6' />
                </button>
              </div>

              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <div className='relative rounded-xl overflow-hidden h-64 md:h-72 mb-4'>
                          <img
                            src={
                              selectedDestination.gallery[selectedImageIndex]
                            }
                            alt={`${selectedDestination.name} - Image ${
                              selectedImageIndex + 1
                            }`}
                            className='w-full h-full object-cover'
                            draggable
                            onDragStart={(e) =>
                              handleImageDragStart(e, selectedImageIndex)
                            }
                            onDragEnd={handleImageDragEnd}
                          />
                        </div>
                        <div className='grid grid-cols-4 gap-2'>
                          {selectedDestination.gallery.map((image, index) => (
                            <div
                              key={index}
                              className={`relative rounded-lg overflow-hidden h-16 cursor-pointer ${
                                selectedImageIndex === index
                                  ? 'ring-2 ring-teal-500'
                                  : ''
                              }`}
                              onClick={() => setSelectedImageIndex(index)}
                              onDragOver={handleImageDragOver}
                              onDrop={(e) => handleImageDrop(e, index)}
                              draggable
                              onDragStart={(e) =>
                                handleImageDragStart(e, index)
                              }
                              onDragEnd={handleImageDragEnd}>
                              <img
                                src={image}
                                alt={`${selectedDestination.name} - Thumbnail ${
                                  index + 1
                                }`}
                                className='w-full h-full object-cover'
                                loading='lazy'
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3
                          id='destination-modal-title'
                          className='text-2xl font-bold text-slate-800 mb-2 font-outfit'>
                          {selectedDestination.name}
                        </h3>
                        <div className='flex items-center mb-4'>
                          <div className='flex items-center mr-2'>
                            <Star className='h-5 w-5 text-amber-400 fill-current' />
                            <span className='text-slate-700 ml-1 font-medium'>
                              {selectedDestination.rating}
                            </span>
                          </div>
                          <span className='text-slate-500 text-sm'>
                            {selectedDestination.reviews} reviews
                          </span>
                        </div>
                        <div className='flex flex-wrap gap-2 mb-4'>
                          <span className='inline-block bg-teal-100 text-teal-800 text-xs px-2.5 py-0.5 rounded-full font-medium'>
                            {selectedDestination.category}
                          </span>
                        </div>
                        <p className='text-slate-600 mb-6'>
                          {selectedDestination.description}
                        </p>
                        <div className='grid grid-cols-2 gap-4 mb-6'>
                          <div className='bg-slate-50 p-4 rounded-lg'>
                            <div className='flex items-center text-teal-600 mb-1'>
                              <Calendar className='h-5 w-5 mr-2' />
                              <span className='font-medium'>Duration</span>
                            </div>
                            <p className='text-slate-700'>
                              {selectedDestination.duration}
                            </p>
                          </div>
                          <div className='bg-slate-50 p-4 rounded-lg'>
                            <div className='flex items-center text-teal-600 mb-1'>
                              <Users className='h-5 w-5 mr-2' />
                              <span className='font-medium'>
                                Max Group Size
                              </span>
                            </div>
                            <p className='text-slate-700'>12 people</p>
                          </div>
                        </div>
                        <div className='bg-amber-50 border border-amber-200 p-4 rounded-lg mb-6'>
                          <div className='flex items-center text-amber-600 mb-2'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              viewBox='0 0 20 20'
                              fill='currentColor'>
                              <path
                                fillRule='evenodd'
                                d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                                clipRule='evenodd'
                              />
                            </svg>
                            <span className='font-medium'>Location</span>
                          </div>
                          <p className='text-slate-700'>
                            {selectedDestination.name},{' '}
                            {selectedDestination.category} Region
                          </p>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div>
                            <span className='text-2xl font-bold text-slate-800 font-outfit'>
                              ${selectedDestination.price}
                            </span>
                            <span className='text-slate-500 text-sm ml-1'>
                              per person
                            </span>
                          </div>
                          <button
                            className='py-3 px-6 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium'
                            onClick={() => {
                              setSelectedDestination(null);
                              handleBookNow(selectedDestination);
                            }}>
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div
          className='fixed inset-0 z-50 overflow-y-auto'
          aria-labelledby='booking-modal-title'
          role='dialog'
          aria-modal='true'>
          <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity'
              aria-hidden='true'
              onClick={() => setShowBookingModal(false)}></div>

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'>
              &#8203;
            </span>

            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='absolute top-0 right-0 pt-4 pr-4 z-10'>
                <button
                  type='button'
                  className='bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none'
                  onClick={() => setShowBookingModal(false)}>
                  <span className='sr-only'>Close</span>
                  <X className='h-6 w-6' />
                </button>
              </div>

              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full'>
                    <h3
                      id='booking-modal-title'
                      className='text-2xl font-bold text-slate-800 mb-4 font-outfit'>
                      Book Your Adventure
                    </h3>
                    <div className='mb-4'>
                      <h4 className='text-lg font-semibold text-slate-700 font-outfit'>
                        {selectedDestination?.name}
                      </h4>
                      <p className='text-slate-500'>
                        {selectedDestination?.duration} • $
                        {selectedDestination?.price} per person
                      </p>
                    </div>
                    <div className='space-y-4'>
                      <div>
                        <label
                          htmlFor='booking-date'
                          className='block text-sm font-medium text-slate-700 mb-1'>
                          Travel Date
                        </label>
                        <input
                          type='date'
                          id='booking-date'
                          className='w-full border border-slate-300 rounded-lg p-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300'
                          value={newBooking.date}
                          onChange={(e) =>
                            setNewBooking({
                              ...newBooking,
                              date: e.target.value,
                            })
                          }
                          min={new Date().toISOString().split('T')[0]} // Prevent past dates
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='booking-people'
                          className='block text-sm font-medium text-slate-700 mb-1'>
                          Number of People
                        </label>
                        <div className='relative'>
                          <select
                            id='booking-people'
                            className='w-full appearance-none border border-slate-300 rounded-lg p-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300'
                            value={newBooking.people}
                            onChange={(e) =>
                              setNewBooking({
                                ...newBooking,
                                people: parseInt(e.target.value),
                              })
                            }>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? 'person' : 'people'}
                              </option>
                            ))}
                          </select>
                          <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                            <svg
                              className='h-5 w-5 text-slate-400'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'>
                              <path
                                fillRule='evenodd'
                                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className='border-t border-slate-200 pt-4 mt-4'>
                        <div className='flex justify-between items-center mb-2'>
                          <span className='text-slate-700'>Subtotal</span>
                          <span className='font-medium text-slate-800'>
                            $
                            {selectedDestination?.price
                              ? selectedDestination.price * newBooking.people
                              : 0}
                          </span>
                        </div>
                        <div className='flex justify-between items-center mb-4'>
                          <span className='text-slate-700'>Tax (10%)</span>
                          <span className='font-medium text-slate-800'>
                            $
                            {selectedDestination?.price
                              ? Math.round(
                                  selectedDestination.price *
                                    newBooking.people *
                                    0.1 *
                                    100
                                ) / 100
                              : 0}
                          </span>
                        </div>
                        <div className='flex justify-between items-center text-lg font-bold'>
                          <span className='text-slate-800'>Total</span>
                          <span className='text-teal-600'>
                            $
                            {selectedDestination?.price
                              ? Math.round(
                                  selectedDestination.price *
                                    newBooking.people *
                                    1.1 *
                                    100
                                ) / 100
                              : 0}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-slate-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <button
                  type='button'
                  className='w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-300'
                  onClick={handleConfirmBooking}
                  disabled={!newBooking.date}>
                  Confirm Booking
                </button>
                <button
                  type='button'
                  className='mt-3 w-full inline-flex justify-center rounded-lg border border-slate-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-300'
                  onClick={() => setShowBookingModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelAdventureApp;
// Zod Schema
export const Schema = {
  commentary: '',
  template: 'nextjs-developer',
  title: '',
  description: '',
  additional_dependencies: ['react-icons'],
  has_additional_dependencies: true,
  install_dependencies_command: 'npm install react-icons',
  port: 3000,
  file_path: 'pages/index.tsx',
  code: '<see code above>',
};
