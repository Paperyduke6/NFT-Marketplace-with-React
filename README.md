# Project README

## Setup and Run Instructions

### Prerequisites

Ensure the following are installed on your system:

1. **Node.js** (version 16 or later recommended)
2. **npm** (comes with Node.js) or **yarn**
3. **TypeScript** (for working with `.tsx` files)

### Steps to Run the Application Locally

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   Run the following command in the project directory:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**
   Run the following command:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the Application**
   Open your web browser and go to:

   ```
   http://localhost:5173
   ```

## Approach to Solving the Assessment

### Architecture

1. **Component-Based Design**:

   - The project is modular, with each feature implemented in its respective component (e.g., `Wallet`, `Marketplace`).
   - State management is handled using React Context (`WalletContext`) to enable cross-component communication.

2. **Dynamic Updates**:

   - Implemented the `Wallet` component to dynamically update and display the latest three images upon user interaction.
   - State changes propagate seamlessly using React's `useContext` and `useState` hooks.

3. **Routing**:

   - React Router is used for navigation between pages.
   - `Link` handles navigation dynamically based on user interactions.

### Assumptions

- **Dynamic Wallet Behavior**:
  - It was assumed that the `Wallet` component only needs to show the most recent three items and dynamically updates as items are added.
- **Local Storage or Database**:
  - No persistent storage is used. The state resets on a page refresh. Future iterations can integrate APIs or local storage for persistence.

### Challenges Addressed

1. **Cross-File Communication**:

   - A context provider (`WalletContext`) was created to share the state of the wallet across components.

2. **Dynamic State Updates**:

   - Button interactions in `Marketplace` dynamically update the wallet in `Wallet.tsx`.

3. **Responsive Design**:

   - Tailwind CSS is used to ensure components are responsive and visually consistent.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
