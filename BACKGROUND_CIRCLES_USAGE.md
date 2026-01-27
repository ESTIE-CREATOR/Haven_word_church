# Background Circles Component - Usage Guide

## ✅ Integration Complete

The Background Circles component has been successfully integrated into your project!

## 📁 Files Created

1. **`src/components/ui/background-circles.tsx`** - Main component with BackgroundCircles and DemoCircles
2. **`src/components/ui/background-circles-demo.tsx`** - Standalone demo component

## 🎯 Key Adaptations Made

### From Next.js to React Router
- ✅ Removed `"use client"` directive (not needed in Vite)
- ✅ Changed `clsx` to use `cn` utility from `@/lib/utils` for consistency
- ✅ Component works seamlessly with React Router

### Dependencies
- ✅ `framer-motion` - Already installed (v12.27.0)
- ✅ `clsx` - Already installed (v2.1.1) - used via `cn` utility
- ✅ All required dependencies are present

## 🚀 How to Use

### Option 1: Basic Usage

```tsx
import { BackgroundCircles } from "@/components/ui/background-circles"

<BackgroundCircles 
  title="Haven Word Church"
  description="The Spread City"
  variant="primary"
/>
```

### Option 2: Use with Custom Variant

```tsx
import { BackgroundCircles } from "@/components/ui/background-circles"

<BackgroundCircles 
  title="Welcome"
  description="Join us for worship"
  variant="senary" // blue variant
  className="min-h-screen"
/>
```

### Option 3: Use the Demo Component (with variant switcher)

```tsx
import { BackgroundCirclesDemo } from "@/components/ui/background-circles-demo"

<BackgroundCirclesDemo />
```

### Option 4: Use the Built-in DemoCircles

```tsx
import { DemoCircles } from "@/components/ui/background-circles"

<DemoCircles />
```

## 🎨 Available Variants

The component supports 8 color variants:

- `primary` - Emerald/Cyan (green/blue)
- `secondary` - Violet/Fuchsia (purple/pink)
- `tertiary` - Orange/Yellow
- `quaternary` - Purple/Pink
- `quinary` - Red/Rose
- `senary` - Blue/Sky
- `septenary` - Gray
- `octonary` - Red/Rose (default)

## 📱 Component Props

```typescript
interface BackgroundCirclesProps {
    title?: string;              // Main heading text (default: "Background Circles")
    description?: string;        // Subtitle text (default: "Optional Description")
    className?: string;          // Additional CSS classes
    variant?: keyof typeof COLOR_VARIANTS; // Color variant (default: "octonary")
}
```

## ✨ Features

- **Animated Circles**: Three rotating, scaling circles with gradient borders
- **Animated Grid Background**: Subtle grid pattern that animates
- **Gradient Text**: Beautiful gradient text effect on the title
- **Multiple Color Variants**: 8 different color schemes to choose from
- **Smooth Animations**: Powered by framer-motion
- **Responsive**: Works on all screen sizes
- **Dark Mode Support**: Includes dark mode styling

## 🎯 Use Cases

Perfect for:
- Hero sections
- Landing pages
- Background effects
- Loading screens
- Section dividers
- Full-page backgrounds

## 🔧 Customization Examples

### Custom Height

```tsx
<BackgroundCircles 
  title="Custom Height"
  className="h-[600px]"
/>
```

### Without Title/Description

```tsx
<BackgroundCircles 
  variant="primary"
  className="h-screen"
/>
```

### As a Section Background

```tsx
<section className="relative">
  <BackgroundCircles 
    variant="senary"
    className="absolute inset-0"
  />
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</section>
```

## 🎨 Integration with Hero Section

You could replace or enhance your Hero component:

```tsx
import { BackgroundCircles } from "@/components/ui/background-circles"

const Hero = () => {
  return (
    <div className="relative">
      <BackgroundCircles 
        title="Haven Word Church"
        description="The Spread City"
        variant="senary"
      />
      {/* Add your buttons/content on top */}
    </div>
  )
}
```

## 📝 Notes

- The component uses `h-screen` by default, but you can override with `className`
- The animated circles are positioned absolutely and centered
- The grid background animates continuously
- All animations are smooth and performant using framer-motion
- The component supports dark mode via Tailwind's `dark:` prefix

## ✨ Next Steps

1. Test the component by importing it into a page
2. Choose a variant that matches your brand colors
3. Customize the title and description
4. Consider using it as a hero background or section divider
