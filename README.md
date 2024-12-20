# Modern Developer Portfolio

A sleek, responsive, and animated portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and a beautiful UI to showcase your projects, achievements, and skills.

![Portfolio Preview](public/preview.png)

## ✨ Features

- 🎨 Modern UI design with smooth animations
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive for all screen sizes
- 🎯 Interactive project cards
- ⚡ Fast loading and optimized performance
- 📊 Animated skill bars
- 🎉 Achievement timeline
- 📝 Contact form
- 🔄 Smooth page transitions

## 🚀 Tech Stack

- React.js
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide Icons

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   └── FeaturedProjects.jsx
│   ├── about/
│   │   ├── Experience.jsx
│   │   └── Skills.jsx
│   ├── achievements/
│   │   └── AchievementTimeline.jsx
│   ├── projects/
│   │   ├── ProjectCard.jsx
│   │   └── ProjectModal.jsx
│   ├── shared/
│   │   ├── Button.jsx
│   │   ├── PageTransition.jsx
│   │   └── Section.jsx
│   └── contact/
│       └── ContactForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Achievements.jsx
│   └── Contact.jsx
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   └── useScrollReveal.jsx
├── styles/
│   └── globals.css
└── App.jsx
```

## 🎨 Customization

1. **Personal Information**
   - Update `src/components/home/Hero.jsx` with your name and bio
   - Modify social media links in the Hero component
   - Add your resume PDF to the public folder

2. **Projects**
   - Add your projects in `src/pages/Projects.jsx`
   - Update project images in the public/images folder

3. **Achievements**
   - Modify the achievements array in `src/pages/Achievements.jsx`
   - Customize achievement icons and categories

4. **Skills & Experience**
   - Update skills in `src/components/about/Skills.jsx`
   - Modify experience timeline in `src/components/about/Experience.jsx`

5. **Styling**
   - Customize colors in `tailwind.config.js`
   - Modify animations in components using Framer Motion
   - Adjust layout and spacing using Tailwind classes

## 📦 Building for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## 🚀 Deployment

The site can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository and deploy
- **Netlify**: Connect repository or drag and drop the build folder
- **GitHub Pages**: Deploy the build folder using gh-pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💐 Credits

- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---
⭐️ Star this repo if you find it helpful!