import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductCardComponent from "../../components/widgets/ProductCardComponent";
import LoadingComponent from "../../components/widgets/LoadingComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useGetCategoryProductsQuery,
  useGetCollectionProductsQuery,
} from "../../redux/services/shop";
import Pagination from "../../components/widgets/Pagination";

const sortOptions = [
  { name: "Newest", value: "desc" },
  { name: "Oldest", value: "asc" },
];

const priceFilter = {
  id: "price",
  name: "Price",
  options: [
    {
      value: { min: 1, max: 10 },
      label: "Min $1.00 - Max $10.00",
      checked: false,
    },
    {
      value: { min: 11, max: 20 },
      label: "Min $11.00 - Max $20.00",
      checked: false,
    },
    {
      value: { min: 21, max: 30 },
      label: "Min $21.00 - Max $30.00",
      checked: false,
    },
    { value: { min: 31 }, label: " Min > $30.00", checked: false },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductListView() {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get("page")) || 1;
  const currentQuery = query.get("price") || "";
  const currentSort = query.get("created_at") || "asc";
  const limit = 8;

  const [createdAt, setCreatedAt] = useState(currentSort);
  const [price, setPrice] = useState(currentQuery);

  const [page, setPage] = useState(currentPage);
  const { data: categories, isLoading: fetchingProducts } =
    useGetCategoryProductsQuery(
      {
        id,
        page,
        limit,
        createdAt,
        price,
      },
      { skip: type === "collection" }
    );

  const { data: collections, isLoading: fetchingCollections } =
    useGetCollectionProductsQuery(
      {
        id,
        page,
        limit,
        createdAt,
        price,
      },
      { skip: type === "category" }
    );

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleResetFilter = (event) => {
    event.preventDefault();
    setPrice("");
    setCreatedAt("asc");
  };

  useEffect(() => {
    navigate(
      `/list/${type}/${id}?page=${page}&created_at=${createdAt}&price=${price}`,
      { replace: true }
    );
  }, [page, navigate, id, createdAt, price, type]);

  if (fetchingProducts || fetchingCollections) {
    return <LoadingComponent />;
  }

  let products = type === "category" ? categories : collections;

  return products != null && products.msg === "success" ? (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <Disclosure
                      as="div"
                      key={priceFilter.id}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {priceFilter.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {priceFilter.options.map((option, optionIdx) => (
                                <div
                                  key={optionIdx + "pricesFilters"}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${price.id}-${optionIdx}`}
                                    name={priceFilter.id}
                                    type="radio"
                                    value={option.value}
                                    checked={
                                      JSON.stringify(option.value) === price
                                    }
                                    onChange={() => {
                                      setPrice(JSON.stringify(option.value));
                                      setMobileFiltersOpen(false);
                                    }}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${priceFilter.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <button
                              onClick={handleResetFilter}
                              className="btn text-sm py-1 px-2 rounded-lg ring-2 ring-zinc-700 mt-4"
                            >
                              Clear
                            </button>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {type === "category" ? "Products" : "Collections"}
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item
                          key={option.name}
                          onClick={() => {
                            setCreatedAt(option.value);
                          }}
                        >
                          <button
                            className={classNames(
                              createdAt === option.value
                                ? "font-medium text-gray-900 "
                                : "text-gray-500",
                              createdAt === option.value ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-start w-full"
                            )}
                          >
                            {option.name}
                          </button>
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-6 pt-6">
            <h2 id="products-heading" className="sr-only">
              {type === "category" ? "Products" : "Collections"}
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <Disclosure
                  as="div"
                  key={priceFilter.id}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {priceFilter.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {priceFilter.options.map((option, optionIdx) => (
                            <div
                              key={optionIdx + "pricesFilters"}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${price.id}-${optionIdx}`}
                                name={priceFilter.id}
                                type="radio"
                                value={option.value}
                                checked={JSON.stringify(option.value) === price}
                                onChange={() =>
                                  setPrice(JSON.stringify(option.value))
                                }
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${priceFilter.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={handleResetFilter}
                          className="btn text-sm py-1 px-2 rounded-lg ring-2 ring-zinc-700 mt-4"
                        >
                          Clear
                        </button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 h-[50vh] max-h-screen">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {products.response.length > 0
                    ? products.response.map((product) => (
                        <ProductCardComponent
                          key={product._id}
                          product={product}
                        />
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Pagination
          currentPage={products.currentPage}
          totalPages={products.totalPages}
          totalDocument={products.totalDocument}
          resultsPerPage={products.resultsPerPage}
          setPageNum={setPage}
        />
      </div>
    </div>
  ) : (
    ""
  );
}
