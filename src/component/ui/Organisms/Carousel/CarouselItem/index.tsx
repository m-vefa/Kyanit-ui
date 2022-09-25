import { CarouselContent } from '../../../../../models/models';
import './CarouselItem.scss';

type CarouselItemProps = {
  item: CarouselContent
};

const CarouselItem: React.FC<CarouselItemProps> = ({
  item
}) => {
  return (

    <div className='carousel-item'>

      <article className="item-text">
       <h1>{item.header}</h1>
        <p>{item.paragraph}</p>
        <a className="btn hero-btn" href="/products">
          {item.buttonText}
        </a>

      </article>

      <div className="item-image">
          <img src={item.image} alt="" />
        </div>
    </div>
  );
};

export default CarouselItem;
