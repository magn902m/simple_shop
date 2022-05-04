import ProductNavStyles from "./ProductNav.module.css";

export default function ProductNav({ page, setPage }) {
  return (
    <nav className={ProductNavStyles.product_nav}>
      <button text={"First page"} onClick={() => setPage(0)} disabled={page === 0 ? true : false}>
        First page
      </button>

      <div className={ProductNavStyles.product_nav_div}>
        <button
          text={"Prev page"}
          onClick={() => setPage(page - 10)}
          disabled={page === 0 ? true : false}
        >
          Prev page
        </button>
        <button
          text={"Next page"}
          onClick={() => setPage(page + 10)}
          disabled={page === 44095 ? true : false}
        >
          Next page
        </button>
      </div>

      <button
        text={"Last page"}
        onClick={() => setPage(44095)}
        disabled={page === 44095 ? true : false}
      >
        Last page
      </button>
    </nav>
  );
}
