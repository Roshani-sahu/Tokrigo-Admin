import React from 'react'
import OrderTable from './OrderTable'
import {
  CheckCircle,
  Truck,
  RefreshCcw,
  XCircle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";


const OrderCards: React.FC = () => {
  return (
    <div className='font-[Poppins]'>
      {/* Heading */}
      <div className='mb-7'>
        <h1 className='text-[20px] font-semibold text-[#000000de]'>
          Orders Management
        </h1>
        <p className='text-sm  text-gray-500'>
          Manage and track all customer orders
        </p>
      </div>
      {/* Cards Wrapper */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* Card */}
        {[
         {
    title: "Order Completed",
    value: "5,000",
    bg: "green",
    trend: "-2.08%",
    positive: false,
    icon: CheckCircle,
  },
  {
    title: "Out of Delivery",
    value: "1,250",
    bg: "#FFDD98",
    trend: "-1.24%",
    positive: false,
    icon: Truck,
  },
  {
    title: "Order Processing",
    value: "8,430",
    bg: "lightgreen",
    trend: "+3.12%",
    positive: true,
    icon: RefreshCcw,
  },
  {
    title: "Order Cancelled",
    value: "320",
    bg: "#FF9990",
    trend: "-0.82%",
    positive: false,
    icon: XCircle,
  },
        ].map((card, index) => (
         <div
  key={index}
  className="w-full h-[117px] rounded-[12px] bg-white px-5 py-4 shadow-sm flex flex-col justify-between"
>
  {/* TOP */}
  <div className="flex items-start justify-between -mt-1">
    <p className="text-[16px] font-medium text-[#5A5A5A]">
      {card.title}
    </p>

    <div
      className="w-[35px] h-[35px] rounded-full flex items-center justify-center"
      style={{ backgroundColor: card.bg }}
    >
      <card.icon className="w-5 h-5 text-white" />
    </div>
  </div>

  {/* VALUE */}
  <p className="text-[23px] mb-2 font-semibold text-black leading-none">
    {card.value}
  </p>

  {/* TREND */}
  <div
    className={`flex items-center gap-1 text-[14px] font-medium ${
      card.positive ? "text-green-600" : "text-red-500"
    }`}
  >
    {card.positive ? (
      <ArrowUpRight size={16} />
    ) : (
      <ArrowDownRight size={16} />
    )}

    {card.trend}

    <span className="text-[#5A5A5A] font-normal ml-1">
      vs last month
    </span>
  </div>
</div>

        ))}
      </div>
      {/* OrderTable */}
      <div className='mt-6'>
        <OrderTable />
      </div>
    </div>
  )
}

export default OrderCards
