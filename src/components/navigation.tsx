'use client';

import { useI18n } from "@/lib/i18n";
import { cn } from '@/lib/utils';
import {
  Check,
  CheckCheck,
  Home,
  Settings,
  User,
  Users,
  Warehouse,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const COLORS = {
  cyan: { default: 'text-cyan-600', activeBg: 'bg-cyan-50', hoverText: 'text-cyan-700' },
  teal: { default: 'text-teal-600', activeBg: 'bg-teal-50', hoverText: 'text-teal-700' },
  blue: { default: 'text-blue-600', activeBg: 'bg-blue-50', hoverText: 'text-blue-700' },
  purple: { default: 'text-purple-600', activeBg: 'bg-purple-50', hoverText: 'text-purple-700' },
};

const navItems = [
  {
    labelKey: 'Home',
    href: '/',
    icon: Home,
    activeIcon: Warehouse,
    colorPalette: COLORS.cyan,
  },
  {
    labelKey: 'My Tasks',
    href: '/tasks',
    icon: Check,
    activeIcon: CheckCheck,
    colorPalette: COLORS.teal,
  },
  {
    labelKey: 'Members',
    href: '/members',
    icon: User,
    activeIcon: Users,
    colorPalette: COLORS.blue,
  },
  {
    labelKey: 'Settings',
    href: '/settings',
    icon: Settings,
    activeIcon: Wrench,
    colorPalette: COLORS.purple,
  },
];

export const Navigation = () => {
  const pathname = usePathname();
  const { t, locale } = useI18n();
  const isRTL = locale === 'fa';

  return (
    <ul className="flex flex-col gap-2 px-1 py-3">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const IconComponent = isActive ? item.activeIcon : item.icon;
        const label = t(item.labelKey);

        return (
          <li key={item.href}>
            <Link href={item.href} className="block group relative z-10">
              <div
                className={cn(
                  'flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-700 ease-out',
                  isRTL ? 'flex-row-reverse' : 'flex-row',
                  'text-gray-700',
                  'hover:bg-gray-100 hover:text-gray-900',
                  'relative overflow-hidden',
                  isActive &&
                    cn(
                      item.colorPalette.activeBg,
                      item.colorPalette.default, 
                      'font-semibold shadow-sm border border-transparent', 
                      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer-subtle',
                    )
                )}
              >
                <IconComponent
                  className={cn(
                    'w-5 h-5 transition-transform duration-700 group-hover:scale-125', 
                    isActive ? item.colorPalette.default : 'text-gray-500', 
                    'group-hover:text-current',
                    isRTL ? 'ml-2' : 'mr-2'
                  )}
                />
                <span
                  className={cn(
                    'text-sm transition-colors duration-700',
                    'group-hover:text-gray-900',
                    isActive ? item.colorPalette.default : 'text-gray-500',
                    isActive ? 'font-semibold' : 'font-medium'
                  )}
                >
                  {label}
                </span>

                {!isActive && (
                  <span
                    className={cn(
                      'absolute inset-0 rounded-xl pointer-events-none',
                      'bg-gradient-to-br from-transparent to-gray-100 opacity-0 group-hover:opacity-100',
                      'transform scale-x-0 group-hover:scale-x-100',
                      'transition-all duration-700 ease-out',
                      '-z-10' 
                    )}
                  />
                )}

                {isActive && (
                  <span
                    className={cn(
                      'absolute top-1/2 -translate-y-1/2 w-1.5 h-3/4 rounded-full',
                      isRTL ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full',
                      item.colorPalette.default 
                    )}
                  />
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
