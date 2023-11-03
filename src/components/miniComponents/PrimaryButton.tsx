import Link from "next/link"
interface PrimaryButtonProps {
    href: string;
    text: string;
  }
const PrimaryButton: React.FC<PrimaryButtonProps> = ({href, text}) => {
    return (
        <button>
            <Link href={href} className="px-4 py-2 border border-pink-600 text-white font-semibold">
                {text}
            </Link>
        </button>
    )
}

export default PrimaryButton