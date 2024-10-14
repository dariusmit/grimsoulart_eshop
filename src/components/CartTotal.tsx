interface Props {
  quantities: number[];
  fullProductsList: any;
}

function CartTotal({ quantities, fullProductsList }: Props) {
  return (
    <>
      {fullProductsList.map((product: any) => {
        if (quantities.includes(product.id)) {
          return (
            <div key={product.id}>
              {product.title.rendered}
              {product.acf.price}
              <button
                onClick={() => deleteItem(product.id)}
                className="text-red-400"
              >
                Delete
              </button>
            </div>
          );
        }
      })}
    </>
  );
}

export default CartTotal;
