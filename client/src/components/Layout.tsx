import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <aside>
      <ul>
        <li>
          <Link to="/category1">Category 1</Link>
        </li>
        <li>
          <Link to="/category2">Category 2</Link>
        </li>
      </ul>
    </aside>
    <main>{children}</main>
  </div>
);

export default Layout;
