import React from "react";
import styles from "../styles/products.module.css";

export default function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.card}>
        <h3>Polpen</h3>
        <h5 className="text-gray-500">ATK</h5>
        <p>Rp.5.000</p>
      </div>
    </div>
  );
}
