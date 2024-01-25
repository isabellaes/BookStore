import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <aside className="menu-categories">
      <ul>
        <li>
          <Link to="/CategoryPageQuote">Quote</Link>
        </li>
        <li>
          <Link to="/CategoryPageAnimals">Animals</Link>
        </li>
        <li>
          <Link to="/CategoryPagePlants">Plants</Link>
        </li>
        <li>
          <Link to="/CategoryPageAbstract">Abstract</Link>
        </li>
      </ul>
    </aside>
    <main>{children}</main>
  </div>
);

export default Layout;
