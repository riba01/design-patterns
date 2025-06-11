import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt();
const tShirtStamp =  new ProductStampDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());

console.log(tShirtStamp.getPrice(), tShirtStamp.getName());