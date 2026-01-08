# 🎵 Harmony Hub Frontend

> A modern React-based audio collaboration platform built with TypeScript and Redux Toolkit

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178c6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.2.7-764abc?style=flat&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## ✨ Features

- 🎛️ **Audio Studio Interface** - Intuitive audio workspace for music creation and editing
- 🔊 **Volume Control** - Real-time audio volume management
- 🏗️ **Redux-Powered State** - Predictable state management with Redux Toolkit
- 🎨 **Modern React 18** - Built with latest React features and hooks
- 📱 **Responsive Design** - Works seamlessly across devices
- ⚡ **Fast Development** - Hot reload and instant feedback during development
- 🧪 **Well Tested** - Comprehensive test coverage with Jest and React Testing Library
- 🎯 **Type Safe** - Full TypeScript support with strict mode enabled

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org/) | 18.3.1 | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | 4.9.5 | Type Safety |
| [Redux Toolkit](https://redux-toolkit.js.org/) | 2.2.7 | State Management |
| [React Router](https://reactrouter.com/) | 6.26.0 | Client-side Routing |
| [ESLint](https://eslint.org/) | 8.57.0 | Code Linting |
| [Prettier](https://prettier.io/) | 2.8.8 | Code Formatting |
| [Jest](https://jestjs.io/) | Latest | Testing Framework |
| [React Testing Library](https://testing-library.com/react) | 13.4.0 | Component Testing |

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 16.x ([Download](https://nodejs.org/))
- **npm** >= 7.x or **yarn** >= 1.22.x

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/blairmichaelg/harmony-hub-frontend.git
   cd harmony-hub-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the app running.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).  
The page will reload when you make changes, and lint errors will appear in the console.

#### `npm test`

Launches the test runner in interactive watch mode.  
See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.  
It optimizes the build for best performance - the build is minified and filenames include hashes.

#### `npm run lint`

Runs ESLint to check for code quality issues.

#### `npm run lint:fix`

Automatically fixes linting issues where possible.

#### `npm run format`

Formats code using Prettier according to the project's style guide.

## 📁 Project Structure

```
harmony-hub-frontend/
├── public/                 # Static files
│   ├── index.html         # HTML template
│   ├── manifest.json      # PWA manifest
│   └── ...
├── src/
│   ├── pages/             # Page components
│   │   └── Studio.tsx     # Audio studio page
│   ├── store/             # Redux store configuration
│   │   ├── slices/        # Redux slices
│   │   │   └── audioSlice.ts
│   │   └── store.ts       # Store setup
│   ├── App.tsx            # Main App component
│   ├── index.tsx          # Application entry point
│   ├── App.css            # App styles
│   └── index.css          # Global styles
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code:
- Follows the existing code style (enforced by ESLint and Prettier)
- Includes appropriate tests
- Has clear commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- State management powered by [Redux Toolkit](https://redux-toolkit.js.org/)
- UI built with [React](https://reactjs.org/)

## 📮 Contact

For questions or feedback, please [open an issue](https://github.com/blairmichaelg/harmony-hub-frontend/issues).

---

<div align="center">
Made with ❤️ by the Harmony Hub team
</div>
