# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode design, and a fully responsive layout.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile-first approach)
- 🎨 Dark mode with professional color scheme
- 🚀 Smooth scrolling navigation
- 💼 Project showcase with interactive cards
- 🛠️ Skills section with visual progress indicators
- 📧 Contact form with validation
- 🎯 Active section highlighting in navigation

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Name is already set to "Haridev M"
   - Update the title/role if needed
   - Modify the tagline

2. **About Section** (`src/components/About.jsx`):
   - Update the bio text
   - **Add your profile photo**: Place a file named `profile-photo.jpg` in the `public` folder
     - Supported formats: JPG, PNG, WebP
     - Recommended size: 800x800px (square works best)
     - If no photo is found, it will show initials "HM" as fallback
   - Modify the skills list

3. **Projects Section** (`src/components/Projects.jsx`):
   - Update project details in the `projects` array
   - Add/remove projects as needed
   - Update project links

4. **Skills Section** (`src/components/Skills.jsx`):
   - Modify skill categories and proficiency levels
   - Add/remove skills

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address
   - Update location
   - Update social media links

6. **Page Title** (`index.html`):
   - Change the title tag

### Colors

The color scheme can be customized in `tailwind.config.js` under the `theme.extend.colors.primary` section.

### Animations

Animation timings and effects can be adjusted in `tailwind.config.js` and within component files using Tailwind's animation utilities.

## Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Form Submission

Currently, the contact form logs to the console. To integrate with a backend service:

1. Update the `handleSubmit` function in `src/components/Contact.jsx`
2. Replace the setTimeout simulation with an actual API call
3. Add error handling for failed submissions

Example integration with a service like Formspree or EmailJS:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  if (!validateForm()) return
  
  setIsSubmitting(true)
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    // Handle response
  } catch (error) {
    // Handle error
  } finally {
    setIsSubmitting(false)
  }
}
```

## License

This project is open source and available for personal use.

## Support

For issues or questions, please open an issue on the repository.

