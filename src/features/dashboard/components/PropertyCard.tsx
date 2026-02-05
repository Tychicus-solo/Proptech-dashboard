interface PropertyCardProps {
  tag: string;
  title: string;
  image: string;
}

export const PropertyCard = ({ tag, title, image }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-[12px] overflow-hidden cursor-pointer shadow-sm border border-transparent hover:border-[#F4F4F5] transition-all">

      <div className="relative h-[280px] w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-[30px] left-4 right-4">
          <p className="text-[14px] font-medium text-white uppercase mb-1 opacity-90">
            {tag}
          </p>
          <h4 className="text-[18px] font-semibold text-white leading-tight">
            {title}
          </h4>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
};
