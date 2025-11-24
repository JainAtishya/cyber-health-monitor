# 🛡️ Cyber Health Monitor

A modern, futuristic cybersecurity dashboard built with React, React Router, and Tailwind CSS. Monitor your digital security with style!

![Cyber Health Monitor](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.16-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 🔐 Security Monitoring
- **Dashboard**: Real-time cyber health score with beautiful circular gauge
- **Password Checker**: Real-time password strength meter with security requirements
- **Breach Checker**: Check if your email has been compromised in data breaches
- **Device Security**: Monitor browser, OS, and connection security
- **Network Security**: Track network safety and connection type
- **Alerts**: Comprehensive alert system with severity-based filtering

### 🎨 Design
- Modern cybersecurity-themed UI with glassmorphism effects
- Gradient backgrounds and smooth transitions
- Responsive layout for all screen sizes
- Custom scrollbar with gradient styling
- Lucide React icons for beautiful iconography
- Animated loading states and page transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cyber-health-monitor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
cyber-health-monitor/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   ├── Sidebar.jsx          # Side navigation menu
│   │   ├── SummaryCard.jsx      # Dashboard summary cards
│   │   ├── ScoreGauge.jsx       # Circular health score gauge
│   │   ├── AlertCard.jsx        # Alert notification cards
│   │   └── Loader.jsx           # Animated loading component
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx       # Main layout with navbar & sidebar
│   │
│   ├── pages/
│   │   ├── Login.jsx            # Login/entry page
│   │   ├── Dashboard.jsx        # Main dashboard
│   │   ├── PasswordCheck.jsx    # Password strength checker
│   │   ├── BreachCheck.jsx      # Data breach checker
│   │   ├── DeviceSecurity.jsx   # Device security monitor
│   │   ├── NetworkSecurity.jsx  # Network safety monitor
│   │   └── Alerts.jsx           # Alerts management page
│   │
│   ├── data/
│   │   ├── alerts.js            # Mock alert data
│   │   ├── breachMock.js        # Mock breach database
│   │   └── scoreMock.js         # Mock security scores
│   │
│   ├── App.jsx                  # Main app with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & animations
│
├── public/                      # Static assets
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── package.json                # Dependencies & scripts
```

## 🛠️ Technologies

- **React 18.3.1** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

## 🎯 Routes

- `/` - Login page
- `/dashboard` - Main dashboard with cyber health score
- `/password-check` - Password strength checker
- `/breach-check` - Email breach checker
- `/device-security` - Device security information
- `/network-security` - Network safety monitor
- `/alerts` - Security alerts management

## 🎨 Color Palette

The application uses a cybersecurity-themed color palette:

- **Primary**: Cyan (#06b6d4) to Purple (#9333ea) gradients
- **Background**: Slate-950 (#020617)
- **Success**: Green-400 (#4ade80)
- **Warning**: Yellow-400 (#facc15)
- **Danger**: Red-400 (#f87171)

## 📝 Mock Data

The application includes mock data for demonstration:

- **Alerts**: 10 pre-configured security alerts with varying severity
- **Breach Database**: Sample breached emails for testing
- **Cyber Health Score**: Calculated from multiple security factors

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Features by Page

### Login Page
- Clean glass-morphic design
- Username and email input
- Saves user info to localStorage
- Animated gradient background effects

### Dashboard
- Circular cyber health score gauge
- 4 summary cards (Password, Device, Network, Breach)
- Recent alerts preview
- Gradient card designs with hover effects

### Password Check
- Real-time password strength meter
- Visual checklist for password requirements
- Color-coded strength indicator
- Show/hide password toggle

### Breach Check
- Email breach database lookup
- Animated loading state
- Detailed breach information
- Security recommendations

### Device Security
- Browser and OS detection
- HTTPS connection verification
- Device type identification
- Screen resolution info
- Security tips and recommendations

### Network Security
- Network type detection (4G, 3G, etc.)
- Connection speed information
- Safety score calculation
- Color-coded network status
- Network security best practices

### Alerts
- Filterable alert list (All, High, Medium, Low)
- Severity-based color coding
- Actionable alerts with buttons
- Clean card-based layout

## 🚀 Future Enhancements

- [ ] Connect to real breach API (HaveIBeenPwned)
- [ ] Implement actual password strength API
- [ ] Add authentication system
- [ ] Real-time network monitoring
- [ ] Export security reports
- [ ] Dark/Light mode toggle
- [ ] Email notifications for alerts
- [ ] Multi-language support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ for cybersecurity awareness

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
