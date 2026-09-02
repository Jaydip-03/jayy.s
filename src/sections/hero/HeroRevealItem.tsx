type HeroRevealItemProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function HeroRevealItem({
  children,
  className,
}: HeroRevealItemProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
