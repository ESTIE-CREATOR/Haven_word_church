import { Home, MessageSquare, MapPin, Info, Calendar, Heart, DollarSign, Phone } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Messages', url: '/sermons', icon: MessageSquare },
    { name: 'About', url: '/about', icon: Info },
    { name: 'Services', url: '/services', icon: Calendar },
    { name: 'Contact', url: '/contact', icon: Phone },
  ]

  return <NavBar items={navItems} />
}
