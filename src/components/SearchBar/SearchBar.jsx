import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import css from "./SearchBar.module.css";

const validationSchema = Yup.object().shape({
  query: Yup.string().trim().required("Please enter a search term"),
});

export default function SearchBar({ onSearch }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("query") || "";
  const [debouncedQuery] = useDebounce(searchTerm, 1000);

  return (
    <header>
      <Formik
        initialValues={{ query: searchTerm }}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setSearchParams(values.query ? { query: values.query } : {});
          onSearch(values.query.trim());
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className={css.searchForm}>
            <Field
              className={css.searchInput}
              name="query"
              type="text"
              autoComplete="off"
              placeholder="Search..."
              value={values.query}
              onChange={(e) => {
                const value = e.target.value;
                setFieldValue("query", value);
                setSearchParams(value ? { query: value } : {});
              }}
            />
            <button type="submit" className={css.btn}>
              Search
            </button>
            <ErrorMessage name="query">
              {(msg) => <span className={css.error}>{msg}</span>}
            </ErrorMessage>
          </Form>
        )}
      </Formik>
    </header>
  );
}
