import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

/* ================= TYPES ================= */
type Product = {
  id: number;
  name: string;
  sku: string;
  image: string;
};

type Rack = {
  id: string;
  product: Product | null;
};

type Section = {
  name: string;
  racks: Rack[];
};

/* ================= DATA ================= */
const products: Product[] = [
  {
    id: 1,
    name: "Apple",
    sku: "SKU-APL-001",
    image: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
  },
  {
    id: 2,
    name: "Bread Packet",
    sku: "SKU-BRD-002",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKEy_KItk2VxxJUGxKG-DprUVrV-UlS3N_Q&s",
  },
  {
    id: 3,
    name: "Milk",
    sku: "SKU-MLK-003",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,w=360/da/cms-assets/cms/product/ae29e828-f5d9-4f8b-89b6-8c6d6919df7b.png",
  },
  {
    id: 4,
    name: "Chocolate Bar",
    sku: "SKU-CHO-004",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKqWDRvsoxcGLVj2Qr3Zl00TvYos2e7z_Lw&s",
  },
  {
    id: 5,
    name: "Cooking Oil",
    sku: "SKU-OIL-005",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBu0_yJ1qndG2HJZsPH6zPYVCLAsK-89a0jA&s",
  },
  {
    id: 6,
    name: "Rice Bag",
    sku: "SKU-RIC-006",
    image: "https://ars-super-market.myshopify.com/cdn/shop/products/153737841-612x612_1200x1200.jpg?v=1538367512",
  },
  {
    id: 7,
    name: "Soap Pack",
    sku: "SKU-SOP-007",
    image: "https://vaadiherbals.in/cdn/shop/files/AssortedPackof_12.jpg?v=1716026225",
  },
];

/* ================= CREATE SECTIONS ================= */
const createSections = (): Section[] => {
  return ["A", "B"].map((section) => ({
    name: section,
    racks: Array.from({ length: 12 }, (_, i) => ({
      id: `${section}${i + 1}`,
      product: null,
    })),
  }));
};

