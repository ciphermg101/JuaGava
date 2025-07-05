# JuaGava - Kenyan Civic Education Platform

A comprehensive civic education platform designed specifically for Kenya, empowering citizens with knowledge about government structure, democratic processes, and civic participation.

## 🌟 Key Features

### 🇰🇪 Kenyan Government Focus
- **Three-Tier Government Structure**: National, County, and Local administration
- **Constitutional Rights Education**: Bill of Rights and fundamental freedoms
- **Electoral Process Training**: IEBC processes, voter registration, and election cycles
- **Devolution Understanding**: County vs national responsibilities
- **Public Participation**: How to engage with government decision-making

### 🎨 Enhanced Design System
- **Kenyan Flag Colors**: Green (#009543), Red (#CE1126), Black (#000000), White (#FFFFFF), Gold (#F4C430)
- **Dark/Light Mode**: Sophisticated theme toggle with system preference detection
- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 768px, 1024px, 1280px
- **Professional Typography**: Inter (sans-serif), Poppins (display), Playfair Display (serif)
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

### 🔐 Advanced Authentication
- **Real-time Validation**: Email format, password strength, required fields
- **Password Strength Indicator**: Visual feedback with color-coded strength levels
- **Enhanced Security**: Rate limiting, clear requirements, accessibility compliance
- **Bilingual Support**: English and Swahili error messages

### 📱 Mobile-First Experience
- **Touch-Friendly**: Minimum 44px tap targets
- **Optimized Forms**: Mobile keyboard and input type optimization
- **Collapsible Navigation**: Smooth hamburger menu with animations
- **Responsive Grid**: Adaptive layouts that scale gracefully

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Modern browser with ES6+ support

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd juagava-civic-platform
   ```

2. **Install dependencies**
   ```bash
   cd client
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Architecture

### Frontend Stack
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom design tokens
- **Framer Motion** for animations
- **React Router** for navigation
- **Zustand** for state management
- **React Hook Form** with Zod validation
- **Supabase** for backend services

### Key Components

#### Enhanced UI Components
- **ThemeToggle**: Sophisticated dark/light mode with smooth animations
- **Input**: Advanced form inputs with validation, icons, and password strength
- **Card**: Multiple variants (default, kenya, glass, elevated, outlined)
- **Button**: Kenyan-themed button styles with hover effects
- **Modal**: Accessible modal with backdrop blur and animations

#### Layout Components
- **Header**: Responsive navigation with theme toggle and user menu
- **Footer**: Comprehensive footer with Kenyan government links and newsletter
- **Layout**: Main layout wrapper with sidebar and content area

#### Specialized Cards
- **StatCard**: For displaying metrics and statistics
- **FeatureCard**: For showcasing features with icons and descriptions
- **TestimonialCard**: For user testimonials with ratings

### State Management
- **AuthStore**: User authentication and profile management
- **ContentStore**: Educational content and user progress tracking
- **ThemeStore**: Dark/light mode persistence and system preference detection

## 🎯 Content Areas

### National Government
- President and Deputy President roles
- Cabinet structure and functions
- Parliament (National Assembly & Senate)
- Constitutional offices and commissions

### County Government
- Governors and county executives
- County assemblies and ward representatives
- Devolved functions and responsibilities
- County budget processes

### Local Administration
- Chiefs and assistant chiefs
- Village administrators
- Community development committees
- Grassroots governance

### Civic Processes
- Electoral system and IEBC
- Voter registration and participation
- Public participation mechanisms
- Government service access (Huduma Centers)

## 🎨 Design System

### Color Palette
```css
/* Kenyan Flag Colors */
--kenya-green: #009543
--kenya-red: #CE1126
--kenya-black: #000000
--kenya-white: #FFFFFF
--kenya-gold: #F4C430

/* Semantic Colors */
--primary: Blue gradient for primary actions
--success: Green for positive states
--warning: Orange for caution states
--error: Red for error states
```

### Typography Scale
```css
/* Responsive Text Sizes */
.text-responsive-xl: 2xl → 3xl → 4xl → 5xl
.text-responsive-lg: xl → 2xl → 3xl
.text-responsive-md: lg → xl → 2xl
```

### Animation Classes
```css
/* Built-in Animations */
.animate-fade-in: Fade in with 0.6s duration
.animate-slide-up: Slide up from bottom
.animate-scale-in: Scale in from 0.9
.animate-float: Gentle floating animation
.animate-bounce-gentle: Subtle bounce effect
```

## 📱 Responsive Breakpoints

| Breakpoint | Class Prefix | Description |
|------------|--------------|-------------|
| 640px | `sm:` | Small devices |
| 768px | `md:` | Medium devices |
| 1024px | `lg:` | Large devices |
| 1280px | `xl:` | Extra large devices |

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliance**: High contrast ratios and proper focus states
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Blind Friendly**: Multiple ways to convey information
- **Reduced Motion**: Respects user's motion preferences

## 🔧 Development

### Available Scripts
```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
```

### Code Quality
- **TypeScript**: Strict type checking
- **ESLint**: Code linting with React and TypeScript rules
- **Prettier**: Code formatting (configured via ESLint)
- **Husky**: Git hooks for pre-commit linting

### Performance Optimizations
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and heavy components
- **Bundle Optimization**: Tree shaking and minification
- **Service Worker**: Offline functionality (planned)

## 🌍 Localization

### Current Support
- **Primary Language**: English
- **Secondary Language**: Swahili (key terms and concepts)
- **Cultural Sensitivity**: Local context for all examples

### Future Enhancements
- Full Swahili translation
- Local language support for major ethnic groups
- Regional content customization

## 📊 Analytics & Monitoring

### User Engagement Metrics
- Content completion rates
- Quiz performance tracking
- Learning streak monitoring
- Feature usage analytics

### Technical Performance
- Page load times (target: <3 seconds)
- Core Web Vitals optimization
- Error tracking and monitoring
- User experience metrics

## 🔒 Security

### Authentication Security
- Secure password requirements
- Rate limiting for failed attempts
- Email verification
- Session management

### Data Protection
- GDPR compliance
- Data encryption in transit and at rest
- Privacy policy and terms of service
- User data control and deletion

## 🚀 Deployment

### Production Build
```bash
pnpm build
```

### Environment Variables
```env
# Required
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional
VITE_APP_ENV=production
VITE_ANALYTICS_ID=your_analytics_id
```

### Deployment Platforms
- **Vercel**: Recommended for React apps
- **Netlify**: Alternative with similar features
- **AWS Amplify**: For AWS ecosystem integration

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use functional components with hooks
- Write meaningful commit messages
- Include tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Kenyan Government**: For providing accurate information about government structure
- **Civic Education Community**: For insights into effective civic learning
- **Open Source Community**: For the amazing tools and libraries used
- **Design Community**: For inspiration and best practices

## 📞 Support

- **Email**: contact@juagava.com
- **Documentation**: [docs.juagava.com](https://docs.juagava.com)
- **Issues**: [GitHub Issues](https://github.com/juagava/issues)

---

**Made with ❤️ for Kenya**

Empowering Kenyans with civic education and democratic participation. 