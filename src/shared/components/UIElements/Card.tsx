
type CardProps = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  url: string;
}

const Card = ({title, description, image, buttonText, url}: CardProps) => {

  const handleButtonClick = () => {
    // window.location.href="https://nattours24.netlify.app";
    window.open(url, "_blank");
  }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
    );
};

export default Card;