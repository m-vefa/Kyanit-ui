import './indicators.scss';


type IndicatorsPropType = {
    currentIndex: number;
    CHILDREN_LENGTH: number;
    updateIndex:(arg: number) => void
};
const Indicators: React.FC<IndicatorsPropType> = ({
    CHILDREN_LENGTH,
    currentIndex,
    updateIndex
}) => {
    return (
        <div className='slider-footer'>
            {Array(CHILDREN_LENGTH)
                .fill(null)
                .map((_, index) => (
                    <div
                        className={`dot ${index === currentIndex ? ' active' : ''}`}
                        onClick={() => updateIndex(index)}
                    ></div>
                ))
            }
        </div>

    );
};

export default Indicators;