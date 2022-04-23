interface HeaderProps {
  title: string;
}

export const Header = ({title}:HeaderProps) => {
  return (
    <div className="py-12">
      <h1 className="text-4xl">{title}</h1>
    </div>
  )
};
