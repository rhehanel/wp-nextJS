import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
    title,
    destination,
    image
}) => {
    return (
        <Link href={destination} className="project-card block hover:bg-slate-600 relative">
            <div className="flex w-full h-full img-cont">
                <Image src={image}
                    fill={true}
                    className="object-cover relative mix-blend-soft-light"
                    alt=""
                />
            </div>
            <h3 className="absolute top-0 left-0 flex w-full h-full justify-center items-center text-center">{title}</h3>
        </Link>
    )
}