type AvatarProps = {
  image: string;
  alt: string;
  size?: 'sm' | 'md';
};

export const Avatar: React.FC<AvatarProps> = ({ image, alt, size = 'md' }) => {
  return <img className="w-10 h-10 rounded-full" src={image} alt={alt} />;
};
