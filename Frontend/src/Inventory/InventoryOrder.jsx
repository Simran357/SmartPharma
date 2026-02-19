import React from "react";

const InventoryOrder = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* ===== TOP STATS ===== */}
      <div className="grid grid-cols-5 gap-6 mb-8">
        
        <StatCard
          title="ORDERS TODAY"
          value="1,284"
          subtitle="+12%"
          subtitleColor="text-green-500"
        />

        <StatCard
          title="PENDING PACKING"
          value="42"
          subtitle="Queueing"
          subtitleColor="text-orange-500"
        />

        <StatCard
          title="READY FOR PICKUP"
          value="18"
          subtitle="Staged"
          subtitleColor="text-green-600"
        />

        <StatCard
          title="COURIER ARRIVAL"
          value="12 min"
          subtitle="-5 min"
          subtitleColor="text-red-500"
        />

        <StatCard
          title="STOCK ALERTS"
          value="5 Alerts"
          subtitle="Critical"
          subtitleColor="text-red-600"
        />
      </div>

      {/* ===== ORDER COLUMNS ===== */}
      <div className="grid grid-cols-3 gap-6">

        {/* NEW ORDERS */}
        <OrderColumn title="New Orders" count="12" dotColor="bg-blue-500">
          <OrderCard
            id="#ORD-9921"
            name="City Pharma Central"
            items="48 Items"
            time="08:12"
            tag="URGENT"
            tagColor="bg-blue-100 text-blue-600"
            footer="DHL  Express Delivery"
          />

          <OrderCard
            id="#ORD-9930"
            name="Green Cross Pharmacy"
            items="65 Items"
            time="45:30"
            footer="UPS  Standard"
          />
        </OrderColumn>

        {/* PROCESSING */}
        <OrderColumn title="Processing" count="8" dotColor="bg-orange-500">
          <OrderCard
            id="#ORD-9925"
            name="HealthFirst Pharmacy"
            items="120 Items"
            progress="75%"
            progressColor="bg-orange-500"
            footer="FDX  Express"
          />
        </OrderColumn>

        {/* PACKING */}
        <OrderColumn title="Packing" count="15" dotColor="bg-green-500">
          <OrderCard
            id="#ORD-9928"
            name="MediCare Hub"
            items="12 Items"
            tag="STATION 4"
            tagColor="text-green-600"
            footer="INT  Internal Fleet"
            complete
          />
        </OrderColumn>

      </div>
    </div>
  );
};

export default InventoryOrder;





/* ================= COMPONENTS ================= */

const StatCard = ({ title, value, subtitle, subtitleColor }) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
    <p className="text-xs text-gray-400 font-semibold">{title}</p>
    <div className="flex items-center justify-between mt-2">
      <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
      <span className={`text-sm font-medium ${subtitleColor}`}>
        {subtitle}
      </span>
    </div>
  </div>
);

const OrderColumn = ({ title, count, dotColor, children }) => (
  <div>
    <div className="flex items-center gap-2 mb-4">
      <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
      <h3 className="font-semibold text-gray-700">
        {title} <span className="text-gray-400 text-sm">{count}</span>
      </h3>
    </div>

    <div className="space-y-4">{children}</div>
  </div>
);

const OrderCard = ({
  id,
  name,
  items,
  time,
  tag,
  tagColor,
  footer,
  progress,
  progressColor,
  complete,
}) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-semibold text-gray-600">{id}</span>
      {tag && (
        <span className={`text-xs px-2 py-1 rounded-md ${tagColor}`}>
          {tag}
        </span>
      )}
    </div>

    <h4 className="font-semibold text-gray-800 mb-3">{name}</h4>

    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
      <span>{items}</span>
      {time && <span>{time}</span>}
    </div>

    {progress && (
      <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
        <div
          className={`${progressColor} h-2 rounded-full`}
          style={{ width: progress }}
        ></div>
      </div>
    )}

    <div className="flex justify-between items-center text-sm text-gray-400">
      <span>{footer}</span>
      {complete && (
        <span className="text-green-600 font-semibold">COMPLETE</span>
      )}
    </div>
  </div>
);
