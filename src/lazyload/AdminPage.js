import { lazy } from "react";

export const DashboardView = lazy(()=> import("../views/Admin/DashboardView"))
export const Hero = lazy(()=> import("../views/Admin/Hero"))
export const AddHero = lazy(()=> import("../views/Admin/AddHero"))
export const Products = lazy(()=> import("../views/Admin/Products"))
export const AddProduct = lazy(()=> import("../views/Admin/AddProduct"))
export const Categories = lazy(()=> import("../views/Admin/Categories"))
export const AddCategory = lazy(()=> import("../views/Admin/AddCategory"))
export const Collections = lazy(()=> import("../views/Admin/Collections"))
export const AddCollection = lazy(()=> import("../views/Admin/AddCollection"))
