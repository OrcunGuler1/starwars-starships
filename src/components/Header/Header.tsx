const Header = ({ children, className }: HeaderProps) => {
  return <header className={className}>{children}</header>
}

export default Header

type HeaderProps = {
  children: React.ReactNode
  className?: string
}
