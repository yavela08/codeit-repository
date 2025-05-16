import AddToCart from "@/components/AddToCart/AddToCart";
import styles from "./page.module.css"; // this has your .container background

const page = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div className={styles.container}>
      <p>{id}</p>
      <h2 className={styles.title}>{product.title}</h2>

      {/* ✅ Product image displayed here */}
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />

      <p className={styles.description}>{product.description}</p>

      <AddToCart product={product} />
    </div>
  );
};

export default page;
