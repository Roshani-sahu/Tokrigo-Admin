import DashboardLayout from "../layouts/DashboardLayout";
import Brands from "../components/BrandsComp/Brands";
import Collaboration from "../components/BrandsComp/Collaboration";

const BrandsAndCollaboration = () => {
  return (
    <DashboardLayout>
      <Brands />
      <Collaboration />
    </DashboardLayout>
  );
};

export default BrandsAndCollaboration;
