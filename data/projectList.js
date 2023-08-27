import movieDB from "@/public/projects/movieDB.png";
import salonBooking from "@/public/projects/salonBooking.png";
import newsApp from "@/public/projects/newsApp.png";
import hotelMgmt from "@/public/projects/hotelMgmt.png";
import blackJack from "@/public/projects/blackJack.png";
import eBookStore from "@/public/projects/eBookStore.png";
import bookShop from "@/public/projects/bookShop.png";

export const projectList = [
    {
        title: "Ecommerce BookShop",
        backgroundImg: bookShop,
        urlParam: 'bookShop',
        techStack: ['c#', 'ASP.NET Core 7', 'MySQL', 'Bootstrap'],
        hrefLive: "https://aspnet-bookshop-541f487dea3b.herokuapp.com/",
        hrefCode: "https://github.com/ramezcode1/AspNetCoreBookShop",
        description: "A fully responsive eCommerce website for selling books. Customers are able to displaying a list of books with their titles, authors, and prices. Add book to shopping cart. Admin Panel page that gives you full control over books and categories."
    },
    {
        title: "API Movie",
        backgroundImg: movieDB,
        urlParam: 'movieDB',
        techStack: ['NextJS', 'Tailwind css'],
        hrefLive: "https://movie-db-ramezcode1.vercel.app/",
        hrefCode: "https://github.com/ramezcode1/movieDB",
        description: "This app was built using Next.js 13 framework. Users are able to search for movies and TV shows through TMDB's API. Implemented the App Router and API call to render relevant information"
    },
    {
        title: "Salon Booking",
        backgroundImg: salonBooking,
        urlParam: 'salonBooking',
        techStack: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
        hrefLive: "https://barbershop-booking.herokuapp.com/",
        hrefCode: "https://github.com/ramezcode1/salonBookingSystem",
        description: "Barber shop booking system created using Spring Boot, Spring Data JPA/MySQL, Hibernate. Allows customers to book appointments and check the availability of barber on selected service and date. I used Thymeleaf template and Bootstrap css"
    },
    {
        title: "News App",
        backgroundImg: newsApp,
        urlParam: 'newsApp',
        techStack: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
        hrefLive: "https://news-blog-app.herokuapp.com/",
        hrefCode: "https://github.com/ramezcode1/newsBlogApp",
        description: "News API for fetching realtime data from from newsapi.org. The app includes a home page that displays top news, and a category page where users can choose from a range of news categories, and ability to save for later for future read. " +
            "for Front-end I used JavaScript and Bootstrap"
    },
    {
        title: "Hotel Management",
        backgroundImg: hotelMgmt,
        urlParam: 'hotelMgmt',
        techStack: ['PHP', 'Laravel 10', 'MySQL', 'Bootstrap'],
        hrefLive: "https://hotel-management.herokuapp.com/",
        hrefCode: "https://github.com/ramezcode1/hotelManagement",
        description: "Developed in PHP, Laravel 10 framework, Blade Templates, Eloquent ORM, Database Migrations. This app allow users to view Room facilities, price and availability of the room according to their check-in and check-out date and book the room of their choice. A full admin panel created to perform all CRUD operations"
    },
    {
        title: "Black Jack",
        backgroundImg: blackJack,
        urlParam: 'blackJack',
        techStack: ['JavaScript', 'Bootstrap'],
        hrefLive: "https://ramezcode1.github.io/blackJack-game/",
        hrefCode: "https://github.com/ramezcode1/blackJack-game",
        description: "A small game engine for casino blackjack for calculating hand probabilities built using HTML5, javaScript and Bootstrap"
    },
    {
        title: "eBook Store",
        backgroundImg: eBookStore,
        urlParam: 'eBookStore',
        techStack: ['JavaScript'],
        hrefLive: "https://ramezcode1.github.io/e_bookStore/",
        hrefCode: "https://github.com/ramezcode1/e_bookStore",
        description: "Online Book Store Using HTML, CSS and JavaScript. create user registration and login interface, add book to shopping cart or favorite list"
    }
];