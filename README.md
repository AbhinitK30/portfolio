# Abhinit Khambekar - Personal Portfolio

A dynamic, interactive personal portfolio website showcasing my skills, projects, and educational background. This project leverages modern web technologies to create a smooth, 3D-enhanced user experience.

### 🚀 Tech Stack
- **Frontend Framework**: React.js with Vite
- **3D & Animations**: Three.js, React Three Fiber, GSAP (ScrollSmoother, SplitText)
- **Styling**: Custom CSS and responsive design principles 
- **Icons**: React Icons

### 🌟 Features
- Fully responsive design with a custom cursor.
- Interactive 3D "Tech Stack" physics playground using `@react-three/rapier`.
- Dynamic project carousel linking to live, deployed applications.
- Smooth scroll and advanced text reveal animations using GSAP.

### 📂 Project Structure
- `src/components/`: Reusable React components (Navbar, Hero, Work, etc.).
- `src/assets/`: Static assets including images and the resume PDF.
- `src/App.tsx`: Main application component managing routing and layout.
- `src/main.tsx`: Entry point for the React application.
- `vite.config.ts`: Vite build configuration.

### 🛠️ Setup & Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

### 📦 Deployment
This project is configured for deployment using Vercel.
- Ensure `vercel.json` is present in the root directory.
- Run `npm run build` to create a production build.
- Deploy the `dist` folder to your hosting provider.

### 📄 License
This project is licensed under the MIT License.
