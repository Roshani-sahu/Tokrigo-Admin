import DashboardLayout from "../layouts/DashboardLayout";
import InventoryManagement from "../components/inventoryComp/InventoryManagement";
import WarehouseManagement from "../components/inventoryComp/WarehouseManagement";
import WarehouseTable from "../components/inventoryComp/WarehouseTable";
// import ProductRackLayout from '../components/inventoryComp/ProductRackLayout'


const Inventory = () => {
  return (
    <DashboardLayout>
      <div className=" space-y-8">
        <InventoryManagement />
        <WarehouseManagement />
        <WarehouseTable />


              {/* <ProductRackLayout /> */}

      </div>
    </DashboardLayout>
  );
};

export default Inventory;
