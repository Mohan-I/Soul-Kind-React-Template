# Soul Kind React Template


A modern, creative React template for creative studios and storytelling platforms. This template combines artistic design with web3 technology, featuring a dark theme aesthetic, smooth animations, and community-focused components.

## ✨ Features

### 🎨 **Design System**
- **Dark Theme**: Sophisticated dark interface with gradient accents
- **Custom Color Palette**: Primary (#4a3aff), Secondary (#ff6b8b), Accent (#00d4aa)
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: Fade-ins, hover effects, and scroll-triggered animations

### 🚀 **Core Components**
- **Hero Section**: Eye-catching landing with tagline and call-to-action
- **Universe Section**: Showcase creative worlds and storytelling
- **Staysoul Cards**: Feature cards for studio, fund, and community
- **Mission Statement**: Highlight core values with web3 integration
- **FAQ Accordion**: Interactive FAQ with custom styling
- **Creative Blog**: Modern blog layout with featured posts
- **Footer**: Comprehensive footer with newsletter and social links

### ⚡ **Advanced Features**
- **Custom Scrollbar**: Themed scrollbar matching the design system
- **Cursor Chaser**: Interactive cursor follower component
- **Smooth Scrolling**: Navigation with scroll animations
- **Web3 Ready**: Built with decentralization and web3 integration in mind
- **Bootstrap Integration**: React Bootstrap components with custom styling

## 📁 Project Structure

```
soul-kind-react/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── banner.png
│   ├── components/
│   │   ├── common/
│   │   │   ├── CursorChaser.jsx
│   │   │   └── footer.jsx
│   │   └── frequent/
│   │       ├── faqs.jsx
│   │       └── blog.jsx
│   ├── styles/
│   │   ├── SoulKind.css
│   │   └── scrollbar.css
│   ├── utils/
│   │   └── SoulKindAnimations.js
│   ├── App.js
│   ├── SoulKind.jsx
│   └── index.js
├── package.json
└── README.md
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/soul-kind-react.git
   cd soul-kind-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install react-bootstrap bootstrap @fortawesome/fontawesome-free
   # or
   yarn add react-bootstrap bootstrap @fortawesome/fontawesome-free
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🎯 Usage

### Basic Setup
1. Replace placeholder images in `/src/assets/img/`
2. Update content in `SoulKind.jsx` with your brand information
3. Customize colors in `:root` variables in `SoulKind.css`
4. Add your own FAQ questions and blog posts

### Adding Custom Content
```jsx
// Update hero section
<h1>Your Studio Name is a creative force</h1>
<p className="hero-text">
  Your custom tagline here. Developing relatable characters and epic stories...
</p>
```

### Customizing Colors
Edit the CSS variables in `SoulKind.css`:
```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  --accent: #your-color;
  --dark: #your-color;
  --light: #your-color;
}
```

## 🔧 Custom Components

### Cursor Chaser Component
Add the cursor chaser to your main component:
```jsx
import CursorChaser from './components/common/CursorChaser';

function SoulKind() {
  return (
    <>
      <CursorChaser />
      {/* Rest of your content */}
    </>
  );
}
```

### Custom Scrollbar
Import the scrollbar styles in your main CSS:
```css
@import './styles/scrollbar.css';
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 992px  
- **Desktop**: > 992px

## 🎨 Styling Guidelines

### Typography
- **Headers**: Gradient text with accent colors
- **Body**: #b0b0c0 for readable contrast on dark background
- **Links**: Accent color with hover animations

### Components
- **Cards**: Glass-morphism effect with hover animations
- **Buttons**: Gradient backgrounds with hover scaling
- **Forms**: Transparent backgrounds with accent borders

### Animations
- **Fade In**: Staggered entry animations
- **Hover Effects**: Scale, translate, and shadow changes
- **Scroll Effects**: Reveal animations on scroll

## 🌐 Web3 Integration

The template includes web3-ready components:
- Web3 badge component
- Decentralization-focused copy
- Community-driven storytelling elements
- NFT and DAO-friendly structure

## 📝 Content Management

### FAQ Content
Edit the FAQ array in `faqs.jsx`:
```jsx
const faqItems = [
  {
    question: "Your question here",
    answer: "Your answer here"
  }
];
```

### Blog Posts
Update the blog data in `blog.jsx`:
```jsx
const featuredPosts = [
  {
    title: "Post Title",
    excerpt: "Post excerpt",
    category: "Category",
    date: "Date"
  }
];
```

## 🔍 SEO Optimization

- Meta tags in `index.html`
- Semantic HTML structure
- Alt text for images
- Open Graph meta tags included
- Schema.org markup ready

## 🚀 Deployment

### Netlify
1. Push to GitHub
2. Connect repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Vercel
1. Import Git repository
2. Framework preset: Create React App
3. Automatic deployment on push

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

## 📟 How To Run

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

1. **Styles not loading**: Ensure CSS files are imported correctly
2. **Bootstrap not working**: Check Bootstrap CSS import in `index.js`
3. **FontAwesome icons missing**: Verify FontAwesome CSS is included
4. **Animations not working**: Check animation utility import

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Support

For support, email support@soulkind.com or join our Discord community.

---

**Built with ❤️ by the Soul Kind Creative Studio**

---
