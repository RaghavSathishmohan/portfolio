# Raghav Sathishmohan — Portfolio

A premium, futuristic portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](public/preview.png)

## 🚀 Live Demo

**[View Live Site](https://raghavmohan.dev)** *(Update with your actual domain)*

## ✨ Features

- **Dark, cinematic aesthetic** with animated gradients and glassmorphism
- **Command palette navigation** (⌘K) for quick access to sections
- **Smooth animations** powered by Framer Motion
- **Fully responsive** design for all devices
- **Interactive elements** including magnetic buttons and scroll progress
- **SEO optimized** with proper meta tags
- **Performance focused** with Next.js static export

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Inter, JetBrains Mono

## 🏗️ Project Structure

```
app/
├── components/         # Reusable UI components
│   ├── AnimatedBackground.tsx
│   ├── CommandPalette.tsx
│   ├── GlowCard.tsx
│   ├── GradientText.tsx
│   ├── MagneticButton.tsx
│   ├── ScrollProgress.tsx
│   ├── SectionWrapper.tsx
│   └── TerminalText.tsx
├── sections/           # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── GitHubSection.tsx
│   └── Contact.tsx
├── lib/
│   ├── data.ts         # Portfolio content
│   └── utils.ts        # Utility functions
├── page.tsx            # Main page
├── layout.tsx          # Root layout
└── globals.css         # Global styles
components/
└── ui/                 # shadcn/ui components
public/
└── images/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raghavmohan/portfolio.git
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist` folder.

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Custom Domain (IONOS)

1. In your Vercel dashboard, go to Project Settings → Domains
2. Add your IONOS domain (e.g., `raghavmohan.dev`)
3. Follow the DNS configuration steps
4. In your IONOS dashboard, add the required DNS records (A records and CNAME)

## 🎨 Customization

Edit the content in `app/lib/data.ts` to personalize:
- Personal information
- Projects
- Experience
- Skills
- Education
- Contact links

## 📄 License

MIT License — feel free to use this template for your own portfolio!

## 📧 Contact

Feel free to reach out:
- Email: raghavsathishmohan@gmail.com
- LinkedIn: [linkedin.com/in/raghavsathishmohan](https://linkedin.com/in/raghavsathishmohan)
- GitHub: [@raghavmohan](https://github.com/raghavmohan)

---

Built with ❤️ by Raghav Sathishmohan
