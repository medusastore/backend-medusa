import {
    IProductModuleService,
    MedusaContainer
} from "@medusajs/framework/types";
import { Modules } from "@medusajs/framework/utils";

export default async function myCustomJob(container: MedusaContainer) {
    const productService: IProductModuleService = container.resolve(Modules.PRODUCT)

    const products = await productService.listAndCountProducts();
}

export const config = {
    name: "daily-product-report",
    schedule: "0 0 * * *",
};
