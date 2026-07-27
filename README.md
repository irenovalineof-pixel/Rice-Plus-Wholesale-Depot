# Rice Plus Wholesale Depot

A modern Next.js TypeScript application for Rice Plus Wholesale Depot, built with Tailwind CSS and Supabase backend.

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Router**: App Router
- **Authentication**: Ready for Supabase Auth integration

## 📁 Project Structure

```
Rice-Plus-Wholesale-Depot/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── products/
│   │   └── page.tsx            # Products page
│   ├── login/
│   │   └── page.tsx            # Login page
│   └── dashboard/
│       └── page.tsx            # Dashboard page
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── ProductCard.tsx         # Product card component
│   └── Footer.tsx              # Footer component
├── lib/
│   └── supabase/
│       ├── client.ts           # Client-side Supabase
│       └── server.ts           # Server-side Supabase
├── public/
│   └── logo/                   # Logo assets
├── .env.example                # Environment variables template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── next.config.js              # Next.js configuration
└── README.md                   # This file
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm/yarn
- Supabase account ([Sign up free](https://supabase.com))

### 1. Clone the Repository
```bash
git clone https://github.com/irenovalineof-pixel/Rice-Plus-Wholesale-Depot.git
cd Rice-Plus-Wholesale-Depot
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables
Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

- **Home** (`/`) - Landing page with call-to-action
- **Products** (`/products`) - Browse available products
- **Login** (`/login`) - Authentication page (Supabase ready)
- **Dashboard** (`/dashboard`) - User dashboard (protected route)

## 🎨 Components

- **Navbar** - Navigation with links to main pages
- **Footer** - Footer with copyright info
- **ProductCard** - Reusable product display component

## 🔐 Authentication (Phase 1 Ready)

Authentication setup is prepared for Supabase. The login page is ready to be integrated with Supabase Auth.

## 📝 Development Notes

- TypeScript strict mode is enabled
- Path aliases configured (`@/*`)
- Tailwind CSS with custom colors (primary: yellow, secondary: gray)
- Mobile-responsive design
- SSR-ready Supabase client for server components

## 🚀 Next Phase

Future enhancements will include:
- Complete Supabase authentication integration
- User dashboard functionality
- Product catalog with database
- Shopping cart system
- Order management
- Admin panel

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is part of Rice Plus Wholesale Depot.

## 👨‍💻 Developer

Created with ❤️ by the Rice Plus Development Team