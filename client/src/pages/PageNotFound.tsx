import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
const PageNotFound = () => {
  return (
    <div className="container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
      </Breadcrumbs>
      <h1>PAGE NOT FOUND</h1>
    </div>
  );
};
export default PageNotFound;
