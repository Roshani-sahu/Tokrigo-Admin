import React, { useState } from "react";

/* ================= TYPES ================= */
type Product = {
  id: number;
  name: string;
  sku: string;
  image: string;
};

type Rack = {
  id: string; // A1, A2, ...
  product: Product | null;
};

type Section = {
  name: string; // A, B, C...
  racks: Rack[];
};

/* ================= DATA ================= */
const initialProducts: Product[] = [
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
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/ae29e828-f5d9-4f8b-89b6-8c6d6919df7b.png",
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


/* Create Sections A–F, each with 12 racks */
const createSections = (): Section[] => {
  const sectionNames = ["A", "B", "C", "D", "E", "F"];

  return sectionNames.map((section) => ({
    name: section,
    racks: Array.from({ length: 12 }, (_, i) => ({
      id: `${section}${i + 1}`,
      product: null,
    })),
  }));
};

/* ================= MAIN ================= */
const ProductRackLayout: React.FC = () => {
  const [products] = useState<Product[]>(initialProducts);
  const [sections, setSections] = useState<Section[]>(createSections());
  const [draggedProduct, setDraggedProduct] = useState<Product | null>(null);

  const removeFromRack = (sectionName: string, rackId: string) => {
  setSections((prev) =>
    prev.map((section) =>
      section.name !== sectionName
        ? section
        : {
            ...section,
            racks: section.racks.map((rack) =>
              rack.id === rackId
                ? { ...rack, product: null }
                : rack
            ),
          }
    )
  );
};


  /* DRAG START */
  const onDragStart = (product: Product) => {
    setDraggedProduct(product);
  };

  /* DROP INTO RACK */
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

  return (
    <div className="flex h-screen bg-[#f7faff]">

      {/* ================= LEFT SIDEBAR (20%) ================= */}
      <div className="w-1/5 bg-white border-r p-4 overflow-y-auto">
        <h3 className="font-semibold mb-4">Products</h3>

        <div className="space-y-3">
          {products.map((product) => (
            <div
              key={product.id}
              draggable
              onDragStart={() => onDragStart(product)}
              className="cursor-grab bg-gray-100 rounded-lg p-3 flex gap-3 items-center hover:bg-gray-200"
            >
              {/* IMAGE */}
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded object-cover"
              />

              {/* DETAILS */}
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {product.name}
                </p>
                <p className="text-xs text-gray-500">
                  {product.sku}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT MAIN AREA (80%) ================= */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h3 className="font-semibold mb-6">Racks Layout</h3>

        <div className="grid grid-cols-1 gap-8">
          {sections.map((section) => (
            <div key={section.name}>
              <h4 className="text-md font-semibold mb-3">
                Section {section.name}
              </h4>

              <div className="grid grid-cols-6 gap-4">
                {section.racks.map((rack) => (
                  <div
                    key={rack.id}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => onDrop(section.name, rack.id)}
                    className="h-28 border-2 border-dashed rounded-lg flex flex-col items-center justify-center bg-white"
                  >
                    <span className="text-xs text-gray-400 mb-1">
                      {rack.id}
                    </span>

                   {rack.product ? (
  <div className="relative flex flex-col items-center gap-1">

    {/* REMOVE BUTTON */}
    <button
      onClick={() => removeFromRack(section.name, rack.id)}
      className="absolute -top-5 -right-5 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center hover:bg-red-600"
      title="Remove product"
    >
      ✕
    </button>

    <img
      src={rack.product.image}
      alt={rack.product.name}
      className="w-10 h-10 rounded object-cover"
    />

    <p className="text-xs font-medium text-gray-800 text-center">
      {rack.product.name}
    </p>

    <p className="text-[10px] text-gray-500">
      {rack.product.sku}
    </p>
  </div>
) : (
  <span className="text-gray-300 text-xs">
    Empty
  </span>
)}

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductRackLayout;
