export default function CustomizationModal({
  showCustomize,
  setShowCustomize,
  selectedItem,
  customizationData,
  handleAddToCart,
}) {
  if (!showCustomize || !selectedItem) return null;

  const data = customizationData[selectedItem.customization];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-5">
          <h2 className="text-2xl font-bold">{selectedItem.name}</h2>

          <button onClick={() => setShowCustomize(false)} className="text-2xl">
            ✕
          </button>
        </div>

        <div className="p-5">
          {/* Extras */}
          {data?.extras && (
            <>
              <h3 className="font-bold text-lg mb-3">Extras</h3>

              {data.extras.map((item) => (
                <label
                  key={item.name}
                  className="flex justify-between py-2 border-b"
                >
                  <span>{item.name}</span>

                  <div className="flex gap-3">
                    <span>${item.price.toFixed(2)}</span>
                    <input type="checkbox" />
                  </div>
                </label>
              ))}
            </>
          )}

          {/* Alternative Milk */}

          {data?.alternativeMilk && (
            <>
              <h3 className="font-bold text-lg mt-8 mb-3">Alternative Milk</h3>

              {data.alternativeMilk.map((item) => (
                <label
                  key={item.name}
                  className="flex justify-between py-2 border-b"
                >
                  <span>{item.name}</span>

                  <div className="flex gap-3">
                    <span>${item.price.toFixed(2)}</span>
                    <input type="radio" name="milk" />
                  </div>
                </label>
              ))}
            </>
          )}

          {/* Syrups */}

          {data?.syrups && (
            <>
              <h3 className="font-bold text-lg mt-8 mb-3">Syrups</h3>

              {data.syrups.map((item) => (
                <label
                  key={item.name}
                  className="flex justify-between py-2 border-b"
                >
                  <span>{item.name}</span>

                  <div className="flex gap-3">
                    <span>${item.price.toFixed(2)}</span>
                    <input type="checkbox" />
                  </div>
                </label>
              ))}
            </>
          )}

          {/* Protein */}

          {data?.protein && (
            <>
              <h3 className="font-bold text-lg mt-8 mb-3">
                Add Choice of Protein
              </h3>

              {data.protein.map((item) => (
                <label
                  key={item.name}
                  className="flex justify-between py-2 border-b"
                >
                  <span>{item.name}</span>

                  <div className="flex gap-3">
                    <span>${item.price.toFixed(2)}</span>
                    <input type="checkbox" />
                  </div>
                </label>
              ))}
            </>
          )}

          {/* Add-ons */}

          {data?.addOns && (
            <>
              <h3 className="font-bold text-lg mt-8 mb-3">Add-ons</h3>

              {data.addOns.map((item) => (
                <label
                  key={item.name}
                  className="flex justify-between py-2 border-b"
                >
                  <span>{item.name}</span>

                  <div className="flex gap-3">
                    <span>${item.price.toFixed(2)}</span>
                    <input type="checkbox" />
                  </div>
                </label>
              ))}
            </>
          )}

          <button
            onClick={() => {
              handleAddToCart(selectedItem);
              setShowCustomize(false);
            }}
            className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold"
          >
            ADD ITEM
          </button>
        </div>
      </div>
    </div>
  );
}
