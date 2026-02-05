const baseClasses = `
  relative text-center whitespace-nowrap 
  outline-none active:scale-97 
  focus:outline-none focus-visible:outline-none focus-visible:ring-2 
  focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 
  active:ring-0 active:opacity-60 
  body-small-plus px-6 py-2
`.trim().replace(/\s+/g, ' ')

const variants = {
    default: "bg-neutral-850 text-neutral-50 hover:bg-neutral-800 hover:text-neutral-50 focus-visible:ring-neutral-800 focus-visible:bg-neutral-850",
    primary: "gold-gradient-1 text-neutral-950 hover:opacity-90 focus-visible:ring-primary-500",
}

const disabledVariants = {
    default: "cursor-not-allowed opacity-50 bg-neutral-850 text-neutral-50",
    primary: "cursor-not-allowed opacity-50 gold-gradient-1 text-neutral-950",
}

const borders = {
    default: "rounded-full",
    primary: "rounded-full",
    rounded: "rounded",
}

interface IButtonProps {
    children: React.ReactNode,
    type?: "button" | "submit",
    onClick?: () => void,
    classes?: string,
    variant?: keyof typeof variants,
    borderRadius?: keyof typeof borders,
    disabled?: boolean,
}

export default function Button({ children, classes, variant, borderRadius, onClick, type, disabled }: IButtonProps) {

    const variantClasses = disabled
        ? disabledVariants[variant ?? "default"]
        : variants[variant ?? "default"]
    const borderRadiusClasses = borders[borderRadius ?? "default"]
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`${baseClasses} ${variantClasses} ${borderRadiusClasses} ${classes ?? ''}`}>
            {children}
        </button>
    )
}