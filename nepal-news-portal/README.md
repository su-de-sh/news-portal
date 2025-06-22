# Nepal News Portal

A modern, responsive news portal website built with Next.js, Tailwind CSS, and PostgreSQL. Designed specifically to showcase news from Nepal with a clean, user-friendly interface.

## 🚀 Features

### Core Features
- **Responsive Design**: Modern UI that works perfectly on desktop, tablet, and mobile devices
- **Category-based News**: Organized content across Politics, Sports, Business, Technology, Entertainment, and Health
- **Featured Articles**: Highlight important news with large hero sections
- **Search Functionality**: Find news articles quickly and efficiently
- **User Authentication**: Login and registration system
- **Comments System**: Users can comment on articles
- **Admin Panel**: Content management for editors and administrators

### Technical Features
- **Server-side Rendering**: Built with Next.js 14 for optimal performance
- **Type Safety**: Full TypeScript implementation
- **Database Integration**: PostgreSQL with Prisma ORM
- **Modern Styling**: Tailwind CSS v3.4 with custom Nepal-themed colors
- **Component Library**: Reusable UI components with variants
- **Image Optimization**: Next.js Image component with remote patterns
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🎨 Design System

### Color Palette
- **Nepal Red**: `#DC143C` - Primary brand color inspired by Nepal's flag
- **Nepal Blue**: `#003893` - Secondary brand color from Nepal's flag  
- **Accent Colors**: Blue and orange gradients for highlights
- **Neutral Colors**: Comprehensive gray scale for content

### Typography
- **Display Font**: Poppins for headings and important text
- **Body Font**: Inter for readable content
- **Nepali Font**: Noto Sans Devanagari for Nepali text support

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS v3.4, Tailwind Typography
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Icons**: Lucide React
- **Image Handling**: Next.js Image optimization
- **Development**: ESLint, TypeScript, Hot reloading

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nepal-news-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your database URL and other configuration:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/nepal_news_portal
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push the schema to your database
   npx prisma db push
   
   # (Optional) Seed the database with sample data
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## Directory Structure

- `src/app`: Contains the main application files, including pages and API routes.
- `src/components`: Contains reusable UI components.
- `src/lib`: Contains utility functions and database configuration.
- `prisma`: Contains the database schema and migration files.
- `public`: Contains static assets.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.