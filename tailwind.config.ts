import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        neutral: {
          DEFAULT: 'hsl(var(--neutral))',
          foreground: 'hsl(var(--neutral-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Custom colors matching the client brief
        'mountain-green': '#C9E4CA',
        'cambridge-blue': '#87BB82',
        'blue-mell': '#55828B',
        'dark-slate': '#3B6064',
        'charcoal': '#364958',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
      },
      backgroundImage: {
        'mountain-gradient': 'linear-gradient(to bottom, #C9E4CA, #87BB82)',
        'sky-gradient': 'linear-gradient(to bottom, #55828B, #3B6064)',
        'dark-gradient': 'linear-gradient(to bottom, #3B6064, #364958)',
      },
      typography: {
        DEFAULT: {
          css: {
            // Base heading styles that work for all headings
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              color: '#364958',
              lineHeight: '1.2',
              '&:first-child': {
                marginTop: '0',
              },
            },
            // Responsive heading sizes
            h1: {
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', // 30px to 40px
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            'h1.wp-block-heading': {
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', // 24px to 32px
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            'h2.wp-block-heading': {
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', // 20px to 28px
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            'h3.wp-block-heading': {
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            h4: {
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', // 18px to 24px
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            'h4.wp-block-heading': {
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h5: {
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', // 16px to 20px
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            'h5.wp-block-heading': {
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h6: {
              fontSize: 'clamp(0.875rem, 1.25vw, 1.125rem)', // 14px to 18px
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            'h6.wp-block-heading': {
              fontSize: 'clamp(0.875rem, 1.25vw, 1.125rem)',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            // Paragraph styling
            p: {
              color: '#3B6064',
              lineHeight: '1.75',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            },
            // Link styling
            a: {
              color: '#55828B',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(85, 130, 139, 0.3)',
              textUnderlineOffset: '3px',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: '#3B6064',
                textDecorationColor: 'rgba(59, 96, 100, 0.6)',
              },
            },
            // Strong text
            strong: {
              fontWeight: '700',
              color: '#364958',
            },
            // Lists - both generic and WordPress specific
            'ul, ol': {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.75rem',
            },
            'ul.wp-block-list, ol.wp-block-list': {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.75rem',
            },
            ul: {
              listStyleType: 'disc',
            },
            'ul.wp-block-list': {
              listStyleType: 'disc',
            },
            ol: {
              listStyleType: 'decimal',
            },
            'ol.wp-block-list': {
              listStyleType: 'decimal',
            },
            // List items
            'li': {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
              color: '#3B6064',
              lineHeight: '1.7',
            },
            // Nested lists
            'li > ul, li > ol': {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
              paddingLeft: '1.5rem',
            },
            'li > ul.wp-block-list, li > ol.wp-block-list': {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
              paddingLeft: '1.5rem',
            },
            // Horizontal rules
            hr: {
              marginTop: '3rem',
              marginBottom: '3rem',
              borderColor: 'rgba(54, 73, 88, 0.15)',
              borderTopWidth: '1px',
            },
            // Code blocks and inline code
            code: {
              color: '#364958',
              backgroundColor: 'rgba(201, 228, 202, 0.3)',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            pre: {
              backgroundColor: '#364958',
              color: '#C9E4CA',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              overflow: 'auto',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            // Block quotes
            blockquote: {
              borderLeftColor: '#55828B',
              borderLeftWidth: '4px',
              paddingLeft: '1.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
              fontStyle: 'italic',
              color: '#364958',
              backgroundColor: 'rgba(201, 228, 202, 0.1)',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              paddingRight: '1rem',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            // Tables
            table: {
              marginTop: '2rem',
              marginBottom: '2rem',
              borderCollapse: 'collapse',
              width: '100%',
            },
            'th, td': {
              border: '1px solid rgba(54, 73, 88, 0.2)',
              padding: '0.75rem',
              textAlign: 'left',
            },
            th: {
              backgroundColor: 'rgba(201, 228, 202, 0.3)',
              fontWeight: '700',
              color: '#364958',
            },
            // Images
            img: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              borderRadius: '0.75rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;