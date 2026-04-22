import { useState } from "react";
import { Button, Modal } from "antd";
import StatCard from "./StatCard";
import InventoryTable from "./InventoryTable";
import StockEntry from "./StockEntry";                    
export default function Inventory() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">



      <div className="flex-1">
        <main className="p-8">
          {/*  HEADER ADD HERE */}
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Inventory Overview
            </h2> 
            <p className="text-sm mt-3 text-gray-500">
              View and manage all product stocks, batches, expiry dates, and supplier details in one place.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatCard title="At Risk" value="24 Items" subtitle="+5% last week" />
            <StatCard title="Dead Stock" value="₹ 1,450" subtitle="12 SKUs" />
            <StatCard title="Efficiency" value="92.4%" subtitle="Healthy" />
          </div>

          {/*  BUTTON */}
          <div className="flex justify-end mb-4">
            <Button
              type="primary"
              size="large"
              onClick={() => setOpen(true)}
            >
              + Add New Stock
            </Button>
          </div>

          <InventoryTable />

          {/*  MODAL */}
          <Modal
            title="Add New Stock"
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            width={1000}
          >
            <StockEntry onClose={() => setOpen(false)} />
          </Modal>
        </main>
      </div>

    </div>
  );
}
