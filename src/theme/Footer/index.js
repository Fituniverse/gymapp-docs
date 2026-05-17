import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <footer
      style={{
        background: 'var(--ifm-footer-background-color)',
        padding: '2rem',
        borderTop: '1px solid var(--ifm-toc-border-color)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {/* Left — logo + copyright */}
        <div>
          <img
            src={
              colorMode === 'dark'
                ? '/Gym-App/images/logo-white.png'
                : '/Gym-App/images/logo.png'
            }
            alt="GymApp"
            height={40}
          />
          <p
            style={{
              marginTop: '0.5rem',
              color: 'var(--ifm-font-color-base)',
              fontSize: '0.85rem',
            }}
          >
            © {new Date().getFullYear()} GymApp. Tous droits réservés.
          </p>
        </div>

        {/* Right — social icons */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="https://www.facebook.com/gymxxapp" title="Facebook">
            <iconify-icon
              icon="icomoon-free:facebook"
              width="24"
              style={{ color: 'var(--ifm-font-color-base)' }}
            ></iconify-icon>
          </Link>
          <Link href="https://www.instagram.com/gymxxapp" title="Instagram">
            <iconify-icon
              icon="mdi:instagram"
              width="24"
              style={{ color: 'var(--ifm-font-color-base)' }}
            ></iconify-icon>
          </Link>
          <Link href="https://www.tiktok.com/@gymxapp" title="TikTok">
            <iconify-icon
              icon="ic:sharp-tiktok"
              width="24"
              style={{ color: 'var(--ifm-font-color-base)' }}
            ></iconify-icon>
          </Link>
          <Link href="https://www.youtube.com/@gymxapp" title="YouTube">
            <iconify-icon
              icon="mdi:youtube"
              width="24"
              style={{ color: 'var(--ifm-font-color-base)' }}
            ></iconify-icon>
          </Link>
        </div>
      </div>
    </footer>
  );
}
