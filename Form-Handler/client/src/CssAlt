import React from 'react';
import ProductLanding from './ProductLanding';

function App() {
  return (
    <div style={styles.app}>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <h2 style={styles.logo}>TechGear</h2>
          <ul style={styles.navLinks}>
            <li style={styles.navItem}>Home</li>
            <li style={styles.navItem}>Products</li>
            <li style={styles.navItem}>About</li>
            <li style={styles.navItem}>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to TechGear</h1>
        <p style={styles.heroText}>
          Discover our latest line of professional products
        </p>
      </section>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <ProductLanding />
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 TechGear. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif'
  },
  nav: {
    backgroundColor: '#2980b9',
    padding: '15px 0',
    color: 'white'
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px'
  },
  logo: {
    margin: 0,
    fontSize: '24px'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    margin: 0,
    padding: 0
  },
  navItem: {
    cursor: 'pointer',
    fontSize: '16px',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  hero: {
    backgroundColor: '#3498db',
    color: 'white',
    textAlign: 'center',
    padding: '60px 20px',
    marginBottom: '40px'
  },
  heroTitle: {
    fontSize: '36px',
    marginBottom: '10px'
  },
  heroText: {
    fontSize: '18px',
    opacity: 0.9
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px 40px'
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px'
  }
};

export default App;
