import "./RatingDisplay.scss";

interface RatingDisplayProps {
    rating: number
}

const RatingDisplay = ({ rating }: RatingDisplayProps) => {
    const getStarFullHalfOrEmpty = (star: number): string => {
        const halfRound = Math.round(rating) / 2;
        if (halfRound - star === -0.5) {
            return "Half"
        } else {
            return halfRound >= star ? "Full" : "Empty";
        }
    }

    const renderStars = () => {
        const stars = [1, 2, 3, 4, 5]
        return stars.map((star) =>
            <div className={`ratingStar star${getStarFullHalfOrEmpty(star)}`} key={star} />
        )
    }

    return (
        <div className='ratingWrapper'>
            <div className='ratingStars'>
                {renderStars()}
            </div>
        </div>
    )
}

export default RatingDisplay