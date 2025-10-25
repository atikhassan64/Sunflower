import React from 'react';
import toast from 'react-hot-toast';
import { BiMapPin } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';
import { LiaCalendarDaySolid } from 'react-icons/lia';

const events = [
    {
      id: 1,
      title: "Live Yoga & Meditation Workshop",
      date: "Oct 30, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Online via Zoom",
      image: "https://oneyogathailand.com/wp-content/uploads/2023/04/meditation-retreat-in-silence-to-cultivate-inner-peace-and-presence-on-koh-phangan-scaled.jpg",
      instructor: "By Priya Sharma",
    },
    {
      id: 2,
      title: "Creative Photography Masterclass",
      date: "Nov 2, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Dhaka Studio Hall",
      image: "https://classbento.com.au/photos/pexels-andrea-piacquadio-3755751ewrewrrrrerwr.jpg",
      instructor: "By David Lee",
    },
    {
      id: 3,
      title: "Build Your First Web App",
      date: "Nov 5, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Online via Google Meet",
      image: "https://mindnotix.com/uploads/Blog/1706512818blog_main_image.jpg",
      instructor: "By Emma Wilson",
    },
  ];

  const handleJoin = ()=>{
    toast.success('Join is success');
  };

const UpcomingWorkShop = () => {
    return (
        <div>
            <section className="py-16 bg-base-100 max-w-11/12 mx-auto">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl md:text-4xl font-semibold md:font-bold text-center text-primary mb-2 md:mb-4">
                        Upcoming Workshops & Events
                    </h2>
                    <p className="text-center text-accent text-sm md:text-lg mb-10">
                        Join our live sessions and learn directly from expert providers. Stay updated with the latest workshops designed to enhance your skills.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 "
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6 text-left ">
                                    <h3 className="text-xl font-semibold mb-2 text-primary ">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-accent mb-2">{event.instructor}</p>
                                    <div className="flex items-center text-accent text-sm mb-1">
                                        <LiaCalendarDaySolid className="w-4 text-accent h-4 mr-2" /> {event.date}
                                    </div>
                                    <div className="flex items-center text-accent text-sm mb-1">
                                        <CgLock className="w-4 h-4 text-accent mr-2" /> {event.time}
                                    </div>
                                    <div className="flex items-center text-accent text-sm mb-4">
                                        <BiMapPin className="w-4 text-accent h-4 mr-2" /> {event.location}
                                    </div>
                                    <button onClick={handleJoin} className="bg-primary text-white px-5 py-2 rounded-full text-sm  cursor-pointer font-semibold hover:bg-primary/90 transition-all duration-300">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpcomingWorkShop;