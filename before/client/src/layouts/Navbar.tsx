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
      </div>
    </nav>
  );
}
