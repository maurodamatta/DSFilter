import { ProductDTO } from '../../moldes/ProductDTO';
import './styles.css';

type Props = {
  product: ProductDTO;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className='card-product'>
      <p className='product-name'>{product.name}</p>
      <p className='product-price'>R$ {product.price}</p>
    </div>
  );
}