import Image from "next/image";
import Link from "next/link";
import errorImage from "../../public/404-shopping.svg";
export const metadata = {
    title: "Page Not Found - E-Commerce Store",
    description: "Sorry, the page you are looking for does not exist.",
};

const NotFound = () => {
    return (
        <section className="flex items-center justify-center p-42 mb-10">
            <section className="w-full max-w-3xl text-center space-y-8">
                <section className="relative w-full h-64 md:h-80">
                    <Image
                        src={errorImage}
                        alt="404 illustration"
                        fillF
                        priority
                        className="object-contain"
                    />
                </section>

                <section className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Oops! Page Not Found
                    </h1>

                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                        We couldn&apos;t find the page you&apos;re looking for. The item
                        might have been moved or removed.
                    </p>
                </section>

                <section className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        asChild
                        size="lg"
                        className="bg-black hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-200 hover:border-blue-500 rounded"
                    >
                        <Link href="/">Back to Home</Link>
                    </button>
                </section>
            </section>
        </section>
    );
}

export default NotFound