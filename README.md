<<<<<<< HEAD
# 🛒 FreshCart - Modern E-Commerce Platform

A modern, responsive e-commerce platform built with React, featuring a clean design, smooth animations, and excellent user experience across all devices.

![FreshCart Logo](src/assets/images/freshcart-logo.svg)

## ✨ Features

### 🎨 **Modern Design**

- Clean, professional UI with smooth animations
- Responsive design that works on all devices
- Modern color scheme with primary green theme
- Beautiful hover effects and transitions

### 📱 **Fully Responsive**

- Mobile-first design approach
- Optimized for tablets, desktops, and mobile devices
- Touch-friendly interface for mobile users
- Adaptive navigation menu

### 🛍️ **E-Commerce Features**

- Product browsing and search
- Shopping cart functionality
- Wishlist management
- User authentication and registration
- Order management
- Product categories and brands
- Product details with image gallery

### 🚀 **Performance Optimized**

- Fast loading with Vite build tool
- Optimized images with lazy loading
- Efficient state management with Context API
- React Query for server state management

### 🔧 **Developer Experience**

- Modern React with hooks
- TypeScript-ready codebase
- ESLint configuration
- Hot module replacement
- Component-based architecture

## 🛠️ Technologies Used

### Frontend

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Swiper.js** - Modern slider/carousel
- **Formik + Yup** - Form handling and validation
- **React Query** - Server state management
- **React Hot Toast** - Beautiful notifications

### UI/UX Libraries

- **Font Awesome** - Icon library
- **React Helmet** - Document head management
- **React Image Gallery** - Image gallery component

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd e-commerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🏗️ Project Structure

```
src/
├── Components/           # Reusable UI components
│   ├── Card/            # Product card component
│   ├── CategorySlider/  # Category carousel
│   ├── Footer/          # Footer component
│   ├── HomeSlider/      # Hero slider
│   ├── Layout/          # Main layout wrapper
│   ├── Loading/         # Loading states
│   └── Navbar/          # Navigation bar
├── Pages/               # Page components
│   ├── Home/           # Homepage
│   ├── Login/          # Login page
│   ├── Signup/         # Registration page
│   ├── ProductDetails/ # Product detail page
│   ├── Cart/           # Shopping cart
│   ├── WishList/       # User wishlist
│   └── ...
├── context/            # React Context providers
│   ├── User.context.jsx
│   ├── Cart.context.jsx
│   ├── WishList.context.jsx
│   └── Products.context.jsx
├── hooks/              # Custom React hooks
├── assets/             # Static assets
│   └── images/         # Image files
└── main.jsx           # Application entry point
```

## 🎨 Design System

### Color Palette

- **Primary**: Green (#0aad0a) - Main brand color
- **Secondary**: Gray tones for text and backgrounds
- **Success**: Green variants for success states
- **Error**: Red for error states
- **Warning**: Yellow for warning states

### Typography

- **Font Family**: Encode Sans Expanded
- **Font Weights**: 400, 500, 600, 700, 800, 900

### Components

- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Clean inputs with focus states
- **Navigation**: Responsive menu with smooth transitions

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 API Integration

The application integrates with the E-commerce API from RouteMisr:

- **Base URL**: `https://ecommerce.routemisr.com/api/v1`
- **Authentication**: JWT token-based
- **Features**: Products, Categories, Brands, Cart, Wishlist, Orders

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the 'dist' folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - _Initial work_ - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- [RouteMisr](https://route-misr.com/) for providing the e-commerce API
- [Tailwind CSS](https://tailwindcss.com/) for the amazing CSS framework
- [Swiper.js](https://swiperjs.com/) for the slider functionality
- [React Query](https://tanstack.com/query) for server state management

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Contact us at [your-email@example.com]
- Join our community discussions

---

**Made with ❤️ using React and modern web technologies**
=======
# Fresh Cart

[Live Demo](https://e-commerce-flame-eight-54.vercel.app/)  

---

## Overview
This project is a modern E-Commerce web application built with cutting-edge technologies to provide a seamless online shopping experience. The platform features a user-friendly interface, responsive design, and powerful backend integration.

---

## Features
- **User Authentication**: Secure login and registration system.
- **Product Listings**: Dynamic and visually appealing product gallery.
- **Search and Filters**: Advanced search functionality with filters.
- **Shopping Cart**: Add, update, and remove items from the cart.
- **Order Management**: Place and track orders effortlessly.
- **Offline Detection**: Notifies users when offline.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Real-Time Notifications**: Toast notifications for important events.

---

## Technologies Used

### Frontend
- **React**: Building a dynamic and responsive user interface.
- **React Router DOM**: Client-side routing for seamless navigation.
- **React Query**: Data fetching and caching.
- **Formik**: Simplified form handling.
- **Yup**: Form validation.
- **React Toastify & React Hot Toast**: User-friendly notifications.
- **Swiper**: Interactive product carousels.
- **React Helmet**: Manage document head for SEO.

### Design
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Font Awesome**: Icons for UI enhancement.
- **Fontsource**: Custom fonts for typography.

### Backend & Utilities
- **Axios**: API requests and data handling.
- **JWT Decode**: Authentication token handling.

### Development Tools
- **Vite**: Fast build tool and development server.
- **ESLint**: Code quality and linting.
- **PostCSS**: CSS transformations.

---

## Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/elref7i/E-commerce.git
   cd E-commerce
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## Project Structure
```
E-commerce/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application pages
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Helper functions
│   └── assets/           # Static files (images, fonts)
├── public/               # Public assets
├── package.json          # Project metadata and dependencies
└── tailwind.config.js    # Tailwind CSS configuration
```

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For any inquiries or feedback, please reach out to [elref7i](https://github.com/elref7i).
>>>>>>> 68ee2dddb0e88b68c9087eb28b885edf60628efd

