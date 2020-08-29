import { IProducts } from '../../interfaces/products.interface';

export class Products implements IProducts {
    productName: string;
    productImage: string;
    productCategory: string;
    productDescription: string;
    productPrice: number;
}