/* ================= MAIN ================= */
const ProductRackLayout: React.FC = () => {
  const [sections, setSections] = useState<Section[]>(createSections());
  const [draggedProduct, setDraggedProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState<string>("A");

  const onDrop = (sectionName: string, rackId: string) => {
    if (!draggedProduct) return;

    setSections((prev) =>
      prev.map((section) =>
        section.name !== sectionName
          ? section
          : {
              ...section,
              racks: section.racks.map((rack) =>
                rack.id === rackId
                  ? { ...rack, product: draggedProduct }
                  : rack
              ),
            }
      )
    );

    setDraggedProduct(null);
  };

  const removeFromRack = (sectionName: string, rackId: string) => {
    setSections((prev) =>
      prev.map((section) =>
        section.name !== sectionName
          ? section
          : {
              ...section,
              racks: section.racks.map((rack) =>
                rack.id === rackId ? { ...rack, product: null } : rack
              ),
            }
      )
    );
  };

  return (
    <DashboardLayout>

       {/* HEADER - Now at bottom on mobile */}
          <div className="lg:hidden w-[320px] sticky bottom-0 bg-white border-t shadow-lg p-4 mb-4">
            <div className="mb-3">
              <h2 className="font-semibold text-gray-800 text-lg">
                Tokrigo_WH01 Warehouse
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Racking Layout & SKUs Arrangement
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm font-medium">
                  Selected: {draggedProduct?.name || "None"}
                </p>
                <p className="text-xs text-gray-500">
                  Tap a product from left panel, then tap a rack above to place
                </p>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg text-sm hover:bg-green-700 transition active:scale-[0.98]">
                  Save Changes
                </button>
                {draggedProduct && (
                  <button
                    onClick={() => setDraggedProduct(null)}
                    className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Desktop header (stays at top) */}

      <div className="hidden lg:block mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div>
                <h2 className="font-semibold text-gray-800 text-lg sm:text-xl">
                  Tokrigo_WH01 Warehouse – Racking Layout & SKUs Arrangement
                </h2>
                <p className="text-sm text-gray-500">
                  Tokrigo's Optimized Inventory Racking System
                </p>
              </div>

              <button className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                Save Changes
              </button>
            </div>
          </div>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#F7FAFF]">
        {/* ================= LEFT PRODUCTS - Mobile optimized ================= */}
        <div className="lg:w-[260px] bg-white lg:border-r p-4">
          <div className="flex lg:flex-col gap-4 lg:gap-0">
            <div className="lg:hidden w-[170px] flex gap-2 mb-4 overflow-x-auto pb-2">
              {["A", "B"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                    activeSection === section
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Section {section}
                </button>
              ))}
            </div>
            
            <div className="lg:block">
              <h3 className="font-semibold mb-4">Products</h3>
              <div className="space-y-3 max-h-[200px] lg:max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                {products.map((p) => (
                  <div
                    key={p.id}
                    draggable
                    onDragStart={() => setDraggedProduct(p)}
                    onTouchStart={() => setDraggedProduct(p)}
                    className="flex gap-3 items-center bg-gray-100 rounded-lg p-3 cursor-grab hover:bg-gray-200 active:scale-[0.98] transition touch-manipulation"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{p.name}</p>
                      <p className="text-xs text-gray-500 truncate">{p.sku}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT RACK AREA - Mobile optimized ================= */}
        <div className="flex-1 p-3 sm:p-6 overflow-y-auto">
          {/* RACKS - Mobile optimized (moved to top on mobile) */}
          <div className="lg:hidden w-[320px] mb-4">
            {sections
              .filter((section) => section.name === activeSection)
              .map((section) => (
                <div key={section.name} className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-base">
                      Rack Section {section.name}
                    </h4>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      3x4 Layout
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {section.racks.map((rack) => (
                      <div
                        key={rack.id}
                        onClick={() => {
                          if (draggedProduct) {
                            onDrop(section.name, rack.id);
                          }
                        }}
                        className={`border rounded-lg min-h-[80px] bg-white flex flex-col items-center justify-center relative p-2 ${
                          draggedProduct
                            ? "border-blue-500 bg-blue-50 cursor-pointer"
                            : "border-gray-300"
                        }`}
                      >
                        <p className="text-xs text-gray-400 mb-1">{rack.id}</p>

                        {rack.product ? (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFromRack(section.name, rack.id);
                              }}
                              className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center text-red-500 text-xs bg-white rounded-full shadow"
                              title="Remove product"
                            >
                              ✕
                            </button>

                            <img
                              src={rack.product.image}
                              alt={rack.product.name}
                              className="w-8 h-8 object-cover mb-1"
                            />

                            <p className="text-xs font-medium text-center truncate w-full">
                              {rack.product.name}
                            </p>

                            <p className="text-[10px] text-green-600 truncate w-full">
                              {rack.product.sku}
                            </p>
                          </>
                        ) : (
                          <p className="text-xs text-gray-300">Empty</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Desktop view (stays same) */}
          <div className="hidden lg:block">
            {sections.map((section) => (
              <div key={section.name} className="mb-8">
                <h4 className="font-semibold mb-3">
                  Rack no. [3x4] : {section.name}
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {section.racks.map((rack) => (
                    <div
                      key={rack.id}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={() => onDrop(section.name, rack.id)}
                      className="border border-dashed rounded-xl min-h-[96px] sm:h-28 bg-white flex flex-col items-center justify-center relative"
                    >
                      <p className="text-xs text-gray-400 mb-1">{rack.id}</p>

                      {rack.product ? (
                        <>
                          <button
                            onClick={() => removeFromRack(section.name, rack.id)}
                            className="absolute top-2 right-2 text-red-500 text-xs"
                            title="Remove product"
                          >
                            ✕
                          </button>

                          <img
                            src={rack.product.image}
                            alt={rack.product.name}
                            className="w-10 h-10 object-cover mb-1"
                          />

                          <p className="text-xs font-medium text-center">
                            {rack.product.name}
                          </p>

                          <p className="text-[10px] text-green-600">
                            {rack.product.sku}
                          </p>
                        </>
                      ) : (
                        <p className="text-xs text-gray-300">Empty</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

                   
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProductRackLayout;