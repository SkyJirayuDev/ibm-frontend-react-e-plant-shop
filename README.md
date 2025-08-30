# 🌱 Paradise Nursery - E-Plant Shop

A modern, responsive React e-commerce application for plant shopping built with Redux Toolkit for state management.

## 🚀 Live Demo

**🌐 [View Live Application](https://skyjirayudev.github.io/ibm-frontend-react-e-plant-shop/)**

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse plants by categories (Air Purifying, Aromatic, Insect Repellent, Medicinal, Low Maintenance)
- **Add to Cart**: Easy one-click add to cart functionality
- **Shopping Cart**: Full cart management with quantity controls
- **Real-time Updates**: Live cart counter and total calculations

### 🎨 Modern Design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Smooth Animations**: Hover effects and transitions
- **Clean Typography**: Easy-to-read fonts and proper hierarchy

### ⚡ Technical Features
- **Redux State Management**: Centralized state with Redux Toolkit
- **React Hooks**: Modern React patterns with useState and useEffect
- **Component Architecture**: Reusable and maintainable components
- **CSS Grid & Flexbox**: Modern layout techniques
- **Mobile-First Design**: Optimized for all screen sizes

## 🛠️ Technologies Used

- **Frontend**: React 18, Redux Toolkit, React-Redux
- **Styling**: CSS3, CSS Grid, Flexbox
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **State Management**: Redux Toolkit with createSlice
- **Package Manager**: npm

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px (3-4 columns)
- **Tablet**: 768px - 1200px (2-3 columns)
- **Mobile**: 480px - 768px (1-2 columns)
- **Small Mobile**: < 480px (1 column)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ProductList.jsx     # Main product listing component
│   ├── CartItem.jsx        # Shopping cart component
│   ├── AboutUs.jsx         # About us section
│   └── App.jsx            # Main app component
├── redux/
│   ├── CartSlice.jsx      # Redux slice for cart management
│   └── store.js           # Redux store configuration
├── styles/
│   ├── ProductList.css    # Product listing styles
│   ├── CartItem.css       # Cart component styles
│   ├── AboutUs.css        # About us styles
│   └── App.css           # Main app styles
└── main.jsx              # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SkyJirayuDev/ibm-frontend-react-e-plant-shop.git
   cd ibm-frontend-react-e-plant-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🎯 Key Components

### ProductList Component
- Displays plant categories and products
- Handles add to cart functionality
- Manages cart state with Redux
- Responsive grid layout

### CartItem Component
- Shows cart items with images and details
- Quantity increment/decrement controls
- Remove items functionality
- Calculate totals and subtotals

### Redux Store
- **CartSlice**: Manages cart state (add, remove, update quantity)
- **Actions**: addItem, removeItem, updateQuantity
- **Selectors**: Access cart items and totals

## 🎨 Design Features

### Landing Page
- Hero section with glass morphism effect
- Background image with overlay
- Call-to-action button
- About us information

### Product Cards
- Clean card design with shadows
- Product images, names, descriptions, and prices
- Add to cart buttons with state management
- Hover effects and animations

### Shopping Cart
- Modern card-based layout
- Quantity controls with +/- buttons
- Real-time total calculations
- Continue shopping and checkout buttons

## 📱 Mobile Optimization

- **Touch-friendly buttons**: Properly sized for mobile interaction
- **Responsive images**: Optimized for different screen sizes
- **Collapsible navigation**: Mobile-friendly menu
- **Optimized spacing**: Proper margins and padding for mobile

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🌟 Future Enhancements

- [ ] User authentication
- [ ] Payment integration
- [ ] Product search and filtering
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Order history
- [ ] Email notifications

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**SkyJirayu Dev**
- GitHub: [@SkyJirayuDev](https://github.com/SkyJirayuDev)

## 🙏 Acknowledgments

- Plant images from Pixabay and Unsplash
- Icons from various open-source libraries
- Inspiration from modern e-commerce designs

---

⭐ **Star this repository if you found it helpful!**