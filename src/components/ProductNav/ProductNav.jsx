import ProductNavStyles from "./ProductNav.module.css";

export default function ProductNav({ page, setPage }) {
  return (
    <nav className={ProductNavStyles.product_nav}>
      <button
        className="button-6"
        text={"First page"}
        onClick={() => setPage(0)}
        disabled={page === 0 ? true : false}
      >
        First page
      </button>

      <div className={ProductNavStyles.product_nav_div}>
        <button
          className="button-6"
          text={"Prev page"}
          onClick={() => setPage(page - 10)}
          disabled={page === 0 ? true : false}
        >
          Prev page
        </button>
        <button
          className="button-6"
          text={"Next page"}
          onClick={() => setPage(page + 10)}
          disabled={page === 44095 ? true : false}
        >
          Next page
        </button>
      </div>

      <button
        className="button-6"
        text={"Last page"}
        onClick={() => setPage(44095)}
        disabled={page === 44095 ? true : false}
      >
        Last page
      </button>
    </nav>
  );
}
