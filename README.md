# ReviewHub

A professional personal portfolio and review platform showcasing technical projects, built with React and Vite.

## 🚀 Features

- **Project Showcase**: Filter and view detailed information about various technical projects.
- **Dynamic Routing**: Smooth navigation using React Router.
- **Interactive UI**: Engaging user interface with particle backgrounds and modal views.
- **Contact Form**: Functional contact form powered by EmailJS.
- **Newsletter Subscription**: Styled newsletter section for user engagement.

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite
- **Styling**: Vanilla CSS (Modern CSS with custom properties)
- **Email Service**: EmailJS
- **Routing**: React Router DOM

## 📦 Installation & Setup

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ramjianonmyous/reviewhub.git
   cd reviewhub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## 🌐 Deployment

This project is configured for easy deployment on **Vercel**.

1. Connect your GitHub repository to Vercel.
2. Add the environment variables (`VITE_EMAILJS_...`) in the Vercel project settings.
3. Vercel will automatically build and deploy your site!
