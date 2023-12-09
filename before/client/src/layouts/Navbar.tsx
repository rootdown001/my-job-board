import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THEME_OPTIONS } from "@/constants/constants";

import useTheme from "@/hooks/useTheme";
import { Menu, Moon, Sun } from "lucide-react";
import { type } from "os";
import { Link } from "react-router-dom";
import { brotliDecompress } from "zlib";

export default function Navbar() {
  return (
    //  1. Navbar for in RootLayout

    // 2. styling...
    // - stick to top at 0 px
    // - z index on top
    // - bottom border
    // - padding all around of 4px
    // - background white
    // - dark mode: colow slate 950

    <nav className="sticky top-0 z-10 border-b p-4 bg-white dark:bg-slate-950">
      {/* 3. container to hold everything 
            -   container to center
            -   control w flex
            -   center on vertical axis
            -   justify-between - equal spece between each
            -   gap of 4 px all around to keep space if close together*/}

      <div className="container flex items-center justify-between gap-4 ">
        {/* 4. text in span
            -   large text */}
        <span className=" text-lg">My App</span>
        {/* 5.  div for rest w flex */}
        <div className=" flex">
          {/* 6.  Toggle button */}
          <ThemeToggleButton />
          {/* wrap NavItem in div - className = " sm:flex" 
            - will be hidden unless screen size about small - then flex*/}
          <div className="hidden sm:flex">
            {/* 7.  Nav item to breate button likes */}
            <NavItem to="/tasks" label="Task Board" />
          </div>
          {/* menu item & dropdown (for mobile) */}
          <DropdownMenu>
            {/* hidden if larger than small */}
            <DropdownMenuTrigger asChild className="flex sm:hidden">
              <Button
                variant="ghost"
                // size icon bc menu is icon
                size="icon"
                className=" data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800"
              >
                {/* add Menu, dropdown icon */}
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            {/* dropdown menu content */}
            {/* align end to dropdown alighns with end of menu icon */}
            <DropdownMenuContent align="end">
              {/* item in dropdown menu */}
              <DropdownMenuItem asChild>
                {/* using Link  */}
                <Link to="/tasks">Task Board</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

// 8. prop types
type NavItemProps = {
  to: string;
  label: string;
};

// 7. NavItem fxn
function NavItem({ to, label }: NavItemProps) {
  return (
    <div>
      {/* Button component from UI - use asChild to make Link be passed to Button */}
      {/* add ghost varient for light w hover (see button.tsx varients) */}
      <Button asChild variant="ghost">
        {/* props from typing */}
        <Link to={to}>{label}</Link>
      </Button>
    </div>
  );
}

// 6. function for light/dark toggle
function ThemeToggleButton() {
  // Bring in setTheme from useTheme custom hook

  return (
    <>
      {/* Bring in DropDownMenu from components -examine in other places */}
      {/* Import them from COMPONENTS */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            // classes below keep highlight around button when open
            className=" data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800"
          >
            {/* Import Sun & Moon from lucid-react */}
            {/* in light mode, scale 100 / in dark mode, 0 */}
            <Sun className=" h-5 w-5 scale-100 dark:scale-0 transition-transform" />
            {/* absolute positions Moon next to closest "positioned" component - there is none - so on top of sun */}
            {/* in light mode, scale 0 (so invisible) */}
            <Moon className=" absolute h-5 w-5  scale-0 dark:scale-100 transition-transform" />
          </Button>
        </DropdownMenuTrigger>
        {/* change align to "end" so dropdown on left hand side */}
        {/* NOW TO SET THEME...
          Map through imported theme options 
          - capitalize word from THEME_OPTIONS
          - onClick set theme (imported above)*/}
        <DropdownMenuContent align="end">
          {THEME_OPTIONS.map((theme) => (
            <DropdownMenuItem
              className=" capitalize"
              key={theme}
              onClick={() => setTheme(theme)}
            >
              {theme}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
