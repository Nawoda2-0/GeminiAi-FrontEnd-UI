# Gemini AI Clone

![Gemini Clone Banner](https://github.com/Nawoda2-0/GeminiAi-FrontEnd-UI/blob/c0d6f2bc9511837d5eb5d9853a2ce4bd8fe164d9/gemini-clone-banner.svg)

A beautiful and responsive Gemini AI chat interface built with React and Vite. This project replicates the modern, clean design of Google's Gemini AI interface, featuring an expandable sidebar, chat history, and a user-friendly chat interface.

## ✨ Features

- **Interactive Sidebar** - Expandable/collapsible navigation with smooth transitions
- **Chat History** - View your recent conversations
- **Modern UI** - Clean, Google-inspired design aesthetics
- **Responsive Layout** - Works across different device sizes
- **Suggestion Cards** - Quick prompt suggestions to get started
- **React + Vite** - Built with modern web technologies for optimal performance

## 📸 Screenshots

![Gemini Clone Interface](https://via.placeholder.com/800x450?text=Gemini+Interface+Screenshot)

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- npm (v6.0.0 or higher) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/gemini-ai-clone.git
   ```

2. Navigate to the project directory
   ```bash
   cd gemini-ai-clone
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 🛠️ Project Structure

```
gemini-ai-clone/
├── src/
│   ├── assets/
│   │   └── assets.js
│   ├── components/
│   │   ├── main/
│   │   │   ├── Main.jsx
│   │   │   └── Main.css
│   │   └── sidebar/
│   │       ├── Sidebar.jsx
│   │       └── Sidebar.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── favicon.ico
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Changing Colors

The color scheme can be customized by modifying the CSS files:
- For sidebar styling: `src/components/sidebar/Sidebar.css`
- For main content styling: `src/components/main/Main.css`

### Adding Icons

This project requires various icons which should be imported in `src/assets/assets.js`. Make sure to add the following icons to your assets folder:
- menu_icon
- plus_icon
- message_icon
- question_icon
- history_icon
- setting_icon
- user_icon
- compass_icon
- bulb_icon
- code_icon
- gallery_icon
- mic_icon
- send_icon

## 🔄 Connect to an AI Backend

This project currently implements only the UI. To connect it to an actual AI model:

1. Create an API service in a new file `src/services/api.js`
2. Implement fetch requests to your AI backend
3. Update the Main component to handle sending messages and displaying responses

## 📝 License

@nawodasilva2001@gmail.com

## 🙏 Acknowledgements

- Google's Gemini AI for design inspiration
- React and Vite communities for the amazing tools

## 📧 Contact

If you have any questions or feedback, please reach out to [@nawodasilva2001@gmail.co](mailto:@nawodasilva2001@gmail.co)

---

Made with ❤️ by  Suneth nawoda
