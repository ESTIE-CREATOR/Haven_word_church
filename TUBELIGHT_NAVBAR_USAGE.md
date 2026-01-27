# Tubelight Navbar Component - Usage Guide

## ✅ Integration Complete

The tubelight navbar component has been successfully integrated into your project!

## 📁 Files Created

1. **`src/components/ui/tubelight-navbar.tsx`** - Main navbar component
2. **`src/components/ui/tubelight-navbar-demo.tsx`** - Demo component with example usage
3. **`src/components/TubelightHeader.tsx`** - Complete header implementation using the navbar

## 🎯 Key Adaptations Made

### From Next.js to React Router
- ✅ Removed `"use client"` directive (not needed in Vite)
- ✅ Changed `next/link` to `react-router-dom` `Link`
- ✅ Added `useLocation` hook to track active route automatically
- ✅ Updated styling for dark theme compatibility

### Dependencies
- ✅ `framer-motion` - Already installed (v12.27.0)
- ✅ `lucide-react` - Already installed (v0.462.0)
- ✅ All required dependencies are present

## 🚀 How to Use

### Option 1: Use the Complete Header Component

Replace your current Header in `src/pages/Index.tsx`:

```tsx
import TubelightHeader from "@/components/TubelightHeader"

// In your component:
<TubelightHeader />
```

### Option 2: Use Just the Navbar Component

```tsx
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, MessageSquare, MapPin, Info, Calendar, Phone } from 'lucide-react'

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'Messages', url: '/sermons', icon: MessageSquare },
  { name: 'About', url: '/about', icon: Info },
  // ... more items
]

<NavBar items={navItems} />
```

### Option 3: Use the Demo Component

```tsx
import { NavBarDemo } from "@/components/ui/tubelight-navbar-demo"

<NavBarDemo />
```

## 🎨 Features

- **Responsive Design**: Shows icons on mobile, text on desktop
- **Active State Detection**: Automatically highlights the current route
- **Smooth Animations**: Tubelight effect with framer-motion
- **Dark Theme Optimized**: Styled for dark backgrounds
- **Fixed Positioning**: Bottom on mobile, top on desktop

## 📱 Responsive Behavior

- **Mobile (< 768px)**: 
  - Navbar appears at the bottom
  - Shows icons only
  - Compact design

- **Desktop (≥ 768px)**:
  - Navbar appears at the top
  - Shows full text labels
  - More spacing

## 🎯 Customization

You can customize the navbar by:

1. **Changing colors**: Modify the `bg-blue-500` classes in the component
2. **Adjusting position**: Change the `fixed bottom-0 sm:top-0` classes
3. **Adding more items**: Extend the `navItems` array
4. **Styling**: Use the `className` prop to add custom styles

## 🔧 Component Props

```typescript
interface NavBarProps {
  items: NavItem[]      // Array of navigation items
  className?: string    // Optional custom CSS classes
}

interface NavItem {
  name: string          // Display name
  url: string          // Route path
  icon: LucideIcon     // Lucide React icon component
}
```

## ✨ Next Steps

1. Test the component by importing it into a page
2. Customize the navigation items to match your routes
3. Adjust colors/styling to match your brand
4. Consider replacing the existing Header component if you prefer this style
