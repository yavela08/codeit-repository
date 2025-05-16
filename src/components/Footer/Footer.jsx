"use client"
export default function Footer() {
    return (
      <footer style={{ padding: '1rem', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    );
  }